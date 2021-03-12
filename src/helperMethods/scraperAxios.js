const axios = require('axios');
const cheerio = require('cheerio');
const download = require('node-image-downloader');
const fs = require('fs');

const BASE_URL = "http://onthesetofnewyork.com";
const FULL_FILM_LIST = "/filmlocations-a-z.html";

let fullOnTheSetData;

function getMainPage() {
    axios({
        method: 'get',
        url: BASE_URL + FULL_FILM_LIST,
        headers: {
            'User-Agent': 'To allow access',
        }
    }).then((res) => {
        if(res.status == 200) {
            return res;
        }
    }).catch(err => {
        console.error(err);
    }) 
}

async function main() {
    try {
        // var data = await getMainPage();
        var response = await axios({
            method: 'get',
            url: BASE_URL + FULL_FILM_LIST,
            headers: {
                'User-Agent': 'To allow access',
            }});

        // console.log(response.data);
        const $ = cheerio.load(response.data);
        // console.log($('#post-20'));

        const films = $('#post-20').find('table').eq(0);

        // get all the links on the full list page
        const links = getAllLinks(films, $);
        
        // console.log(links.length);
        // fullOnTheSetData = new Array(links.length).fill(false);

        // pages data
        let pages = [];
        let promises = [];

        // get pages and place the axios gets in promises so you can use them later once all the promises are returned saying that all the pages have been pushed into the array
        for(let i = 0; i < links.length;i++) {
            try {
                promises.push(
                    
                        axios({
                            method: 'get',
                            url: BASE_URL + links[i],
                            headers: {
                                'User-Agent': 'To allow access',
                            }})
                            .then(res => {
                                const $_page = cheerio.load(res.data);
                                pages.push($_page);
                            })
                    
                ) }
            catch(err) {

            }
        }

        // prepare to store the data from the webpages
        // data will be an array of {} with members title, year, summary, moviePoster, locationInfo, images, neighborhood, comment
        fullOnTheSetData = [];

        // use the promises to access each page and store it in the full data set
        Promise.all(promises).then(() => {
            pages.map($ => {

                // id post-20 is where the movie info actually lives
                const meatOfData = $('#post-20');
                const header = meatOfData.find('h2').text(); 
                const title = header.replace(/\([\d]*\)/, "").trim();
                const year = header.match(/\([\d]*\)/).join('').replace(/\(|\)/g,'');   // find the year using parenthesis and then replace the parenthesis
                const summary = meatOfData.find('table').eq(0).text().replace(/\s\s+/g,"");
                const moviePoster = BASE_URL + '/' + meatOfData.find('img').eq(0).attr('src');
                console.log(title);

                // using the page info and cheerio, this will access each movie page and return a list of objects
                // the object has: each address, the associated images, neighborhood, and comments for the page
                const movieAddressImgsAndComments = getAddressCommentsImgs(meatOfData, $);

                // console.log(movieAddressImgsAndComments);

                // go through each address entry and build the json representation we use for the location data
                movieAddressImgsAndComments.forEach((obj) => {
                    const locationFullInfo = {
                        title: title,
                        year: year,
                        summary: summary,
                        moviePoster: moviePoster,
                        locationInfo: {
                            address: obj.address,
                            coords: [0,1]
                        },
                        images: obj.images,
                        neighborhood: obj.neighborhood,
                        comment: obj.comment
                    };
                    fullOnTheSetData.push(locationFullInfo);
                })

            })

            // console.log(fullOnTheSetData);
            // write JSON string to a file
            const data = JSON.stringify(fullOnTheSetData, null, 4);
            fs.writeFile('userFull.json', data, (err) => {
                if (err) {
                    throw err;
                }
                console.log("JSON data is saved.");
            });
        }).catch(err => {
            console.log(err);
        });
        

    } catch(error) {
        console.error(error);
    }
    
}


// takes in a node element, returns all the links inside the node element
function getAllLinks(nodeElement, $) {
    const numLinks = nodeElement.find('a').length;
    let links = new Array(numLinks).fill(0);
    nodeElement.find('a').each((i, el) => {
        links[i] = "/" + $(el).attr('href');
    });

    return links;
    // console.log(nodeElement.find('a').length);
}

// param: section of the film page with the movie information
// return: an object with the addresses, their images, comments, and neighborhood
function getAddressCommentsImgs(movieSection, $) {
    let data = [];
    // all the tables with an address have a background attribute
    const tablesWithAddresses = movieSection.find('table').filter("[background]");
    tablesWithAddresses.each((i, el) => {
        // console.log($(el).html())
        let imgArr = [];
        let comment = "";

        // the address is inside the second table
        // the image right below this table is also important
        if(i % 2 != 0) {
            // get all the images before, they match with the address
            const sectionWithImgAndComment = $(el).prev('table').prevUntil('table');
            
            // store the actual src from that list of images
            sectionWithImgAndComment.has('img').each(function(i, elem){
                const fullImgLink = BASE_URL + '/' + $(elem).find('img').attr('src');
                imgArr.push(fullImgLink);
            });
            // console.log(imgArr);
            
            // final image is below the address. Two paragraphs below
            const finalimage = BASE_URL + '/' + $(el).next('p').next('p').find('img').eq(0).attr('src');
            
            imgArr.push(finalimage);

            // check if a comment exists in the images
            if(sectionWithImgAndComment.has('b').length > 0) {
                // grab a comment
                // To do, maybe loop through comments in case there are more than one. Only grab one now as most sections have zero comments
                comment = sectionWithImgAndComment.has('b').eq(0).html().replace(/^.*?(?=<\/b>)/, "").replace('</b>', "").replace(/(&#x2019;|&apos;)/, "'").trim();
                // console.log("The comment", comment);
            }
            

            // full address text
            const addressText = $(el).find('b').text();

            const regex = new RegExp(/(\)|,)/);     // use this to split the final part the address from the neighborhood, which is preceded with a comma or close parenethesis

            // the left is the address in arr form, the right is the neighrborhood in one array
            const [addressArr, neighborhoodArr] = [addressText.split(regex).slice(0,-1),addressText.split(regex).slice(-1)];

            // rejoin the address and remove the info they have in parenthesis, this info will just confuse map apis trying to understand the address
            const addressCleanedUp = addressArr.join('').replace(/\(.*\)/, '').replace(/,$/, '').trim();

            // make the neighborhood a string and remove the period at the end if it exists
            const neighborhoodCleanedUp = neighborhoodArr.join('').replace(/.$/, '').trim();


            // build address and neighborhood??
            // const locationInfo = {
            //     address: addressCleanedUp,
            //     neighborhood: neighborhoodCleanedUp,
            // }

            const finalDataCompiled = {
                address: addressCleanedUp,
                neighborhood: neighborhoodCleanedUp,
                images: imgArr,
                comment: comment,
            }

            data.push(finalDataCompiled);

            // console.log("The address and neighborhood information", finalDataCompiled);

            // with all this info, I need to fill data with an object
            // address: String, images: [], neighborhood: string, comment: string
            
        }
        
    })

    return data;
}

// Send a list of links
// return a body for all those links?
async function getPages(links) {
    let pages = [];
    let promises = [];
    await Promise.all(links.map(link => {
        // console.log(link)
        axios({
            method: 'get',
            url: BASE_URL + link,
            headers: {
                'User-Agent': 'To allow access',
            }})
            .then(res => {
                console.log(res.data);
                pages.push(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }))
    return pages;
}



main();