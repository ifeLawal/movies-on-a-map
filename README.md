## Tools used

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

    * [ReactJS](https://reactjs.org/) is used to make the components that populate the site. Example code from my project for context, taken from my MapDisplay.js component:

    ```javascript
        export class MapDisplay extends React.Component {
    
            state = {
                lat: 40.7651838,
                lng: -73.9829905,
                zoom: 14,
            }

            render() {
                        // const imgSize = 
                const locationList = this.props.location;

                const mapStyle = {width: "100%", height: "600px"}
                return (
                    <Map 
                        className=""
                        center={[this.state.lat,this.state.lng]}
                        zoom={this.state.zoom}
                        style={mapStyle}

                    >
                    .
                    .
                    .
                    </Map>
                )
            }
        }

        export default MapDisplay;
    ```

* [A bundled React version of Leaflet.js](https://react-leaflet.js.org/) was used to create the map view and populate the pins (it's what provides the **map component** in the above sample code). You can also play around with [Leafet.js](https://leafletjs.com/) without react. The leaflet.js website has great documentation and resources for getting started quickly and experimenting. Here is an example of some of their sample code which adds a map tile to a HTML element with the class .map:

```javascript
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
```

* [The "On the Set of New York" website](http://onthesetofnewyork.com/home.html) provided the base data set! They have a listing of about 2 - 3 NYC addresses for 600+ movies, pictures of the scenes, and occasional comments.

* The "On the Set of New York" website data is not accessible in an API, so using [cheerio.js](https://cheerio.js.org/) and [axios](https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index) I scrapped and cleaned the data to make it usable. There is definitely room to improve on how this was executed, but here is the sample code snippet putting the two together:

```javascript
const axios = require('axios');
const cheerio = require('cheerio');

const BASE_URL = "http://onthesetofnewyork.com";
const FULL_FILM_LIST = "/filmlocations-a-z.html";

// server requests are not synchronous and have to be waited for
async function main() {
    try {
        // utilize axios to access the on te set website
        var response = await axios({
            method: 'get',
            url: BASE_URL + FULL_FILM_LIST,
            headers: {
                'User-Agent': 'To allow access',
            }});
        
        // cheerios loads the website html and allows you to access it similar to accessing HTML elements in jquery, aka the $
        const $ = cheerio.load(response.data);

        // the address information and movie listing are under the post-20 id in the "On The Set" website
        const films = $('#post-20').find('table').eq(0);

        // get all the links on the full list page
        const links = getAllLinks(films, $);
        .
        .
        .
    } catch(error) {
        console.error(error);
    }
}
```
* [Bootstrap](https://getbootstrap.com/) allowed for quickly styling the page and making it mobile friendly. There are custom CSS attributes as well and one future to do is to incorporate [postCSS](https://postcss.org/) in the workflow so SASS can be added to the styling as input boxes for user address submissions get added. 

* Node manages all the packages.

****

Putting all that together, this "app" displays a static listing of movie scenes and the addresses of where those scenes happened. So far the index only contains NYC movies. I'm hoping to add a map that pins the movies at their appropriate locations and other features for NYC before expanding locations.

## Map View

![A map of manhattan with blue pins representing movie locations.](https://drive.google.com/uc?id=16sE3VF_vxsRUt5RtRy18LSIR9J3l-NyN)

## List View

![An interface with a movie poster for 'For Richer or Poorer' and 'Purple Violets'.](https://drive.google.com/uc?id=1-drpninTserL5fTfsAP9UjYum26Sgy3X)

This project involved web scrapping the [on the set of new york website](http://onthesetofnewyork.com/home.html) using cherio.js, [cheerio documentation can be found here](https://cheerio.js.org/) and using nodejs and fs to clean up the data and write it up to a json file.

****

## Installation

Install the node_module packages to run the project.

```
$ npm install
```

## Start

```
$ npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Hot reload is setup, so the page will reload if you make edits.<br />

You will also see any lint errors in the console.

For a list of other create-react-app commands you can [check out their site for the available scripts](https://create-react-app.dev/docs/available-scripts/) or check the package.json for the standard scripts.

****

## Things to add

- Set up a server and serve the data using Express across each page
- Add individual pages for people to learn more about each movie
- Add sorting by popularity
- Add user input some users can submit movies and addresses
- Bring in [imgix](https://www.imgix.com/imgix-js) to serve the images in a more efficient way, especially as user input gets added