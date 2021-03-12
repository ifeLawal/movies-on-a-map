'use strict'


const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'data', 'locationListFull.json');

var shuffleArr = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

let rawdata = fs.readFileSync(DATA_FILE);
let data = JSON.parse(rawdata);

const shuffleData = shuffleArr(data).slice(0, 100);
data = JSON.stringify(shuffleData, null, 4);

const shuffledDataFile = path.join(__dirname,'..','data','shuffledReducedLocationList.json');

fs.writeFile(shuffledDataFile, data, (err) => {
    if(err) {
        throw err;
    }
    console.log("JSON data is saved.");
});

