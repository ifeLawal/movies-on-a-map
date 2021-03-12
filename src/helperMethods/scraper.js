const cheerio = require('cheerio');
const request = require('request');
const rp = require('request-promise');

const BASE_URL = "http://onthesetofnewyork.com";
const FULL_FILM_LIST = "/filmlocations-a-z.html";

var data;

// set request defaults
req = request.defaults({
    jar: true,                  // save cookies to jar
    rejectUnauthorized: false,
    followAllRedirects: true    // allow redirections
});

// get the main page
function getMainPage() {
    req.get({
        url: BASE_URL + FULL_FILM_LIST,
        headers: {
            'User-Agent': 'To allow access',    // On the set blocks scrapes with no user agent
        }
    }, (err, res, body) => {
        if(!err && res.statusCode == 200) {
            
            const $ = cheerio.load(body);
            console.log({body, $});
            const films = $('#post-20');

            // console.log(films.find('a').length);

            

            // const numLinks = films.find('a').length;
            // let links = new Array(numLinks).fill(0);
            // films.find('a').each((i, link) => {
            //     console.log($(link).text());
            // })

            // const filmLinks = getAllLinks(films, $);
            // const sampleLink = "/" + $(films.find('a')[0]).attr('href');
            // const samplePageElem = getPageElement(sampleLink);
            // console.log(samplePageElem);

            // const pages = filmLinks.map((link) => {
            //     return getPage(link);
            // });


            // getAllLinks(films);
        }
        
    });
}



// takes in a node element, returns all the links inside the node element
function getAllLinks(nodeElement, $) {
    const numLinks = nodeElement.find('a').length;
    let links = new Array(numLinks).fill(0);
    nodeElement.find('a').each((i, el) => {
        numLinks[i] = "/" + $(el).attr('href');
    });

    return links;
    // console.log(nodeElement.find('a').length);
}


// request url add-on to homepage.
// return the page
function getPageElement(urlPage, element = '#post-20') {
    req.get({
        url: BASE_URL + urlPage,
        headers: {
            'User-Agent': 'Let me in'
        }
    },  (err, res, body) => {
        if(err && res.statusCode != 200) {
            // console.log(body);
            return callback(err || {statusCode: res.statusCode});
        }
        return "5";
    })
}

async function main() {
    let myData = await getMainPage();
    console.log(getMainPage());
}

main();

// request(BASE_URL + FILM_LOCATIONS, (error, response, html) => {
//     if(!error && response.statusCode == 200) {
//         console.log(html);
//     }
// })