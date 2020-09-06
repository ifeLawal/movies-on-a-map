This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app displays a static listing of movie scenes and the addresses of where those scenes happened. So far the index only contains NYC movies. I'm hoping to add a map that pins the movies at their appropriate locations and other features for NYC before expanding locations.

![An interface with a movie poster for 'They Came Together' and 'Alien Space Avenger'.](https://drive.google.com/uc?id=1va_7ww0DiL4rbk353FjM4p-JwnOwj7So)

This project involved web scrapping the [on the set of new york website](http://onthesetofnewyork.com/home.html) using cherio.js, [cheerio documentation can be found here](https://cheerio.js.org/) and using nodejs and fs to clean up the data and write it up to a json file.

## To Do
* Set up routing to have people use the site from github
* Have a carousel to move through the different images associated with the address
* Set up individual pages for each movie that you can click into
* Have a map that pins the movie locations
* Set up a server

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

For a list of other create-react-app commands you can [check out their site for the available scripts](https://create-react-app.dev/docs/available-scripts/) or check the package.json for the standard scripts.