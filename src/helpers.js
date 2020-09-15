const Helper = (function() {

    function shuffle() {
        return shuffleArr(locationList);
    }

    // random shuffle array code from stackoverflow
    // used to shuffle board order
    /**
     * Randomly shuffle an array
     * https://stackoverflow.com/a/2450976/1293256
     * @param  {Array} array The array to shuffle
     * @return {String}      The first item in the shuffled array
     */
    const shuffleArr = function (array) {

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

    const locationList = [
        {
            "title": "They Came Together",
            "year": "2014",
            "summary": "Joel (Paul Rudd), a candy company executive, threatens to close down Molly's (Amy Poehler) mom-and-pop candy store, but the unlikely pair begin to fall in love.",
            "moviePoster": "/theycametogether/theycametogetherposter.jpg",
            "locationInfo": {
                "address": "2nd Avenue",
                "coords": [
                    -73.979116,
                    40.745148
                ]
            },
            "images": [
                "/theycametogether/theycametogether30.jpg",
                "/theycametogether/theycametogether29.jpg",
                "/theycametogether/theycametogether28.jpg",
                "/theycametogether/theycametogether27.jpg",
                "/theycametogether/theycametogether51.jpg",
                "/theycametogether/theycametogether50.jpg"
            ],
            "neighborhood": "Manhattan, Gramercy",
            "comment": "",
            "place_name": "2nd Ave Deli, 162 E 33rd St, New York, New York 10016, United States",
            "Year": "2014",
            "Rated": "R",
            "Released": "05 Sep 2014",
            "Runtime": "83 min",
            "Genre": "Comedy, Romance",
            "Director": "David Wain",
            "Writer": "Michael Showalter, David Wain",
            "Actors": "Paul Rudd, Amy Poehler, Bill Hader, Ellie Kemper",
            "Plot": "Molly owns a quaint little sweet shop. Joel works for a gigantic candy company threatening to shut her down. How they meet, fall in love, break up and get back together is hilariously recounted in this rom-com spoof.",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTkzNzA2Nzc1Ml5BMl5BanBnXkFtZTgwNzcwNzk3MTE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.5/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "68%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "60/100"
                }
            ],
            "Metascore": "60",
            "imdbRating": "5.5",
            "imdbVotes": "20,922",
            "imdbID": "tt2398249",
            "Type": "movie",
            "DVD": "02 Sep 2014",
            "BoxOffice": "N/A",
            "Production": "Lionsgate",
            "Website": "N/A"
        },
        {
            "title": "Alien Space Avenger",
            "year": "1989",
            "summary": "A group of extraterrestrial criminals go on the run from a powerful intergalactic bounty hunter in this sci-fi action film. The alien offenders eventually crash land in New York City and take over a series of human bodies in order to hide from their pursuer.",
            "moviePoster": "/alienspaceavenger/alienspaceavengerposter.jpg",
            "locationInfo": {
                "address": "Merchant's Gate Fountain, Columbus Circle and Central Park West",
                "coords": [
                    -73.98167875,
                    40.768813625
                ]
            },
            "images": [
                "/alienspaceavenger/alienspaceavenger12.jpg",
                "/alienspaceavenger/alienspaceavenger11.jpg",
                "/alienspaceavenger/alienspaceavenger21.jpg",
                "/alienspaceavenger/alienspaceavenger22.jpg"
            ],
            "neighborhood": "Manhattan, Upper West Side",
            "comment": "",
            "place_name": "Merchants' Gate, Columbus Cir, New York, New York 10023, United States",
            "Year": "1989",
            "Rated": "N/A",
            "Released": "04 Jun 1992",
            "Runtime": "80 min",
            "Genre": "Comedy, Horror, Sci-Fi",
            "Director": "Richard W. Haines",
            "Writer": "Lynwood Shiva Sawyer (screenplay), Leslie Delano (contributing screenwriter), Brad Dunker (contributing screenwriter), Richard W. Haines, Kay Gelfman (contributing screenwriter)",
            "Actors": "Robert Prichard, Michael McCleery, Charity Staley, Gina Mastrogiacomo",
            "Plot": "In 1939 a spaceship carrying four alien escaped prisoners crash-lands on Earth and the aliens take over the bodies of four locals. Fifty years later the aliens find out that an artist has ...",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQwMTdmMTUtNjFhYi00Mzc2LThmMDktMjI1MzRhMDUzNGUwXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.1/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "5.1",
            "imdbVotes": "216",
            "imdbID": "tt0101296",
            "Type": "movie",
            "DVD": "04 Jun 1992",
            "BoxOffice": "N/A",
            "Production": "A I P Home Video",
            "Website": "N/A"
        },
        {
            "title": "Miss Congeniality 2: Armed & Fabulous",
            "year": "22005",
            "summary": "The FBI agent Gracie Hart (Sandra Bullock) is assigned to promote the FBI, touring with the brutalagent Sam Fuller as her bodyguard. While traveling around the country, her friend and Miss USA is kidnapped with StanFields, and Gracie decides to investigate the abduction in Las Vegas by her own and against the direct orders of local chief Collins.",
            "moviePoster": "/misscongeniality2/misscongeniality2poster.jpg",
            "locationInfo": {
                "address": "PS 11 William T Harris School, 320 West 21st Street and 8th Avenue",
                "coords": [
                    -74.000558,
                    40.74443
                ]
            },
            "images": [
                "/misscongeniality2/misscongeniality2_08.jpg",
                "/misscongeniality2/misscongeniality2_09.jpg",
                "/misscongeniality2/misscongeniality2_07.jpg",
                "/misscongeniality2/misscongeniality2_06.jpg",
                "/misscongeniality2/misscongeniality2_11.jpg",
                "/misscongeniality2/misscongeniality2_10.jpg"
            ],
            "neighborhood": "Manhattan, Chelsea",
            "comment": "Notice that the sign on the front of the school clearly shows PS 31, when \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tin fact the school is PS 11 on 21st Street.",
            "place_name": "P.S. 11 William T. Harris Elementary School, 320 W 21st St, New York, New York 10011, United States",
            "Year": "2005",
            "Rated": "PG-13",
            "Released": "24 Mar 2005",
            "Runtime": "115 min",
            "Genre": "Action, Comedy, Crime",
            "Director": "John Pasquin",
            "Writer": "Marc Lawrence (characters), Katie Ford (characters), Caryn Lucas (characters), Marc Lawrence",
            "Actors": "Sandra Bullock, Regina King, Enrique Murciano, William Shatner",
            "Plot": "After Cheryl Frasier (Heather Burns) and Stan Fields (William Shatner) are kidnapped, Gracie Hart (Sandra Bullock) goes undercover in Las Vegas, Nevada to find them.",
            "Language": "English",
            "Country": "USA",
            "Awards": "2 wins & 5 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxNzk2OTI2OV5BMl5BanBnXkFtZTcwODk0MDIzMw@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.1/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "15%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "34/100"
                }
            ],
            "Metascore": "34",
            "imdbRating": "5.1",
            "imdbVotes": "68,298",
            "imdbID": "tt0385307",
            "Type": "movie",
            "DVD": "21 Jun 2005",
            "BoxOffice": "$47,100,000",
            "Production": "Warner Bros.",
            "Website": "N/A"
        },
        {
            "title": "Most Beautiful Island",
            "year": "2017",
            "summary": "Most Beautiful Island chronicles one harrowing day in the life of Luciana (Ana Asensio), a young immigrant woman struggling to make ends meet while striving to escape her past. As Luciana's day unfolds, she is whisked, physically and emotionally, through a series of troublesome and unforeseeable extremes. Before her day is done, she inadvertently finds herself a central participant in a cruel game where lives are placed at risk, and psyches are twisted and broken for the perverse entertainment of a privileged few.",
            "moviePoster": "/mostbeautifulisland/mostbeautifulislandposter.jpg",
            "locationInfo": {
                "address": "Grand Central Terminal, 89 East 42nd Street and Park Avenue",
                "coords": [
                    -73.977264,
                    40.752817
                ]
            },
            "images": [
                "/mostbeautifulisland/mostbeautifulisland03.jpg",
                "/mostbeautifulisland/mostbeautifulisland02.jpg",
                "/mostbeautifulisland/mostbeautifulisland01.jpg",
                "/mostbeautifulisland/mostbeautifulisland09.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "Grand Central Terminal Clock, Grand Central Terminal, New York, New York 10017, United States",
            "Year": "2017",
            "Rated": "N/A",
            "Released": "03 Nov 2017",
            "Runtime": "80 min",
            "Genre": "Drama, Horror, Thriller",
            "Director": "Ana Asensio",
            "Writer": "Ana Asensio",
            "Actors": "Ana Asensio, Natasha Romanova, David Little, Nicholas Tucci",
            "Plot": "Most Beautiful Island is a chilling portrait of an undocumented young woman's struggle for survival as she finds redemption from a tortured past in a dangerous game.",
            "Language": "English, Spanish",
            "Country": "USA",
            "Awards": "3 wins & 6 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BY2FiYTk1MTEtYjgyMi00MjA5LWJkZjktMTNhZmVkMWI3NWRkXkEyXkFqcGdeQXVyMjE4NzUxNDA@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.7/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "93%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "73/100"
                }
            ],
            "Metascore": "73",
            "imdbRating": "5.7",
            "imdbVotes": "2,876",
            "imdbID": "tt4866448",
            "Type": "movie",
            "DVD": "02 Nov 2017",
            "BoxOffice": "N/A",
            "Production": "Samuel Goldwyn Films",
            "Website": "N/A"
        },
        {
            "title": "Down to You",
            "year": "2000",
            "summary": "Al Connelly (Freddie Prinze Jr.) meets the girl of his dreams, freshman Imogen (Julia Stiles), and true love abounds. Thetwo engage on a whirlwind courtship--they pick a song, eat a cake together, even make love. But Imogen's fear of lost youth causes her to push away from Al, andthey go their separate ways. Al attempts to rebound from the relationship, determined to forget Imogen, and he goes to desperate measures to do so. The story istold from the points of view of both Al and Imogen.",
            "moviePoster": "/downtoyou/downtoyouposter.jpg",
            "locationInfo": {
                "address": "Pond  Central Park",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/downtoyou/downtoyou03.jpg",
                "/downtoyou/downtoyou02.jpg",
                "/downtoyou/downtoyou01.jpg",
                "/downtoyou/downtoyou25.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": "",
            "Year": "2000",
            "Rated": "PG-13",
            "Released": "21 Jan 2000",
            "Runtime": "91 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Kris Isacsson",
            "Writer": "Kris Isacsson",
            "Actors": "Freddie Prinze Jr., Julia Stiles, Selma Blair, Shawn Hatosy",
            "Plot": "A young man wins and loses the first serious love of his life. Al Connelly falls in love with the girl of his dreams. After the summer she breaks up with him. As he tries to recover Al goes to desperate measures.",
            "Language": "English, French",
            "Country": "USA",
            "Awards": "1 win & 4 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTI3NDIxMTIwMF5BMl5BanBnXkFtZTcwNTQ3MTIyMQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.0/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "3%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "13/100"
                }
            ],
            "Metascore": "13",
            "imdbRating": "5.0",
            "imdbVotes": "14,054",
            "imdbID": "tt0186975",
            "Type": "movie",
            "DVD": "11 Jul 2000",
            "BoxOffice": "N/A",
            "Production": "Miramax",
            "Website": "N/A"
        },
        {
            "title": "Can You Ever Forgive Me?",
            "year": "2018",
            "summary": "Lee Israel (Melissa McCarthy) made her living in the 1970's and 80's profiling the likes of Katharine Hepburn, Tallulah Bankhead, Estee Lauder and journalist Dorothy Kilgallen. When Lee is no longer able to get published because she has fallen out of step with current tastes, she turns her art form to deception, abetted by her loyal friend Jack (Richard E. Grant).",
            "moviePoster": "/canyoueverforgiveme/canyoueverforgivemeposter.jpg",
            "locationInfo": {
                "address": "Central Park",
                "coords": [
                    -73.98,
                    40.77
                ]
            },
            "images": [
                "/canyoueverforgiveme/canyoueverforgiveme61.jpg",
                "/canyoueverforgiveme/canyoueverforgiveme60.jpg",
                "/canyoueverforgiveme/canyoueverforgiveme59.jpg",
                "/canyoueverforgiveme/canyoueverforgiveme58.jpg",
                "/canyoueverforgiveme/canyoueverforgiveme78.jpg",
                "/canyoueverforgiveme/canyoueverforgiveme79.jpg"
            ],
            "neighborhood": "Manhattan, Manhattan",
            "comment": "",
            "place_name": "Central Park, Manhattan, New York, New York 10024, United States",
            "Year": "2018",
            "Rated": "R",
            "Released": "02 Nov 2018",
            "Runtime": "106 min",
            "Genre": "Biography, Comedy, Crime, Drama",
            "Director": "Marielle Heller",
            "Writer": "Nicole Holofcener (screenplay by), Jeff Whitty (screenplay by)",
            "Actors": "Melissa McCarthy, Richard E. Grant, Dolly Wells, Ben Falcone",
            "Plot": "When Lee Israel falls out of step with current tastes, she turns her art form to deception.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Nominated for 3 Oscars. Another 53 wins & 93 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTFkZmFmNzEtM2FjZC00MmQ1LThlMjctODc1M2RmNzE5NjFjXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.1/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "98%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "87/100"
                }
            ],
            "Metascore": "87",
            "imdbRating": "7.1",
            "imdbVotes": "44,734",
            "imdbID": "tt4595882",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "Fox Searchlight Pictures",
            "Website": "N/A"
        },
        {
            "title": "Single White Female",
            "year": "1992",
            "summary": "Allison Jones (Bridget Fonda) is a successful software designer working in bustling Manhattan, along with hersuccessful career, she lives in a very trendy apartment and has a handsome boyfriend Sam. But when she finds out that Sam has been cheating on her, she has nooption but to start out on her own. Determined not to lose her apartment, she advertises for a roommate. After failed interviews, she finally comes across Hedra Carlson (Jennifer Jason Leigh). At first everything seems to be running smoothly, with the self-centred Allison enjoying Hedra's company and her constant willingness to please. But things start to turn strange when Hedra begins copying Allison, her hair style, the clothes she wears and even the way she acts. When Allison decidesto give her ex boyfriend, Sam, another chance and asks him to move in, she asks Hedra to look for new accommodation, unleashing a very weird and psychotic side to her roommate.",
            "moviePoster": "/singlewhitefemale/singlewhitefemaleposter.jpg",
            "locationInfo": {
                "address": "Broadway and West 75th Street",
                "coords": [
                    -73.9814257,
                    40.7810582
                ]
            },
            "images": [
                "/singlewhitefemale/singlewhitefemale102.jpg",
                "/singlewhitefemale/singlewhitefemale101.jpg",
                "/singlewhitefemale/singlewhitefemale157.jpg"
            ],
            "neighborhood": "Manhattan, Upper West Side",
            "comment": "",
            "place_name": "Broadway and West 75th Street, New York, New York 10023, United States",
            "Year": "1992",
            "Rated": "R",
            "Released": "14 Aug 1992",
            "Runtime": "107 min",
            "Genre": "Drama, Thriller",
            "Director": "Barbet Schroeder",
            "Writer": "John Lutz (novel), Don Roos (screenplay)",
            "Actors": "Bridget Fonda, Jennifer Jason Leigh, Steven Weber, Peter Friedman",
            "Plot": "A woman advertising for a new roommate finds that something very strange is going on with the tenant who decides to move in.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win & 1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYjNmMTNjYzEtNGIzOC00ZDc2LWFjN2UtZTNmZjgxZDJkNzBlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.4/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "54%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "63/100"
                }
            ],
            "Metascore": "63",
            "imdbRating": "6.4",
            "imdbVotes": "31,439",
            "imdbID": "tt0105414",
            "Type": "movie",
            "DVD": "24 Feb 1998",
            "BoxOffice": "N/A",
            "Production": "Columbia Pictures",
            "Website": "N/A"
        },
        {
            "title": "Confessions of a Shopaholic",
            "year": "2009",
            "summary": "Struggling with her debilitating obsession with shopping and the sudden collapse of her income source, Rebecca Bloomwood (Isla Fisher)unintentionally lands a job writing for a financial magazine after a drunken letter-mailing mix-up. Ironicallywriting about the very consumer caution of which she herself has not abided, Rebecca's innovative comparisons and unconventional metaphors for economics grants her criticalacclaim, public success, and the admiration of her supportive boss Luke. But as she draws closer to her ultimate goal of writing for renowned fashion magazine Alette, shequestions her true ambitions and must determine if overcoming her \"shopaholic\" condition will bring her real happiness.",
            "moviePoster": "/confessionsofashopaholic/confessionsofashopaholicposter2.jpg",
            "locationInfo": {
                "address": "Madison Avenue",
                "coords": [
                    -73.983094,
                    40.744777
                ]
            },
            "images": [
                "/confessionsofashopaholic/confessionsofashopaholic23.jpg",
                "/confessionsofashopaholic/confessionsofashopaholic21.jpg",
                "/confessionsofashopaholic/confessionsofashopaholic20.jpg",
                "/confessionsofashopaholic/confessionsofashopaholic105.jpg",
                "/confessionsofashopaholic/confessionsofashopaholic104.jpg",
                "/confessionsofashopaholic/confessionsofashopaholic107.jpg"
            ],
            "neighborhood": "Manhattan, Flatiron District",
            "comment": "",
            "place_name": "Madison Avenue Baptist Church, 30 E 31st St, New York, New York 10016, United States",
            "Year": "2009",
            "Rated": "PG",
            "Released": "13 Feb 2009",
            "Runtime": "104 min",
            "Genre": "Comedy, Romance",
            "Director": "P.J. Hogan",
            "Writer": "Tracey Jackson (screenplay), Tim Firth (screenplay), Kayla Alpert (screenplay), Sophie Kinsella (books)",
            "Actors": "Isla Fisher, Hugh Dancy, Krysten Ritter, Joan Cusack",
            "Plot": "A college grad lands a job as a financial journalist in New York City to support where she nurtures her shopping addiction and falls for a wealthy entrepreneur.",
            "Language": "English, Finnish, Spanish, French",
            "Country": "USA",
            "Awards": "1 win & 3 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ1MzcyMTkwOF5BMl5BanBnXkFtZTcwMDM3MTc5MQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.9/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "25%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "38/100"
                }
            ],
            "Metascore": "38",
            "imdbRating": "5.9",
            "imdbVotes": "73,572",
            "imdbID": "tt1093908",
            "Type": "movie",
            "DVD": "23 Jun 2009",
            "BoxOffice": "$44,239,688",
            "Production": "Walt Disney Studios",
            "Website": "N/A"
        },
        {
            "title": "The Odd Couple",
            "year": "1968",
            "summary": "Felix Ungar (Jack Lemmon) has just broken up with his wife. Despondent, he goes to kill himself butis saved by his friend Oscar Madison (Walter Matthau). With nowhere else to go, Felix is urged by Oscar to move in with him, at least for a while. The only problemis that Felix is neat, tidy, and neurotic, whereas Oscar is slovenly and casual.",
            "moviePoster": "/theoddcouple/theoddcoupleposter.jpg",
            "locationInfo": {
                "address": "Shea Stadium, 12301 Roosevelt Avenue, Flushing Meadows Park",
                "coords": [
                    -73.722477,
                    40.715036
                ]
            },
            "images": [
                "/theoddcouple/theoddcouple22.jpg",
                "/theoddcouple/theoddcouple21.jpg",
                "/theoddcouple/theoddcouple19.jpg",
                "/theoddcouple/theoddcouple20.jpg",
                "/theoddcouple/theoddcouple28.jpg",
                "/theoddcouple/theoddcouple27.jpg",
                "/theoddcouple/theoddcouple25.jpg"
            ],
            "neighborhood": "Queens, Elmont",
            "comment": "The scene at Shea Stadium, which also featured Heywood Hale Broun, \nwas filmed right before a real game btw the New York Mets and the Pittsburgh Pirates on June 27, 1967. Roberto Clemente was asked to hit into the \ntriple play that Oscar misses, but he refused to do it and Bill Mazeroski took his place.",
            "place_name": "Belmont Park Racetrack, 2150 Hempstead Tpke, Elmont, New York 11003, United States",
            "Year": "1968",
            "Rated": "G",
            "Released": "16 May 1968",
            "Runtime": "105 min",
            "Genre": "Comedy",
            "Director": "Gene Saks",
            "Writer": "Neil Simon (from the play by), Neil Simon (screenplay)",
            "Actors": "Jack Lemmon, Walter Matthau, John Fiedler, Herb Edelman",
            "Plot": "Two friends try sharing an apartment, but their ideas of housekeeping and lifestyles are as different as night and day.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Nominated for 2 Oscars. Another 3 wins & 7 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDVhNzQxZDEtMzcyZC00ZDg1LWFkZDctOWYxZTY0ZmYzYjc2XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.7/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "97%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "86/100"
                }
            ],
            "Metascore": "86",
            "imdbRating": "7.7",
            "imdbVotes": "30,883",
            "imdbID": "tt0063374",
            "Type": "movie",
            "DVD": "12 Dec 2000",
            "BoxOffice": "N/A",
            "Production": "Paramount Home Video",
            "Website": "N/A"
        },
        {
            "title": "The Anomaly",
            "year": "2014",
            "summary": "The travails of a traumatized ex-soldier who wakes up in the back of a van, alongside akidnapped boy, to find that he only has only nine minutes and 37 seconds of consciousness to work out why and how he got there.",
            "moviePoster": "/theanomaly/theanomalyposter.jpg",
            "locationInfo": {
                "address": "72 Walker Street and Cortlandt Alley",
                "coords": [
                    -73.682189,
                    40.672836
                ]
            },
            "images": [
                "/theanomaly/theanomaly03.jpg",
                "/theanomaly/theanomaly02.jpg",
                "/theanomaly/theanomaly01.jpg",
                "/theanomaly/theanomaly13.jpg"
            ],
            "neighborhood": "Manhattan, Central Valley Stream",
            "comment": "",
            "place_name": "72 Walker Street, Malverne, New York 11565, United States",
            "Year": "2014",
            "Rated": "Not Rated",
            "Released": "04 Jul 2014",
            "Runtime": "97 min",
            "Genre": "Action, Mystery, Sci-Fi, Thriller",
            "Director": "Noel Clarke",
            "Writer": "Simon Lewis, Noel Clarke (additional material by)",
            "Actors": "Noel Clarke, Ian Somerhalder, Brian Cox, Alexis Knapp",
            "Plot": "An ex-soldier named Ryan Reeve is taken captive by the \"Anomaly\" organization where he learns that he only has 9:47 minutes/seconds to find out why they want him dead.",
            "Language": "English, Russian",
            "Country": "UK",
            "Awards": "1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYzQ0MTIyOTEtZGI1Mi00NzgwLWE2NzAtNTU2NmEwZTM3NTVmXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "4.7/10"
                },
                {
                    "Source": "Metacritic",
                    "Value": "27/100"
                }
            ],
            "Metascore": "27",
            "imdbRating": "4.7",
            "imdbVotes": "7,152",
            "imdbID": "tt2962726",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A"
        },
        {
            "title": "Desperately Seeking Susan",
            "year": "1985",
            "summary": "Roberta (Rosanna Arquette) is a housewife, bored with her life and feeling ignored by her hot tub-selling husband.The one thing that interests her is the excitement and romance she finds in following the relationship of Jim (Robert Joy) and Susan (Madonna),who communicate through their travels using the personal ads. Susan is having her own fun when she sees the ad to meetJim in NYC. Unfortunately, Susan is unaware that the last man she was with is entangled with the mob. So when Robertashows up to actually see her idol, she takes it upon herself to emulate her. After a bout of amnesia, she is mistakenfor Susan and must survive with Susan, Jim, her husband, and the mob - scrambling for the truth. Until Jim's best friend comes to the rescue.",
            "moviePoster": "/desperatelyseekingsusan/desperatelyseekingsusanposter.jpg",
            "locationInfo": {
                "address": "Times Square",
                "coords": [
                    -73.983761,
                    40.7624195
                ]
            },
            "images": [
                "/desperatelyseekingsusan/desperatelyseekingsusan141.jpg",
                "/desperatelyseekingsusan/desperatelyseekingsusan140.jpg",
                "/desperatelyseekingsusan/desperatelyseekingsusan205.jpg",
                "/desperatelyseekingsusan/desperatelyseekingsusan204.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "Times Square Church, 237 W 51st St, New York, New York 10019, United States",
            "Year": "1985",
            "Rated": "PG-13",
            "Released": "12 Apr 1985",
            "Runtime": "104 min",
            "Genre": "Comedy, Drama",
            "Director": "Susan Seidelman",
            "Writer": "Leora Barish",
            "Actors": "Rosanna Arquette, Madonna, Aidan Quinn, Mark Blum",
            "Plot": "A bored suburban housewife, seeking escape from her life, suffers amnesia after an accident, wakes up, and is mistaken for a free-spirited New York City drifter named Susan.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Nominated for 1 Golden Globe. Another 1 win & 3 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZGY2ZGU4OGMtODMxMC00M2M1LWE0ZGQtOGM1Yjk4MTJmNTZlXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.0/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "83%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "71/100"
                }
            ],
            "Metascore": "71",
            "imdbRating": "6.0",
            "imdbVotes": "20,525",
            "imdbID": "tt0089017",
            "Type": "movie",
            "DVD": "13 Jun 2000",
            "BoxOffice": "$27,400,000",
            "Production": "MGM Home Entertainment",
            "Website": "N/A"
        },
        {
            "title": "Marathon Man",
            "year": "1976",
            "summary": "Thomas Babington \"Babe\" Levy (Dustin Hoffman) is a history Ph.D. candidate and avid runner researching the same field as his father, who committed suicide after being investigated during the Joseph McCarthy era. Babe's brother, Henry (Roy Scheider), better known as \"Doc\", poses as an oil company executive but, unknown to Babe, is actually a U.S. government agent working for a secret agency headed by Director Peter Janeway (William Devane).",
            "moviePoster": "/marathonman/marathonmanposter.jpg",
            "locationInfo": {
                "address": "Central Park Zoo",
                "coords": [
                    -73.971747,
                    40.7677165
                ]
            },
            "images": [
                "/marathonman/marathonman21.jpg",
                "/marathonman/marathonman20.jpg",
                "/marathonman/marathonman19.jpg",
                "/marathonman/marathonman33.jpg",
                "/marathonman/marathonman37.jpg",
                "/marathonman/marathonman38.jpg"
            ],
            "neighborhood": "Manhattan, Central Park",
            "comment": "The fence which run around the reservior has since been replaced by an iron railing fence.",
            "place_name": "Central Park Zoo, Central Park, New York, New York 10024, United States",
            "Year": "1976",
            "Rated": "R",
            "Released": "08 Oct 1976",
            "Runtime": "125 min",
            "Genre": "Crime, Thriller",
            "Director": "John Schlesinger",
            "Writer": "William Goldman (screenplay), William Goldman (from: his novel)",
            "Actors": "Dustin Hoffman, Laurence Olivier, Roy Scheider, William Devane",
            "Plot": "A graduate history student is unwittingly caught in the middle of an international conspiracy involving stolen diamonds, an exiled Nazi war criminal, and a rogue government agent.",
            "Language": "English, French, German, Spanish, Yiddish",
            "Country": "USA",
            "Awards": "Nominated for 1 Oscar. Another 4 wins & 9 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZmEzYTg1YzktMWUwNy00ZmQ4LWJlYTItNjViOGMzNDJkODA4XkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.4/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "80%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "64/100"
                }
            ],
            "Metascore": "64",
            "imdbRating": "7.4",
            "imdbVotes": "56,739",
            "imdbID": "tt0074860",
            "Type": "movie",
            "DVD": "28 Aug 2001",
            "BoxOffice": "N/A",
            "Production": "Paramount Home Video",
            "Website": "N/A"
        },
        {
            "title": "Buying the Cow",
            "year": "2002",
            "summary": "David Collins (Jerry O'Connell) is a commmitment-shy Los Angeles yuppie whose girlfriend of many years,advertising executive Sarah (Bridgette Wilson-Sampras), gives him an ultimatum: commit or get out. David has two months to decide if he wants to stay with Sarah as she leaves townfor a job in New York. Following the advice from his more outgoing friends, David hits the dating scene as he tries to find his one and only soul mate, amysterious woman he sees again and again, but always gets away before he can talk to her.",
            "moviePoster": "/buyingthecow/buyingthecowposter.jpg",
            "locationInfo": {
                "address": "Main Street and Plymouth Street",
                "coords": [
                    -73.9906309,
                    40.7038903
                ]
            },
            "images": [
                "/buyingthecow/buyingthecow05.jpg",
                "/buyingthecow/buyingthecow04.jpg",
                "/buyingthecow/buyingthecow02.jpg",
                "/buyingthecow/buyingthecow01.jpg",
                "/buyingthecow/buyingthecow03.jpg"
            ],
            "neighborhood": "Brooklyn, DUMBO",
            "comment": "The exterior shot was filmed in Brooklyn on Main Street. The interior shots have yet to be identified.",
            "place_name": "Main Street and Plymouth Street, Brooklyn, New York 11201, United States",
            "Year": "2002",
            "Rated": "R",
            "Released": "08 Jun 2002",
            "Runtime": "88 min",
            "Genre": "Comedy, Romance",
            "Director": "Walt Becker",
            "Writer": "Walt Becker, Peter W. Nelson",
            "Actors": "Jerry O'Connell, Bridgette Wilson-Sampras, Ryan Reynolds, Bill Bellamy",
            "Plot": "A commitment-averse man frantically hits the dating scene after his girlfriend starts pressuring him to pop the question.",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTYyMWYzMWQtNTc5Yi00MDdlLTk0ZDAtYTM4ZTU5NDJhN2I3XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.8/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "5.8",
            "imdbVotes": "6,609",
            "imdbID": "tt0218864",
            "Type": "movie",
            "DVD": "17 Dec 2002",
            "BoxOffice": "N/A",
            "Production": "Destination Films",
            "Website": "N/A"
        },
        {
            "title": "Turk 182",
            "year": "1821985",
            "summary": "Jimmy Lynch (Timothy Hutton) is angry because his older brother, who was injured as a result of an off dutyfire rescue, is denied benefits by the city. At the same time, Mayor Tyler is embroiled in a political scandal that he denies all previous knowledge of.Jimmy begins painting \"Tyler Knew, Turk 182\" as an embarrassment to the mayor. The mayor is furious at this grafitti appearing all over the city and ordersthe police to find the artist. Jimmy's \"Turk 182\" spraypaints continue to appear.",
            "moviePoster": "/turk182/turk182poster.jpg",
            "locationInfo": {
                "address": "Mayor's Office, 51 Chambers Street and Centre Street",
                "coords": [
                    -73.98315,
                    40.763836
                ]
            },
            "images": [
                "/turk182/turk182_03.jpg",
                "/turk182/turk182_02.jpg",
                "/turk182/turk182_01.jpg",
                "/turk182/turk182_20.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "Mayor's Office of Film, 1697 Broadway, New York, New York 10019, United States",
            "Year": "1985",
            "Rated": "PG-13",
            "Released": "15 Feb 1985",
            "Runtime": "102 min",
            "Genre": "Comedy, Drama",
            "Director": "Bob Clark",
            "Writer": "James Gregory Kingston (story by), James Gregory Kingston (screenplay by), Denis Hamill (screenplay by), John Hamill (screenplay by)",
            "Actors": "Timothy Hutton, Robert Urich, Kim Cattrall, Robert Culp",
            "Plot": "Jimmy Lynch is angry because his older brother, who was injured as a result of an off duty fire rescue, is denied benefits by the city.",
            "Language": "English",
            "Country": "USA",
            "Awards": "2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmQwNWQ5MTEtNDM5Zi00M2NlLWIyODgtZGNhY2FhNjBhMzNjXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.9/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "20%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "23/100"
                }
            ],
            "Metascore": "23",
            "imdbRating": "5.9",
            "imdbVotes": "3,406",
            "imdbID": "tt0090217",
            "Type": "movie",
            "DVD": "13 Aug 2002",
            "BoxOffice": "N/A",
            "Production": "Anchor Bay Entertainment",
            "Website": "N/A"
        },
        {
            "title": "Forgetting the Girl",
            "year": "2012",
            "summary": "Haunted by a traumatic history, photographer Kevin Wolfe (Christopher Denham) struggles tosystematically forget all his bad memories, but erasing his past threatens to consume his future. Kevin is obsessed with finding a girl who can help him forgethis unpleasant past. However, all his encounters with the opposite sex inevitably go afoul, creating more awkward experiences than he can cope with. As therejections mount, Kevin's futile search for happiness and love becomes overwhelmingly turbulent, forcing him to take desperate measures. Shot in a varietyof NYC locales, from Hell's Kitchen to Greenpoint, Forgetting the Girl is a gritty vision of the city and its denizens. The tightly-woven drama blendsrecollections with reality to craft an intense character study of the psychologically-scarred protagonist. As beautiful as it is dark, the tense narrativeslowly boils under the surface until it unleashes an unsettling climax that will not be easily forgotten.",
            "moviePoster": "/forgettingthegirl/forgettingthegirlposter.jpg",
            "locationInfo": {
                "address": "10th Avenue and West 39th Street",
                "coords": [
                    -73.9968472,
                    40.7577413
                ]
            },
            "images": [
                "/forgettingthegirl/forgettingthegirl12.jpg",
                "/forgettingthegirl/forgettingthegirl11.jpg",
                "/forgettingthegirl/forgettingthegirl10.jpg",
                "/forgettingthegirl/forgettingthegirl15.jpg",
                "/forgettingthegirl/forgettingthegirl16.jpg"
            ],
            "neighborhood": "Manhattan, Clinton",
            "comment": "",
            "place_name": "10th Avenue and West 39th Street, New York, New York 10018, United States",
            "Year": "2012",
            "Rated": "Not Rated",
            "Released": "02 Mar 2012",
            "Runtime": "85 min",
            "Genre": "Drama, Thriller",
            "Director": "Nate Taylor",
            "Writer": "Peter Moore Smith (story and screenplay)",
            "Actors": "Christopher Denham, Lindsay Beamish, Elizabeth Rice, Paul Sparks",
            "Plot": "Haunted by a traumatic history, photographer Kevin Wolfe (Christopher Denham) struggles to systematically forget all his bad memories, but erasing his past threatens to consume his future. ...",
            "Language": "English",
            "Country": "USA",
            "Awards": "2 wins & 1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU5Nzc5MDU3Ml5BMl5BanBnXkFtZTgwNzkyMDkyMDE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.3/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "71%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "55/100"
                }
            ],
            "Metascore": "55",
            "imdbRating": "5.3",
            "imdbVotes": "977",
            "imdbID": "tt1492842",
            "Type": "movie",
            "DVD": "01 Apr 2014",
            "BoxOffice": "N/A",
            "Production": "Film Movement",
            "Website": "N/A"
        },
        {
            "title": "Malcolm X",
            "year": "1992",
            "summary": "Biography of Malcolm X, the famous African American leader. Born Malcolm Little, his father(a minister) was killed by the Ku Klux Klan. He became a gangster, and while in jail discovered the Nation of Islam writings of Elijah Muhammad. He preaches theteachings when let out of jail, but later on goes on a pilgrimage to the city of Mecca, there he converts to the original Islamic religion and becomes a SunniMuslim. He changes his name to El-Hajj Malik Al-Shabazz and stops his anti-white teachings, as he realises the error of his mistakes. He is later on assasinatedand dies a Muslim Martyr.",
            "moviePoster": "/malcolmx/malcolmxposter.jpg",
            "locationInfo": {
                "address": "West 125th Street and 8th Avenue",
                "coords": [
                    -73.9511777,
                    40.8101762
                ]
            },
            "images": [
                "/malcolmx/malcolmx08.jpg",
                "/malcolmx/malcolmx07.jpg",
                "/malcolmx/malcolmx04.jpg",
                "/malcolmx/malcolmx03.jpg",
                "/malcolmx/malcolmx10.jpg",
                "/malcolmx/malcolmx09.jpg"
            ],
            "neighborhood": "Manhattan, Harlem",
            "comment": "",
            "place_name": "West 125th Street and 8th Avenue, New York, New York 10039, United States",
            "Year": "1992",
            "Rated": "PG-13",
            "Released": "18 Nov 1992",
            "Runtime": "202 min",
            "Genre": "Biography, Drama, History",
            "Director": "Spike Lee",
            "Writer": "Alex Haley (book), Malcolm X (book), Arnold Perl (screenplay), Spike Lee (screenplay)",
            "Actors": "Denzel Washington, Angela Bassett, Albert Hall, Al Freeman Jr.",
            "Plot": "Biographical epic of the controversial and influential Black Nationalist leader, from his early life and career as a small-time gangster, to his ministry as a member of the Nation of Islam.",
            "Language": "English",
            "Country": "USA, Japan",
            "Awards": "Nominated for 2 Oscars. Another 19 wins & 22 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDkzOTFmMTUtMmI2OS00MDE4LTg5YTUtODMwNDMzNmI5OGYwL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.7/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "88%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "73/100"
                }
            ],
            "Metascore": "73",
            "imdbRating": "7.7",
            "imdbVotes": "83,236",
            "imdbID": "tt0104797",
            "Type": "movie",
            "DVD": "18 Jan 2000",
            "BoxOffice": "N/A",
            "Production": "Warner Bros.",
            "Website": "N/A"
        },
        {
            "title": "For Richer or Poorer",
            "year": "1997",
            "summary": "Brad (Tim Allen) and Caroline Sexton (Kirstie Alley) were incredibly rich and incredibly miserable. Until something unbelievable happened... their accountant robbed them dry. Now they're on the run from the IRS and hiding out in the one place no one will ever look for them... Amish country. While their lawyer sorts things out in New York, they've got to do their best to blend in and are failing miserably! Hard work may prove to be more difficult than hard time as the Sextons are learning how to milk cows, plow fields and fall in love all over again.",
            "moviePoster": "/forricherorpoorer/forricherorpoorerposter.jpg",
            "locationInfo": {
                "address": "Sexton's Office, 180 Maiden Lane and Front Street",
                "coords": [
                    -74.001789,
                    40.715083
                ]
            },
            "images": [
                "/forricherorpoorer/forricherorpoorer14.jpg",
                "/forricherorpoorer/forricherorpoorer13.jpg",
                "/forricherorpoorer/forricherorpoorer11.jpg",
                "/forricherorpoorer/forricherorpoorer37.jpg",
                "/forricherorpoorer/forricherorpoorer38.jpg",
                "/forricherorpoorer/forricherorpoorer44.jpg"
            ],
            "neighborhood": "Manhattan, Lower East Side",
            "comment": "",
            "place_name": "Office of the City Clerk - Marriage Bureau, 141 Worth St, New York, New York 10013, United States",
            "Year": "1997",
            "Rated": "PG-13",
            "Released": "12 Dec 1997",
            "Runtime": "115 min",
            "Genre": "Comedy",
            "Director": "Bryan Spicer",
            "Writer": "Jana Howington, Steve LuKanic",
            "Actors": "Tim Allen, Kirstie Alley, Jay O. Sanders, Michael Lerner",
            "Plot": "A real estate hustler and his wife hide from the IRS among the Amish.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMGU0ODhmODEtZTJlOC00YjA3LThhYWItZjQ0Mzk3NDNhNzIwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.8/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "14%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "5.8",
            "imdbVotes": "9,915",
            "imdbID": "tt0119142",
            "Type": "movie",
            "DVD": "05 May 1998",
            "BoxOffice": "N/A",
            "Production": "Universal Pictures",
            "Website": "N/A"
        },
        {
            "title": "Big Business",
            "year": "1988",
            "summary": "In the 1940s in the small town of Jupiter Hollow, two sets of identical twins are born in the samehospital on the same night. One set to a poor local family and the other to a rich family just passing through. The dizzy nurse on duty accidentally mixes thetwins unbeknown to the parents. Our story flashes forward to the 1980s where the mismatched sets of twins are about to cross paths following a big business dealto closedown the Jupiter Hollow factory.",
            "moviePoster": "/bigbusiness/bigbusinessposter.jpg",
            "locationInfo": {
                "address": "FAO Schwarz  767 5th Avenue and East 59th Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/bigbusiness/bigbusiness13.jpg",
                "/bigbusiness/bigbusiness11.jpg",
                "/bigbusiness/bigbusiness12.jpg",
                "/bigbusiness/bigbusiness17.jpg",
                "/bigbusiness/bigbusiness21.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": "",
            "Year": "1988",
            "Rated": "PG",
            "Released": "10 Jun 1988",
            "Runtime": "97 min",
            "Genre": "Comedy",
            "Director": "Jim Abrahams",
            "Writer": "Dori Pierson, Marc Reid Rubel",
            "Actors": "Bette Midler, Lily Tomlin, Fred Ward, Edward Herrmann",
            "Plot": "Two couples of sisters from New York and from the countryside discover that they are connected in an incredible way.",
            "Language": "English, Italian",
            "Country": "USA",
            "Awards": "1 win & 1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNGU2MmY2NWYtYTc1Yy00NzgzLTkwODMtYTQwYTA5MmJiZGM2XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.5/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "44%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "53/100"
                }
            ],
            "Metascore": "53",
            "imdbRating": "6.5",
            "imdbVotes": "11,895",
            "imdbID": "tt0094739",
            "Type": "movie",
            "DVD": "13 Aug 2002",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A"
        },
        {
            "title": "Something Borrowed",
            "year": "2011",
            "summary": "Rachel (Ginnifer Goodwin) is a lawyer. When she was in law school she fell for another student Dex (Colin Egglesfield) who comes from an affluent family. But she's too shy to say anything. When Dex meets her best friend Darcy (Kate Hudson) who treats her like dirt sometimes, who was visiting her, she makes a move on him and gets him. Eventually they get engaged and Darcy asks Rachel to be her Maid of Honor. But Rachel stills has feelings for Dex and still can't say anything. But when Darcy throws her a birthday party and Dex is there. When she and gets Dex are alone, she blurts out that she had a thing for him in college which surprised him. And after drinking a little they spend the night together. They try to forget the whole thing but can't but agree that it means nothing. But Ethan, Rachel close friend tells her that she'll spend her entire life regretting that if she does nothing.",
            "moviePoster": "/somethingborrowed/somethingborrowedposter.jpg",
            "locationInfo": {
                "address": "Crimson Club, 915 Broadway and East 21st Street",
                "coords": [
                    -73.66580675,
                    40.58465725000001
                ]
            },
            "images": [
                "/somethingborrowed/somethingborrowed06.jpg",
                "/somethingborrowed/somethingborrowed05.jpg",
                "/somethingborrowed/somethingborrowed03.jpg",
                "/somethingborrowed/somethingborrowed02.jpg",
                "/somethingborrowed/somethingborrowed01.jpg",
                "/somethingborrowed/somethingborrowed40.jpg"
            ],
            "neighborhood": "Manhattan, North Lynbrook",
            "comment": "",
            "place_name": "Long Beach, Long Beach, New York 11561, United States",
            "Year": "2011",
            "Rated": "PG-13",
            "Released": "06 May 2011",
            "Runtime": "112 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Luke Greenfield",
            "Writer": "Jennie Snyder Urman (screenplay), Emily Giffin (novel)",
            "Actors": "Ginnifer Goodwin, Kate Hudson, Colin Egglesfield, John Krasinski",
            "Plot": "Friendships are tested and secrets come to the surface when terminally single Rachel falls for Dex, her best friend Darcy's fiancé.",
            "Language": "English",
            "Country": "USA",
            "Awards": "5 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzczNzMzODk0Nl5BMl5BanBnXkFtZTcwMjgwMjI0NA@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.9/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "15%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "36/100"
                }
            ],
            "Metascore": "36",
            "imdbRating": "5.9",
            "imdbVotes": "56,853",
            "imdbID": "tt0491152",
            "Type": "movie",
            "DVD": "16 Aug 2011",
            "BoxOffice": "$39,000,000",
            "Production": "Warner Bros.",
            "Website": "N/A"
        },
        {
            "title": "Purple Violets",
            "year": "2007",
            "summary": "Patti Petalson (Selma Blair) is a promising writer, but her marriage and conventional job keep her from her dream. She longs to return to her writing, especially after running into her first love Brian Callahan (Patrick Wilson), a successful crime novelist. Kate (Debra Messing) is Patti's best friend since college. She's a tough-talking schoolteacher who plays therapist to all Patti's problems, while she's got a few of her own. Despite Brian's gorgeous Tribeca loft and perfect house in the Hamptons, he longs to write works of greater literary value. Michael Murphy (Edward Burns), his lawyer and best friend from college still carries a flame for his former girlfriend Kate, even though their relationship ended badly years ago. She holds a major grudge, but he would go to any length just to win Kate back, knowing his feelings for her never went away. He tried to forget over the years but since he spotted Kate in the restaurant she was all he could think about. When Patti sells Murphy a new apartment, and Brian publishes his personal novel, these old friends reconnect in unexpected ways with surprising results.",
            "moviePoster": "/purpleviolets/purplevioletsposter.jpg",
            "locationInfo": {
                "address": "Brian's Apartment, 142 Duane Street and West Broadway",
                "coords": [
                    -73.783095,
                    40.649816
                ]
            },
            "images": [
                "/purpleviolets/purpleviolets22.jpg",
                "/purpleviolets/purpleviolets21.jpg",
                "/purpleviolets/purpleviolets08.jpg",
                "/purpleviolets/purpleviolets07.jpg",
                "/purpleviolets/purpleviolets66.jpg",
                "/purpleviolets/purpleviolets82.jpg"
            ],
            "neighborhood": "Manhattan, John F. Kennedy International Airport",
            "comment": "",
            "place_name": "Apartment 7B Deli & Market, JFK Terminal 7, New York, New York 11430, United States",
            "Year": "2007",
            "Rated": "N/A",
            "Released": "20 Feb 2009",
            "Runtime": "103 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Edward Burns",
            "Writer": "Edward Burns",
            "Actors": "Annette Arnold, Max Baker, Selma Blair, James Biberi",
            "Plot": "Patti Petalson (Blair) struggles with the pressure of becoming the next important American writer.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwOTU3Nzk4MV5BMl5BanBnXkFtZTcwMzU2NzAzMg@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.4/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.4",
            "imdbVotes": "3,044",
            "imdbID": "tt0491109",
            "Type": "movie",
            "DVD": "26 Aug 2008",
            "BoxOffice": "N/A",
            "Production": "Lucky Day Pictures",
            "Website": "N/A"
        },
        {
            "title": "Nine 1/2 Weeks",
            "year": "121986",
            "summary": "In the often impersonal city of New York, a city that never sleeps, a city filled with the shadows and secretsof its citizens, a man and a woman conduct a highly sensual sexual affair. John (Mickey Rourke), a wealthy businessman,seduces a beautiful art assistant, Elizabeth (Kim Basinger), who is recently divorced after a three-year marriage.",
            "moviePoster": "/nineandahalfweeks/nineandahalfweeksposter.jpg",
            "locationInfo": {
                "address": "Mulberry Street",
                "coords": [
                    -73.996992,
                    40.720271
                ]
            },
            "images": [
                "/nineandahalfweeks/nineweeks35.jpg",
                "/nineandahalfweeks/nineweeks37.jpg",
                "/nineandahalfweeks/nineweeks33.jpg",
                "/nineandahalfweeks/nineweeks157.jpg",
                "/nineandahalfweeks/nineweeks158.jpg"
            ],
            "neighborhood": "Manhattan, Little Italy",
            "comment": "",
            "place_name": "Mulberry Street Bar, 176 1/2 Mulberry St, New York, New York 10013, United States"
        },
        {
            "title": "Die Hard: With a Vengeance",
            "year": "1995",
            "summary": "John McClane (Bruce Willis) is now almost a full-blown alcoholic and is suspended from the NYPD.But when a bomb goes off in the Bonwit Teller Department Store the police go insane trying to figure out what's going on. Soon, a man named Simon calls and asksfor McClane. Simon tells Inspector Walter Cobb that McClane is going to play a game called \"Simon Says\". He says that McClane is going to do the tasks heassigns him. If not, he'll blow off another bomb. With the help of a Harlem electrician, John McClane must race all over New York trying to figure out thefrustrating puzzles that the crafty terrorist gives him. But when a bomb goes off in a subway station right by the Federal Reserve (the biggest gold storage in the world) things start to get heated up.",
            "moviePoster": "/diehard3/diehard3poster.jpg",
            "locationInfo": {
                "address": "William Street",
                "coords": [
                    -74.007879,
                    40.707328
                ]
            },
            "images": [
                "/diehard3/diehardwithavengeance96.jpg",
                "/diehard3/diehardwithavengeance92.jpg",
                "/diehard3/diehardwithavengeance78.jpg",
                "/diehard3/diehardwithavengeance77.jpg",
                "/diehard3/diehardwithavengeance70.jpg",
                "/diehard3/diehardwithavengeance183.jpg",
                "/diehard3/diehardwithavengeance189.jpg"
            ],
            "neighborhood": "Manhattan, Financial District",
            "comment": "The park on top of the Wall Street station in the film was a vacant lot that was made into a park for the film. It was turned back into a vacant lot after filming was completed.",
            "place_name": "William Street Residence, 84 William St, New York, New York 10038, United States"
        },
        {
            "title": "Regarding Henry",
            "year": "1991",
            "summary": "Henry Turner (Harrison Ford) is a despicable and ruthless trial lawyer whose life is turned upside down when he is shot in the head during a robbery. He survives the injury with significant brain damage and must learn again how to speak, walk, and function normally. He has also lost most of the memory of his personal life, and must adjust to life with the family that he does not remember. To the surprise of his wife and daughter, Henry becomes a loving and affectionate man.",
            "moviePoster": "/regardinghenry/regardinghenryposter.jpg",
            "locationInfo": {
                "address": "Capri Cinema, 738 8th Avenue",
                "coords": [
                    -73.977113,
                    40.7429855
                ]
            },
            "images": [
                "/regardinghenry/regardinghenry17.jpg",
                "/regardinghenry/regardinghenry16.jpg",
                "/regardinghenry/regardinghenry15.jpg",
                "/regardinghenry/regardinghenry34.jpg",
                "/regardinghenry/regardinghenry33.jpg"
            ],
            "neighborhood": "Manhattan, Gramercy",
            "comment": "",
            "place_name": "AMC Kips Bay 15, 570 2nd Ave, New York, New York 10016, United States",
            "Year": "1991",
            "Rated": "PG-13",
            "Released": "10 Jul 1991",
            "Runtime": "108 min",
            "Genre": "Drama, Romance",
            "Director": "Mike Nichols",
            "Writer": "J.J. Abrams",
            "Actors": "Harrison Ford, Annette Bening, Michael Haley, Stanley Swerdlow",
            "Plot": "After being shot, a lawyer loses his memory and must relearn speech and mobility, but he has a loving family to support him.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win & 2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDU0YzM4MzAtZTNmNi00Yzc4LTliNTgtYzFmZmEzNmM4MmRmXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.7/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "41%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "47/100"
                }
            ],
            "Metascore": "47",
            "imdbRating": "6.7",
            "imdbVotes": "28,716",
            "imdbID": "tt0102768",
            "Type": "movie",
            "DVD": "09 Sep 2003",
            "BoxOffice": "N/A",
            "Production": "Paramount Home Video",
            "Website": "N/A"
        },
        {
            "title": "Morning Glory",
            "year": "2010",
            "summary": "Becky (Rachel McAdams) is a hard-working morning TV show producer, or at least she was untilshe got fired. Desperate to get a job, she finally gets an interview with Jerry (Jeff Goldblum) - who is desperate to hire a producer for the strugglingshow \"Daybreak\". Becky accepts the job and it proves to be more difficult than even she might be able to handle. She has to fire the sexist co-host, thentry to convince egotistical news reporter, Mike Pomeroy (Harrison Ford), to take the job, and then try and get him to actually do the job, properly. And she hasto do this while falling for handsome Adam (Patrick Wilson), and trying tosave the show from plummeting ratings. Will Becky be able to hold on to her dream job and her sanity?",
            "moviePoster": "/morningglory/morninggloryposter.jpg",
            "locationInfo": {
                "address": "5th Avenue and East 59th Street",
                "coords": [
                    -73.9730126,
                    40.7642791
                ]
            },
            "images": [
                "/morningglory/morningglory15.jpg",
                "/morningglory/morningglory14.jpg",
                "/morningglory/morningglory12.jpg",
                "/morningglory/morningglory13.jpg",
                "/morningglory/morningglory79.jpg",
                "/morningglory/morningglory66.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "5th Avenue and East 59th Street, New York, New York 10022, United States",
            "Year": "2010",
            "Rated": "PG-13",
            "Released": "10 Nov 2010",
            "Runtime": "107 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Roger Michell",
            "Writer": "Aline Brosh McKenna",
            "Actors": "Rachel McAdams, Noah Bean, Jack Davidson, Vanessa Aspillaga",
            "Plot": "An upstart television producer accepts the challenge of reviving a struggling morning show program with warring co-hosts.",
            "Language": "English, Ukrainian",
            "Country": "USA",
            "Awards": "1 win & 3 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDM1NTQ4N15BMl5BanBnXkFtZTcwOTQ0Njg5Mw@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.5/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "55%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "57/100"
                }
            ],
            "Metascore": "57",
            "imdbRating": "6.5",
            "imdbVotes": "71,637",
            "imdbID": "tt1126618",
            "Type": "movie",
            "DVD": "08 Mar 2011",
            "BoxOffice": "$30,982,329",
            "Production": "Paramount Studios",
            "Website": "N/A"
        },
        {
            "title": "Bright Lights, Big City",
            "year": "1988",
            "summary": "Jamie Conway (Michael J. Fox) works as a fact-checker for a major New York magazine, but becausehe spends his nights partying with his glib best friend (Kiefer Sutherland), he's on the verge of getting fired. His wife, a fast-rising model (Phoebe Cates),just left him; he's still reeling from the death of his mother (Dianne Wiest) a year earlier; and he's obsessed with a tabloid story about a pregnant woman in acoma. Bright Lights, Big City doesn't have much of a plot, but in its meandering way it captures some of the glossy chaos of the time and of a man desperatelytrying to escape the pain in his life.",
            "moviePoster": "/brightlightsbigcity/brightlightsbigcityposter.jpg",
            "locationInfo": {
                "address": "Laight Street and Greenwich Street",
                "coords": [
                    -74.0097659,
                    40.7221396
                ]
            },
            "images": [
                "/brightlightsbigcity/brightlightsbigcity04.jpg",
                "/brightlightsbigcity/brightlightsbigcity03.jpg",
                "/brightlightsbigcity/brightlightsbigcity02.jpg",
                "/brightlightsbigcity/brightlightsbigcity01.jpg",
                "/brightlightsbigcity/brightlightsbigcity31.jpg",
                "/brightlightsbigcity/brightlightsbigcity29.jpg",
                "/brightlightsbigcity/brightlightsbigcity30.jpg",
                "/brightlightsbigcity/brightlightsbigcity32.jpg",
                "/brightlightsbigcity/brightlightsbigcity05.jpg"
            ],
            "neighborhood": "Manhattan, Tribeca",
            "comment": "",
            "place_name": "Laight Street and Greenwich Street, New York, New York 10013, United States",
            "Year": "1988",
            "Rated": "R",
            "Released": "01 Apr 1988",
            "Runtime": "107 min",
            "Genre": "Drama",
            "Director": "James Bridges",
            "Writer": "Jay McInerney (novel), Jay McInerney (screenplay)",
            "Actors": "Michael J. Fox, Kiefer Sutherland, Phoebe Cates, Swoosie Kurtz",
            "Plot": "A disillusioned young writer living in New York City turns to drugs and drinking to block out the memories of his dead mother and estranged wife.",
            "Language": "English, French",
            "Country": "USA",
            "Awards": "2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0NzI3MDExNl5BMl5BanBnXkFtZTcwNzU3NDcyNA@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.7/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "60%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "51/100"
                }
            ],
            "Metascore": "51",
            "imdbRating": "5.7",
            "imdbVotes": "7,241",
            "imdbID": "tt0094799",
            "Type": "movie",
            "DVD": "05 Aug 2003",
            "BoxOffice": "N/A",
            "Production": "MGM Home Entertainment",
            "Website": "N/A"
        },
        {
            "title": "Shame",
            "year": "2011",
            "summary": "Thirty-something Brandon Sullivan (Michael Fassbender) is a New York yuppie. He is also a sexaddict who thinks about sex all the time when he's not having sex. He surfs for porn on his work computer, masturbates often even in his office's men's room, and eyes strange women in whateversituation he's in in the hopes of having quick anonymous sex with them. He hides his sex addiction from those few people in his life who he lets in in an emotionalsense, unlike his married boss, David Fisher, who is open about his marital infidelities to his male work colleagues. And the act of sex holds no emotional connotationwhatsoever for Brandon. The arrival back into his life and his apartment of his sister Sissy Sullivan (Carey Mulligan), from who he was estranged due to the emotional baggageassociated, changes Brandon's life, especially in what he can do in what used to be the privacy and sanctity of his apartment.",
            "moviePoster": "/shame/shameposter.jpg",
            "locationInfo": {
                "address": "Broadway and West 31st Street",
                "coords": [
                    -73.9883321,
                    40.7475512
                ]
            },
            "images": [
                "/shame/shame14.jpg",
                "/shame/shame13.jpg",
                "/shame/shame12.jpg",
                "/shame/shame45.jpg",
                "/shame/shame46.jpg"
            ],
            "neighborhood": "Manhattan, Garment District",
            "comment": "",
            "place_name": "Broadway and West 31st Street, New York, New York 10001, United States",
            "Year": "2011",
            "Rated": "NC-17",
            "Released": "13 Jan 2012",
            "Runtime": "101 min",
            "Genre": "Drama",
            "Director": "Steve McQueen",
            "Writer": "Steve McQueen, Abi Morgan, Harold Manning (french adaptation)",
            "Actors": "Michael Fassbender, Lucy Walters, Mari-Ange Ramirez, James Badge Dale",
            "Plot": "A sex addict's carefully cultivated private life falls apart after his sister arrives for an indefinite stay.",
            "Language": "English",
            "Country": "UK, Canada, USA",
            "Awards": "Nominated for 1 Golden Globe. Another 51 wins & 91 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOGU4Mjc0ZWMtNGQ0OS00ZWQ4LThkNDUtOTE1Y2EzYjgzMDU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.2/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "79%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "72/100"
                }
            ],
            "Metascore": "72",
            "imdbRating": "7.2",
            "imdbVotes": "180,017",
            "imdbID": "tt1723811",
            "Type": "movie",
            "DVD": "17 Apr 2012",
            "BoxOffice": "$2,971,782",
            "Production": "Fox Searchlight",
            "Website": "N/A"
        },
        {
            "title": "The Dark Tower",
            "year": "2017",
            "summary": "Roland Deschain (Idris Elba), the last Gunslinger, is locked in an eternal battle with Walter O'Dim (Matthew McConaughey), also known as the Man in Black. The Gunslinger must prevent the Man in Black from toppling the Dark Tower, the key that holds the universe together. With the fate of worlds at stake, two men collide in the ultimate battle between good and evil.",
            "moviePoster": "/thedarktower/thedarktowerposter2.jpg",
            "locationInfo": {
                "address": "Dixie Pig, 135 Plymouth Street and Anchorage Place",
                "coords": [
                    -73.984891,
                    40.719275
                ]
            },
            "images": [
                "/thedarktower/thedarktower52.jpg",
                "/thedarktower/thedarktower46.jpg",
                "/thedarktower/thedarktower45.jpg",
                "/thedarktower/thedarktower85.jpg",
                "/thedarktower/thedarktower89.jpg"
            ],
            "neighborhood": "Brooklyn, Lower East Side",
            "comment": "",
            "place_name": "Pig and Khao, 66 Clinton St, New York, New York 10002, United States",
            "Year": "2017",
            "Rated": "PG-13",
            "Released": "04 Aug 2017",
            "Runtime": "95 min",
            "Genre": "Action, Adventure, Fantasy, Horror, Sci-Fi, Western",
            "Director": "Nikolaj Arcel",
            "Writer": "Akiva Goldsman (screenplay by), Jeff Pinkner (screenplay by), Anders Thomas Jensen (screenplay by), Nikolaj Arcel (screenplay by), Stephen King (based on \"The Dark Tower\" novels by)",
            "Actors": "Matthew McConaughey, Idris Elba, Tom Taylor, Dennis Haysbert",
            "Plot": "A boy haunted by visions of a dark tower from a parallel reality teams up with the tower's disillusioned guardian to stop an evil warlock known as the Man in Black who plans to use the boy to destroy the tower and open the gates of Hell.",
            "Language": "English",
            "Country": "USA",
            "Awards": "4 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU3MjUwMzQ3MF5BMl5BanBnXkFtZTgwMjcwNjkxMjI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.6/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "16%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "34/100"
                }
            ],
            "Metascore": "34",
            "imdbRating": "5.6",
            "imdbVotes": "123,195",
            "imdbID": "tt1648190",
            "Type": "movie",
            "DVD": "31 Oct 2017",
            "BoxOffice": "$50,644,837",
            "Production": "Sony Pictures",
            "Website": "N/A"
        },
        {
            "title": "One Fine Day",
            "year": "1996",
            "summary": "Melanie Parker (Michelle Pfeiffer), an architect and mother of Sammy, and Jack Taylor (George Clooney), anewspaper columnist and father of Maggie, are both divorced. They meet one morning when overwhelmed Jack is left unexpectedly with Maggie and forgets that Melanie wasto take her to school. As a result, both children miss their school field trip and are stuck with the parents. The two adults project their negative stereotypes ofex-spouses on each other, but end up needing to rely on each other to watch the children as each must save his job. Humor is added by Sammy's propensity for lodgingobjects in his nose and Maggie's tendency to wander.",
            "moviePoster": "/onefineday/onefinedayposter.jpg",
            "locationInfo": {
                "address": "6th Avenue and Bleecker Street",
                "coords": [
                    -74.0021622,
                    40.7297532
                ]
            },
            "images": [
                "/onefineday/onefineday162.jpg",
                "/onefineday/onefineday161.jpg",
                "/onefineday/onefineday160.jpg",
                "/onefineday/onefineday227.jpg",
                "/onefineday/onefineday226.jpg"
            ],
            "neighborhood": "Manhattan, Greenwich Village",
            "comment": "",
            "place_name": "6th Avenue and Bleecker Street, New York, New York 10014, United States",
            "Year": "1996",
            "Rated": "PG",
            "Released": "20 Dec 1996",
            "Runtime": "108 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Michael Hoffman",
            "Writer": "Terrel Seltzer, Ellen Simon",
            "Actors": "Michelle Pfeiffer, George Clooney, Mae Whitman, Alex D. Linz",
            "Plot": "The lives of two strangers and their young children unexpectedly intersect on one hectic, stressful day in New York City.",
            "Language": "English, Spanish",
            "Country": "USA",
            "Awards": "Nominated for 1 Oscar. Another 4 wins & 5 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDdhMjgxODQtZjNhNS00YjZiLWFmYTAtODZmM2RhM2M3YmIwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.5/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "50%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.5",
            "imdbVotes": "42,560",
            "imdbID": "tt0117247",
            "Type": "movie",
            "DVD": "08 Jan 2002",
            "BoxOffice": "N/A",
            "Production": "Twentieth Century Fox Home Entertainment",
            "Website": "N/A"
        },
        {
            "title": "The Smurfs",
            "year": "2011",
            "summary": "When the evil wizard Gargamel (Hank Azaria) chases the tiny blue Smurfs Papa Smurf (Jonathan Winters),Smurfette (Katy Perry), Clumsy (Anton Yelchin), Grouchy (George Lopez), Brainy (Fred Armisen) and Gutsy (Alan Cumming) out of their village, they tumble from their magicalworld and into the real world of Central Park and New York City. The Smurfs befriend Patrick (Neil Patrick Harris) and Grace Winslow (Jayma Mays), a married and expectant couple and up staying in theirapartment until they find a way to get back to their village before Gargamel tracks them down.",
            "moviePoster": "/thesmurfs/thesmurfsposter.jpg",
            "locationInfo": {
                "address": "Times Square",
                "coords": [
                    -73.983761,
                    40.7624195
                ]
            },
            "images": [
                "/thesmurfs/thesmurfs40.jpg",
                "/thesmurfs/thesmurfs39.jpg",
                "/thesmurfs/thesmurfs59.jpg",
                "/thesmurfs/thesmurfs58.jpg",
                "/thesmurfs/thesmurfs57.jpg",
                "/thesmurfs/thesmurfs56.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "Times Square Church, 237 W 51st St, New York, New York 10019, United States",
            "Year": "2011",
            "Rated": "PG",
            "Released": "29 Jul 2011",
            "Runtime": "103 min",
            "Genre": "Animation, Adventure, Comedy, Family, Fantasy",
            "Director": "Raja Gosnell",
            "Writer": "J. David Stem (screenplay by), David N. Weiss (screenplay by), Jay Scherick (screenplay by), David Ronn (screenplay by), J. David Stem (story by), David N. Weiss (story by), Peyo (based on characters created by)",
            "Actors": "Hank Azaria, Neil Patrick Harris, Jayma Mays, Sofía Vergara",
            "Plot": "When the evil wizard Gargamel chases the tiny blue Smurfs out of their village, they tumble from their magical world into New York City.",
            "Language": "English",
            "Country": "USA, Belgium, Canada",
            "Awards": "2 wins & 8 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyMmFiYTctZDcyYS00OGY4LTk1ZmYtZjBmODBlZTc1NjU4XkEyXkFqcGdeQXVyNTk1MTAyODc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.4/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "21%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "30/100"
                }
            ],
            "Metascore": "30",
            "imdbRating": "5.4",
            "imdbVotes": "81,840",
            "imdbID": "tt0472181",
            "Type": "movie",
            "DVD": "02 Dec 2011",
            "BoxOffice": "$142,614,158",
            "Production": "Sony Pictures Columbia",
            "Website": "N/A"
        },
        {
            "title": "People I Know",
            "year": "2002",
            "summary": "Eli Wurman (Al Pacino) is a publicist on the out, but all he knows is how to hustle and cajole,threaten and persuade. The hazy mania of his everyday life is fuelled by a steady stream of prescription drugs and alcohol. One night, Eli's last remaining \"big client\"Cary Launer (Ryan O'Neal) entreats him to take care of his latest publicity mess—a dangerous liaison with a hard-shelled, quick-tongued television actress with a soft centre and a taste for illegal drugs (Téa Leoni). The television actress takes him to a drug- and-sexden, a playground for the rich and famous, where she claims to be looking for a toy.",
            "moviePoster": "/peopleiknow/peopleiknowposter.jpg",
            "locationInfo": {
                "address": "Eli Wurman's Apartment, 11 5th Avenue and West 8th Street",
                "coords": [
                    -73.783095,
                    40.649816
                ]
            },
            "images": [
                "/peopleiknow/peopleiknow02.jpg",
                "/peopleiknow/peopleiknow01.jpg",
                "/peopleiknow/peopleiknow14.jpg"
            ],
            "neighborhood": "Manhattan, John F. Kennedy International Airport",
            "comment": "",
            "place_name": "Apartment 7B Deli & Market, JFK Terminal 7, New York, New York 11430, United States",
            "Year": "2002",
            "Rated": "R",
            "Released": "21 Nov 2002",
            "Runtime": "100 min",
            "Genre": "Crime, Drama",
            "Director": "Daniel Algrant",
            "Writer": "Jon Robin Baitz",
            "Actors": "Al Pacino, Kim Basinger, Ryan O'Neal, Téa Leoni",
            "Plot": "A New York press agent must scramble when his major client becomes embroiled in a huge scandal.",
            "Language": "English",
            "Country": "USA, Germany",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjMzNjg4N2EtYmUwNi00NzMxLTkzZTQtNGZmMWYzMGY2NzE4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.5/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "44%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "53/100"
                }
            ],
            "Metascore": "53",
            "imdbRating": "5.5",
            "imdbVotes": "10,848",
            "imdbID": "tt0274711",
            "Type": "movie",
            "DVD": "20 Jul 2004",
            "BoxOffice": "N/A",
            "Production": "Miramax Films",
            "Website": "N/A"
        },
        {
            "title": "Broken English",
            "year": "2007",
            "summary": "Nora Wilder (Parker Posey) is freaking out. Everyone around her is in a relationship, is married, or has children. Nora is in her thirties, alone with job she's outgrown and a mother who constantly reminds her of it all. Not to mention her best friend Audrey's \"perfect marriage\". But after a series of disastrous dates, Nora unexpectedly meets Julien, a quirky Frenchman who opens her eyes to a lot more than love.",
            "moviePoster": "/brokenenglish/brokenenglishposter.jpg",
            "locationInfo": {
                "address": "15 West 56th Street",
                "coords": [
                    -73.975429,
                    40.762808
                ]
            },
            "images": [
                "/brokenenglish/brokenenglish03.jpg",
                "/brokenenglish/brokenenglish02.jpg",
                "/brokenenglish/brokenenglish01.jpg",
                "/brokenenglish/brokenenglish10.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "15 West 56th Street, New York, New York 10019, United States",
            "Year": "2007",
            "Rated": "PG-13",
            "Released": "16 Jul 2008",
            "Runtime": "93 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Zoe R. Cassavetes",
            "Writer": "Zoe R. Cassavetes",
            "Actors": "Parker Posey, Drea de Matteo, Tim Guinee, Gena Rowlands",
            "Plot": "Nora Wilder is freaking out. Everyone around her is in a relationship, is married, or has children. Nora is in her thirties, alone with job she's outgrown and a mother who constantly ...",
            "Language": "English, French",
            "Country": "France, Japan, USA",
            "Awards": "1 win & 6 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTA2NzMwNjIwMDJeQTJeQWpwZ15BbWU3MDMyNDgzNTE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.3/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "64%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "61/100"
                }
            ],
            "Metascore": "61",
            "imdbRating": "6.3",
            "imdbVotes": "6,029",
            "imdbID": "tt0772157",
            "Type": "movie",
            "DVD": "21 Aug 2007",
            "BoxOffice": "$818,674",
            "Production": "Magnolia Pictures",
            "Website": "N/A"
        },
        {
            "title": "Trading Places",
            "year": "1983",
            "summary": "Louis Winthorpe III (Dan Aykroyd) is a successful Philadelphia commodity broker with mansion, manservant andgirlfriend to match. Billy Ray Valentine (Eddie Murphy) is a hustling beggar. Winthorpe's employers, the elderly Duke brothers, make a bet that by switching the lifestyle of the twoBilly Ray will make good and their man will take to a life of crime. Suddenly Louis finds himself uncomprehendingly with no job, no home and only a new acquaintance,glamorous hooker Ophelia, prepared to help him. So at least in one way things could actually be worse.",
            "moviePoster": "/tradingplaces/tradingplacesposter.jpg",
            "locationInfo": {
                "address": "Greenwich Street",
                "coords": [
                    -74.010019,
                    40.720777
                ]
            },
            "images": [
                "/tradingplaces/tradingplaces105.jpg",
                "/tradingplaces/tradingplaces103.jpg",
                "/tradingplaces/tradingplaces102.jpg",
                "/tradingplaces/tradingplaces101.jpg",
                "/tradingplaces/tradingplaces117.jpg"
            ],
            "neighborhood": "Manhattan, Tribeca",
            "comment": "",
            "place_name": "Greenwich Street Tavern, 399 Greenwich St, New York, New York 10013, United States",
            "Year": "1983",
            "Rated": "R",
            "Released": "08 Jun 1983",
            "Runtime": "116 min",
            "Genre": "Comedy",
            "Director": "John Landis",
            "Writer": "Timothy Harris, Herschel Weingrod",
            "Actors": "Denholm Elliott, Dan Aykroyd, Maurice Woods, Richard D. Fisher Jr.",
            "Plot": "A snobbish investor and a wily street con artist find their positions reversed as part of a bet by two callous millionaires.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Nominated for 1 Oscar. Another 3 wins & 4 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTEzMjBiMzktMjQyMS00YzBhLTgzNWQtNzA0NmEwMTNmMDQ2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.5/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "87%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "69/100"
                }
            ],
            "Metascore": "69",
            "imdbRating": "7.5",
            "imdbVotes": "131,595",
            "imdbID": "tt0086465",
            "Type": "movie",
            "DVD": "24 Sep 2002",
            "BoxOffice": "N/A",
            "Production": "Paramount Pictures",
            "Website": "N/A"
        },
        {
            "title": "Collateral Beauty",
            "year": "2016",
            "summary": "When Howard (Will Smith) a successful New York advertising executive suffers a great tragedy, he retreatsfrom life. While his concerned friends Whit (Edward Norton), Claire (Kate Winslet) and Simon (Michael Pena) try desperately to reconnect with him, he seeks answers fromthe universe by writing letters to Love, Time and Death. When his notes bring unexpected personal responses, he begins to understand how these constants interlock in alife fully lived and how even the deepest loss can reveal moments of meaning and beauty.",
            "moviePoster": "/collateralbeauty/collateralbeautyposter.jpg",
            "locationInfo": {
                "address": "West 58th Street and 5th Avenue",
                "coords": [
                    -73.974111,
                    40.7639334
                ]
            },
            "images": [
                "/collateralbeauty/collateralbeauty06.jpg",
                "/collateralbeauty/collateralbeauty05.jpg",
                "/collateralbeauty/collateralbeauty04.jpg",
                "/collateralbeauty/collateralbeauty200.jpg",
                "/collateralbeauty/collateralbeauty201.jpg"
            ],
            "neighborhood": "Manhattan., Midtown",
            "comment": "",
            "place_name": "West 58th Street and 5th Avenue, New York, New York 10019, United States",
            "Year": "2016",
            "Rated": "PG-13",
            "Released": "16 Dec 2016",
            "Runtime": "97 min",
            "Genre": "Drama, Romance",
            "Director": "David Frankel",
            "Writer": "Allan Loeb",
            "Actors": "Will Smith, Edward Norton, Kate Winslet, Michael Peña",
            "Plot": "Retreating from life after a tragedy, a man questions the universe by writing to Love, Time, and Death. Receiving unexpected answers, he begins to see how these things interlock and how even loss can reveal moments of meaning and beauty.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win & 6 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ5ODE4MTY2NV5BMl5BanBnXkFtZTgwMzM2NzEzMDI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.8/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "14%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "23/100"
                }
            ],
            "Metascore": "23",
            "imdbRating": "6.8",
            "imdbVotes": "88,744",
            "imdbID": "tt4682786",
            "Type": "movie",
            "DVD": "14 Mar 2017",
            "BoxOffice": "$30,982,955",
            "Production": "New Line Cinema",
            "Website": "N/A"
        },
        {
            "title": "Thanks for Sharing",
            "year": "2012",
            "summary": "Adam (Mark Ruffalo) has just reached the 5-year mark in his sex addiction sobriety with help from his sponsor Mike (Tim Robbins). New-comer Neil (Josh Gad) seeks out Adam's help hoping that he'll be his mentor, but Neil doesn't have the same maturity and continues to harass women at work, on the street, and on the subway. Adam has also just met Phoebe (Gwyneth Paltrow), who might be perfect for him, but Adam hasn't been in a relationship since he recognized his addiction to sex, and Phoebe doesn't date addicts. As Adam navigates the romantic relationship waters, Mike struggles connecting to his former drug-addicted son who has just returned home, and Neil develops a relationship with another woman in his sex addicts group, but a platonic friendship might be exactly what he needs.",
            "moviePoster": "/thanksforsharing/thanksforsharingposter.jpg",
            "locationInfo": {
                "address": "Lido Bar, 2168 Frederick Douglass Blvd & West 117th Street",
                "coords": [
                    -73.644,
                    40.6045
                ]
            },
            "images": [
                "/thanksforsharing/thanksforsharing35.jpg",
                "/thanksforsharing/thanksforsharing34.jpg",
                "/thanksforsharing/thanksforsharing33.jpg",
                "/thanksforsharing/thanksforsharing55.jpg",
                "/thanksforsharing/thanksforsharing57.jpg"
            ],
            "neighborhood": "Harlem, New York",
            "comment": "",
            "place_name": "Barnum Island, New York, United States",
            "Year": "2012",
            "Rated": "R",
            "Released": "14 Sep 2013",
            "Runtime": "112 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Stuart Blumberg",
            "Writer": "Stuart Blumberg, Matt Winston",
            "Actors": "Mark Ruffalo, Tim Robbins, Gwyneth Paltrow, Josh Gad",
            "Plot": "A romantic comedy that brings together three disparate characters who are learning to face a challenging and often confusing world as they struggle together against a common demon: sex addiction.",
            "Language": "English",
            "Country": "USA",
            "Awards": "2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5MzI3ODcxMF5BMl5BanBnXkFtZTcwODY5MTc4OQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.4/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "51%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "54/100"
                }
            ],
            "Metascore": "54",
            "imdbRating": "6.4",
            "imdbVotes": "26,183",
            "imdbID": "tt1932718",
            "Type": "movie",
            "DVD": "07 Jan 2014",
            "BoxOffice": "$752,929",
            "Production": "Roadside Attractions",
            "Website": "N/A"
        },
        {
            "title": "One Night Stand",
            "year": "1997",
            "summary": "Los Angeles commercials director Max Carlyle (Wesley Snipes) visits his friend, artist Charlie (Robert Downey Jr.), who wasdiagnosed with AIDS in New York. There he meets Karen (Nastassja Kinski), they are attracted to each other and after they meet later that day at the concert,they have a passionate night. Then he returns home to L.A. to his family and wife Mimi (Ming-Na). A year later Max returns to New York again to visitCharlie who is now dying, and there he meets Karen again, who is married to Charlie's brother Vernon (Kyle MacLachlan).",
            "moviePoster": "/onenightstand/onenightstandposter.jpg",
            "locationInfo": {
                "address": "20 Exchange Place and William Street",
                "coords": [
                    -74.033379,
                    40.716323
                ]
            },
            "images": [
                "/onenightstand/onenightstand71.jpg",
                "/onenightstand/onenightstand70.jpg",
                "/onenightstand/onenightstand23.jpg",
                "/onenightstand/onenightstand20.jpg",
                "/onenightstand/onenightstand15.jpg",
                "/onenightstand/onenightstand24.jpg"
            ],
            "neighborhood": "Manhattan, The Waterfront",
            "comment": "",
            "place_name": "20 Exchange Place, Jersey City, New Jersey 07302, United States",
            "Year": "1997",
            "Rated": "R",
            "Released": "17 Sep 1997",
            "Runtime": "102 min",
            "Genre": "Drama, Romance",
            "Director": "Mike Figgis",
            "Writer": "Mike Figgis",
            "Actors": "Wesley Snipes, Nastassja Kinski, Kyle MacLachlan, Ming-Na Wen",
            "Plot": "Max/W.Snipes has a one night stand with Karen/N.Kinski in NYC. He returns to his wife, 2 kids and career in LA but is affected. A year later, Max and Karen meet again by chance, but this time they're with their spouses.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win & 3 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTUxZGM0ODMtMDk1OS00ZTlhLWEwZGYtMjM5MTg3NTE4MjE0XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.8/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "32%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "5.8",
            "imdbVotes": "6,366",
            "imdbID": "tt0119832",
            "Type": "movie",
            "DVD": "31 Mar 1998",
            "BoxOffice": "N/A",
            "Production": "New Line Home Entertainment",
            "Website": "N/A"
        },
        {
            "title": "Bride Wars",
            "year": "2009",
            "summary": "In Manhattan, the lawyer Liv Lerner (Kate Hudson) and the school teacher Emma Allan (Anne Hathaway)have been best friends since their childhood. They both are proposed to by their boyfriends on the same day and they plan their wedding parties in Plaza Hotel,using the services of the famous Marion St. Claire. However, due to Marion's secretary's mistake, their weddings are scheduled for the same day. None of them agreesto change the date and they become enemies, trying to sabotage the wedding party of the rival.",
            "moviePoster": "/bridewars/bridewarsposter.jpg",
            "locationInfo": {
                "address": "Pulitzer Fountain, W 58th Street and Grand Army Plaza",
                "coords": [
                    -73.97355975,
                    40.76402325
                ]
            },
            "images": [
                "/bridewars/bridewars12.jpg",
                "/bridewars/bridewars05.jpg",
                "/bridewars/bridewars06.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "Pulitzer Fountain, 58th Street & 5th Avenue, New York, New York 10019, United States",
            "Year": "2009",
            "Rated": "PG",
            "Released": "09 Jan 2009",
            "Runtime": "89 min",
            "Genre": "Comedy, Romance",
            "Director": "Gary Winick",
            "Writer": "Greg DePaul (screenplay), Casey Wilson (screenplay), June Diane Raphael (screenplay), Greg DePaul (story)",
            "Actors": "Kate Hudson, Anne Hathaway, Bryan Greenberg, Chris Pratt",
            "Plot": "Two best friends become rivals when they schedule their respective weddings on the same day.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win & 8 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTUyNTg2OTUwN15BMl5BanBnXkFtZTgwNzEzMzg5MTI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.5/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "11%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "24/100"
                }
            ],
            "Metascore": "24",
            "imdbRating": "5.5",
            "imdbVotes": "98,772",
            "imdbID": "tt0901476",
            "Type": "movie",
            "DVD": "28 Apr 2009",
            "BoxOffice": "$58,637,818",
            "Production": "20th Century Fox",
            "Website": "N/A"
        },
        {
            "title": "Eraser",
            "year": "1996",
            "summary": "U.S. Marshal deputy John Kruger (Arnold Schwarzenegger) is one of the toughest Marshals, his methods are to \"Erase\" The identities of his witnesses he is assigned to protect. Meanwhile, a woman named Lee Cullen who works for a corporation named Cyrez performed an undercover job for the FBI to unveil a top secret weapon which uses an electromagnetic pulse to dispatch targets. Cyrez discovered this about Lee and are now out to kill her, Kruger's job is now to protect Lee so she can testify against Cyrez. But, when Kruger was assigned to perform a job with another Marshal named Robert Deguerin, he discovers that Deguerin is behind some kind of scam that will involve the EM Gun, which will change hands to a Russian criminal if Kruger does not stop them, Kruger must not only protect Lee's life but his own.",
            "moviePoster": "/eraser/eraserposter.jpg",
            "locationInfo": {
                "address": "Doyers Street and Pell Street, Chinatown",
                "coords": [
                    -73.9980379,
                    40.7148267
                ]
            },
            "images": [
                "/eraser/eraser11.jpg",
                "/eraser/eraser10.jpg",
                "/eraser/eraser01.jpg"
            ],
            "neighborhood": "Manhattan, Chinatown",
            "comment": "",
            "place_name": "Doyers Street and Pell Street, New York, New York 10013, United States",
            "Year": "1996",
            "Rated": "R",
            "Released": "21 Jun 1996",
            "Runtime": "115 min",
            "Genre": "Action, Drama, Thriller",
            "Director": "Chuck Russell",
            "Writer": "Tony Puryear (story), Walon Green (story), Michael S. Chernuchin (story), Tony Puryear (screenplay), Walon Green (screenplay)",
            "Actors": "Arnold Schwarzenegger, James Caan, Vanessa Williams, James Coburn",
            "Plot": "A Witness Protection specialist becomes suspicious of his co-workers when dealing with a case involving high-tech weapons.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Nominated for 1 Oscar. Another 3 wins & 1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTczMTNlN2UtMWE2NS00ZTUyLTgzYTQtYTFkNWIzODJkYzIwXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.1/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "37%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "56/100"
                }
            ],
            "Metascore": "56",
            "imdbRating": "6.1",
            "imdbVotes": "101,981",
            "imdbID": "tt0116213",
            "Type": "movie",
            "DVD": "24 Nov 1998",
            "BoxOffice": "N/A",
            "Production": "Warner Home Video",
            "Website": "N/A"
        },
        {
            "title": "The Bag Man",
            "year": "2014",
            "summary": "Jack (John Cusack) is a tough guy with chronic bad luck but human touches. Hired by Dragna (Robert De Niro), a legendary crime boss to complete a simple but unusual task, the plot centers around the anticipated arrival of Dragna who has summoned JACK and a host of shady characters to a remote location for unknown reasons. Over the course of a long and violently eventful night awaiting Dragna's arrival, Jack's path crosses that of RIVKA (Rebecca Da Costa), a stunningly beautiful woman whose life becomes physically and emotionally entangled with Jack's. When Dragna finally arrives on the scene there are sudden and extreme consequences for all.",
            "moviePoster": "/thebagman/thebagmanposter.jpg",
            "locationInfo": {
                "address": "Broadway and Chambers Street",
                "coords": [
                    -74.0063041,
                    40.7141733
                ]
            },
            "images": [
                "/thebagman/thebagman05.jpg",
                "/thebagman/thebagman04.jpg",
                "/thebagman/thebagman03.jpg",
                "/thebagman/thebagman02.jpg",
                "/thebagman/thebagman01.jpg",
                "/thebagman/thebagman06.jpg"
            ],
            "neighborhood": "Manhattan, Tribeca",
            "comment": "",
            "place_name": "Broadway and Chambers Street, New York, New York 10007, United States",
            "Year": "2014",
            "Rated": "R",
            "Released": "20 Mar 2014",
            "Runtime": "108 min",
            "Genre": "Action, Crime, Drama, Thriller",
            "Director": "David Grovic",
            "Writer": "David Grovic, Paul Conway, James Russo (original screenplay \"Motel\")",
            "Actors": "John Cusack, Rebecca Da Costa, Robert De Niro, Crispin Glover",
            "Plot": "A criminal bides his time at a seedy motel, waiting for his boss after killing several men and making away with a mystery bag.",
            "Language": "English",
            "Country": "Bahamas, USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjE4NDc3NjUyNl5BMl5BanBnXkFtZTgwMDA4MDQwMTE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.2/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "11%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "28/100"
                }
            ],
            "Metascore": "28",
            "imdbRating": "5.2",
            "imdbVotes": "15,970",
            "imdbID": "tt2212008",
            "Type": "movie",
            "DVD": "01 Apr 2014",
            "BoxOffice": "$48,817",
            "Production": "Cinedigm Entertainment",
            "Website": "N/A"
        },
        {
            "title": "The Sorcerer's Apprentice",
            "year": "2010",
            "summary": "Balthazar Blake (Nicolas Cage) is a master sorcerer in modern-day Manhattan trying to defend the city from hisarch-nemesis, Maxim Horvath (Alfred Molina). Balthazar can't do it alone, so he recruits Dave Stutler (Jay Baruchel), a seemingly average guy who demonstrates hidden potential, as his reluctant protégé. The sorcerer gives his unwilling accomplice a crash course in the art and science of magic, and together, these unlikely partners work to stop the forces of darkness. It'll take all the courage Dave can muster to survive his training, save the city and get the girl as he becomes The Sorcerer's Apprentice.",
            "moviePoster": "/thesorcerersapprentice/thesorcerersapprenticeposter.jpg",
            "locationInfo": {
                "address": "Alley, Franklin Place and White Street",
                "coords": [
                    -73.758292,
                    40.761303
                ]
            },
            "images": [
                "/thesorcerersapprentice/thesorcerersapprentice27.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice26.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice53.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice59.jpg"
            ],
            "neighborhood": "Manhattan, Bayside",
            "comment": "",
            "place_name": "Alley Pond Park, Springfield Boulevard, New York, New York 11361, United States",
            "Year": "2010",
            "Rated": "PG",
            "Released": "14 Jul 2010",
            "Runtime": "109 min",
            "Genre": "Action, Adventure, Family, Fantasy",
            "Director": "Jon Turteltaub",
            "Writer": "Lawrence Konner (screen story), Mark Rosenthal (screen story), Matt Lopez (screen story), Matt Lopez (screenplay), Doug Miro (screenplay), Carlo Bernard (screenplay)",
            "Actors": "Nicolas Cage, Jay Baruchel, Alfred Molina, Teresa Palmer",
            "Plot": "Master sorcerer Balthazar Blake must find and train Merlin's descendant to defeat dark sorceress Morgana la Fée.",
            "Language": "English, Cantonese, Ukrainian",
            "Country": "USA",
            "Awards": "1 win & 1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2EwMzg3YWUtMTQyYS00ZDY3LTgzNTctOWI5NzY3MmZkOTk2XkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.1/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "40%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "46/100"
                }
            ],
            "Metascore": "46",
            "imdbRating": "6.1",
            "imdbVotes": "150,273",
            "imdbID": "tt0963966",
            "Type": "movie",
            "DVD": "30 Nov 2010",
            "BoxOffice": "$63,143,812",
            "Production": "Walt Disney Studios",
            "Website": "N/A"
        },
        {
            "title": "Demolition",
            "year": "2015",
            "summary": "Davis (Jake Gyllenhaal), a successful investment banker, struggles after losing his wife in a tragic car crash. Despite pressure from his father-in-law, Phil (Chris Cooper), to pull it together, Davis continues to unravel. What starts as a complaint letter to a vending machine company turns into a series of letters revealing startling personal admissions. Davis' letters catch the attention of customer service rep, Karen (Naomi Watts), and, amidst emotional and financial burdens of her own, the two form an unlikely connection. With the help of Karen and her son Chris (Judah Lewis), Davis starts to rebuild, beginning with the demolition of the life he once knew.",
            "moviePoster": "/demolition/demolitionposter.jpg",
            "locationInfo": {
                "address": "Office, 250 Greenwich Street and Barclay Street",
                "coords": [
                    -74.001789,
                    40.715083
                ]
            },
            "images": [
                "/demolition/demolition08.jpg",
                "/demolition/demolition07.jpg",
                "/demolition/demolition06.jpg",
                "/demolition/demolition23.jpg",
                "/demolition/demolition24.jpg"
            ],
            "neighborhood": "Manhattan, Lower East Side",
            "comment": "",
            "place_name": "Office of the City Clerk - Marriage Bureau, 141 Worth St, New York, New York 10013, United States",
            "Year": "2015",
            "Rated": "R",
            "Released": "08 Apr 2016",
            "Runtime": "101 min",
            "Genre": "Action, Comedy, Drama",
            "Director": "Jean-Marc Vallée",
            "Writer": "Bryan Sipe",
            "Actors": "Jake Gyllenhaal, Naomi Watts, Chris Cooper, Judah Lewis",
            "Plot": "A successful investment banker struggles after losing his wife in a tragic car crash. With the help of a customer service rep and her young son, he starts to rebuild, beginning with the demolition of the life he once knew.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win & 2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4Nzg1MTYxMl5BMl5BanBnXkFtZTgwMjUxNDMyODE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.0/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "53%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "49/100"
                }
            ],
            "Metascore": "49",
            "imdbRating": "7.0",
            "imdbVotes": "85,989",
            "imdbID": "tt1172049",
            "Type": "movie",
            "DVD": "19 Jul 2016",
            "BoxOffice": "$1,656,098",
            "Production": "Fox Searchlight",
            "Website": "N/A"
        },
        {
            "title": "The Wanderers",
            "year": "1979",
            "summary": "The Wanderers are an Italian-American gang vying for respect on the streets of the Bronx in 1963. Between rumbles with rivals such as the Ducky Boys and the Fordham Baldies, the group of toughs learn some difficult lessons about life and love. Leader Richie Gennaro (Ken Wahl) finds himself entangled with Despie Galasso (Toni Kalem), the daughter of a mobster, while the artistically inclined Joey (John Friedrich) falls hard for Nina (Karen Allen).",
            "moviePoster": "/thewanderers/thewanderersposter.jpg",
            "locationInfo": {
                "address": "Kingsbridge Terrace",
                "coords": [
                    -73.9024998,
                    40.8741415
                ]
            },
            "images": [
                "/thewanderers/thewanderers21.jpg",
                "/thewanderers/thewanderers20.jpg",
                "/thewanderers/thewanderers04.jpg",
                "/thewanderers/thewanderers02.jpg",
                "/thewanderers/thewanderers03.jpg"
            ],
            "neighborhood": "Bronx, Kingsbridge",
            "comment": "",
            "place_name": "Kingsbridge Terrace, Bronx, New York 10463, United States",
            "Year": "1979",
            "Rated": "R",
            "Released": "04 Jul 1979",
            "Runtime": "112 min",
            "Genre": "Drama",
            "Director": "Philip Kaufman",
            "Writer": "Richard Price (novel), Rose Kaufman (screenplay), Philip Kaufman (screenplay)",
            "Actors": "Ken Wahl, John Friedrich, Karen Allen, Toni Kalem",
            "Plot": "The Wanderers is a teenage, Italian gang in Bronx, NYC, 1963. They have their confrontations with other gangs. Drugs and weapons are uncool. Adult life awaits them.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZGY2MTUwZGYtOTI3MS00YTE4LWJiNTUtNzc5NmQ5ZDJiZGE1XkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.4/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "89%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "64/100"
                }
            ],
            "Metascore": "64",
            "imdbRating": "7.4",
            "imdbVotes": "9,785",
            "imdbID": "tt0080117",
            "Type": "movie",
            "DVD": "03 Sep 2002",
            "BoxOffice": "$14,492",
            "Production": "Warner Home Video",
            "Website": "N/A"
        },
        {
            "title": "P.S. I Love You",
            "year": "2007",
            "summary": "Holly Kennedy is beautiful, smart and married to the love of her life - a passionate, funny, and impetuous Irishman named Gerry. So when Gerry's life is taken by an illness, it takes the life out of Holly. The only one who can help her is the person who is no longer there. Nobody knows Holly better than Gerry. So it's a good thing he planned ahead. Before he died, Gerry wrote Holly a series of letters that will guide her, not only through her grief, but in rediscovering herself. The first message arrives on Holly's 30th birthday in the form of a cake, and to her utter shock, a tape recording from Gerry, who proceeds to tell her to get out and \"celebrate herself\". In the weeks and months that follow, more letters from Gerry are delivered in surprising ways, each sending her on a new adventure and each signing off in the same way; P.S. I Love You. Holly's mother and best friends begin to worry that Gerry's letters are keeping Holly tied to the past, but in fact, each letter is pushing her further into a new future. With Gerry's words as her guide, Holly embarks on a journey of rediscovery in a story about marriage, friendship and how a love so strong can turn the finality of death into a new beginning for life.",
            "moviePoster": "/psiloveyou/piiloveyouposter.jpg",
            "locationInfo": {
                "address": "Holly and Gerry's Apartment, 254 Broome Street and Orchard Street",
                "coords": [
                    -73.783095,
                    40.649816
                ]
            },
            "images": [
                "/psiloveyou/psiloveyou08.jpg",
                "/psiloveyou/psiloveyou07.jpg",
                "/psiloveyou/psiloveyou09.jpg",
                "/psiloveyou/psiloveyou10.jpg"
            ],
            "neighborhood": "Manhattan, John F. Kennedy International Airport",
            "comment": "",
            "place_name": "Apartment 7B Deli & Market, JFK Terminal 7, New York, New York 11430, United States",
            "Year": "2007",
            "Rated": "PG-13",
            "Released": "21 Dec 2007",
            "Runtime": "126 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Richard LaGravenese",
            "Writer": "Richard LaGravenese (screenplay), Steven Rogers (screenplay), Cecelia Ahern (novel)",
            "Actors": "Hilary Swank, Gerard Butler, Lisa Kudrow, Gina Gershon",
            "Plot": "A young widow discovers that her late husband has left her 10 messages intended to help ease her pain and start a new life.",
            "Language": "English",
            "Country": "USA",
            "Awards": "2 wins & 4 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.0/10"
                },
                {
                    "Source": "Metacritic",
                    "Value": "39/100"
                }
            ],
            "Metascore": "39",
            "imdbRating": "7.0",
            "imdbVotes": "197,751",
            "imdbID": "tt0431308",
            "Type": "movie",
            "DVD": "05 Feb 2008",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A"
        },
        {
            "title": "Sharknado 2: The Second One",
            "year": "22014",
            "summary": "When Fin (Ian Ziering) & April (Tara Reid) are on their way to New York, a Category 7 Hurricane spawns Heavy rain, winds, storm surges, & deadly Sharknadoes. And it's up to Fin & April to save the Big Apple from total devastation.",
            "moviePoster": "/sharknado2/sharknado2poster.jpg",
            "locationInfo": {
                "address": "Circle Line Ferry",
                "coords": [
                    -73.6366111,
                    40.7928197
                ]
            },
            "images": [
                "/sharknado2/sharknado2_05.jpg",
                "/sharknado2/sharknado2_04.jpg",
                "/sharknado2/sharknado2_06.jpg",
                "/sharknado2/sharknado2_14.jpg",
                "/sharknado2/sharknado2_15.jpg"
            ],
            "neighborhood": "New York Harbour, Searingtown",
            "comment": "",
            "place_name": "Circle Lane, Roslyn Heights, New York 11577, United States",
            "Year": "2014",
            "Rated": "TV-14",
            "Released": "30 Jul 2014",
            "Runtime": "95 min",
            "Genre": "Action, Adventure, Comedy, Horror, Sci-Fi, Thriller",
            "Director": "Anthony C. Ferrante",
            "Writer": "Thunder Levin",
            "Actors": "Ian Ziering, Tara Reid, Vivica A. Fox, Mark McGrath",
            "Plot": "Fin and April are on their way to New York City, until a category seven hurricane spawns heavy rain, storm surges, and deadly Sharknadoes.",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0MTIxMDEwNF5BMl5BanBnXkFtZTgwMDk3ODIxMjE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "4.0/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "61%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "4.0",
            "imdbVotes": "17,564",
            "imdbID": "tt3062074",
            "Type": "movie",
            "DVD": "07 Oct 2014",
            "BoxOffice": "N/A",
            "Production": "NCM Fathom",
            "Website": "N/A"
        },
        {
            "title": "The House on 92nd Street",
            "year": "921945",
            "summary": "Prior to the United States entering WWII, the FBI is monitoring known and suspected Nazi agents in the country.Purely by happenstance, they discover a Nazi cell in the US trying to smuggle information back to Germany on Process 97, a key part of the American atomic bombdevelopment. The FBI's Inspector George Briggs (Lloyd Nolan) leads this case, known as the Christopher Case as the unknown leader of the Nazi cell has the codename Mr. Christopher. Briggs' team cannot just bring in the known Nazi agents, but rather they have to find out exactly how the information is being leaked andwho Mr. Christopher is. They co-opt the assistance of William Dietrich (William Eythe), a German-American university student who the Nazis tried to recruit.As such, he will be working for the FBI as a double agent. Unknown on either side, it becomes a race as Dietrich's Nazi contacts in the United States, led byElsa Gebhardt (Signe Hasso), don't fully trust him and come ever so close to discovering his double agent status, while Briggs, Dietrich and their associatesclose in on the leak and the identity of Mr. Christopher. The modi operandi for both sides change slightly with December 7, 1941.",
            "moviePoster": "/thehouseon92ndstreet/thehouseon92ndstreetposter.jpg",
            "locationInfo": {
                "address": "",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/thehouseon92ndstreet/thehouseon92ndstreet26.jpg",
                "/thehouseon92ndstreet/thehouseon92ndstreet25.jpg",
                "/thehouseon92ndstreet/thehouseon92ndstreet24.jpg",
                "/thehouseon92ndstreet/thehouseon92ndstreet23.jpg",
                "/thehouseon92ndstreet/thehouseon92ndstreet34.jpg",
                "/thehouseon92ndstreet/thehouseon92ndstreet35.jpg"
            ],
            "neighborhood": "George Washington Bridge",
            "comment": "",
            "Year": "1945",
            "Rated": "Approved",
            "Released": "16 Oct 1945",
            "Runtime": "88 min",
            "Genre": "Crime, Drama, Film-Noir, Mystery, Thriller, War",
            "Director": "Henry Hathaway",
            "Writer": "Barré Lyndon (screenplay), Charles G. Booth (screenplay), John Monks Jr. (screenplay), Charles G. Booth (story)",
            "Actors": "William Eythe, Lloyd Nolan, Signe Hasso, Gene Lockhart",
            "Plot": "Bill Dietrich becomes a double agent for the F.B.I. in a Nazi spy ring.",
            "Language": "English, German",
            "Country": "USA",
            "Awards": "Won 1 Oscar. Another 1 win.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZTRlNDI2MjUtNzdmOS00NTViLTlhM2MtMmNjZmUxZmEzZmU2XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.6/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "50%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.6",
            "imdbVotes": "2,581",
            "imdbID": "tt0037795",
            "Type": "movie",
            "DVD": "06 Sep 2005",
            "BoxOffice": "N/A",
            "Production": "Twentieth Century Fox",
            "Website": "N/A"
        },
        {
            "title": "Emanuelle and the Last Cannibals",
            "year": "1977",
            "summary": "While doing undercover work in a mental hospital, Emanuelle (Laura Gemser) discovers a girl who seems to havebeen raised by a tribe of amazonian cannibals. Intrigued, Emanuelle and friends travel deep into the Amazon jungle, where they find that the supposedly extinct tribe ofcannibals is still very much alive, and Emanuelle and her party are not welcome visitors.",
            "moviePoster": "/emanuelleandthelastcannibals/emanuelleandthelastcannibalsposter.jpg",
            "locationInfo": {
                "address": "Plymouth Street and Washington Street",
                "coords": [
                    -73.9895378,
                    40.703854
                ]
            },
            "images": [
                "/emanuelleandthelastcannibals/emanuelleandthelastcannibals21.jpg",
                "/emanuelleandthelastcannibals/emanuelleandthelastcannibals20.jpg",
                "/emanuelleandthelastcannibals/emanuelleandthelastcannibals19.jpg",
                "/emanuelleandthelastcannibals/emanuelleandthelastcannibals34.jpg",
                "/emanuelleandthelastcannibals/emanuelleandthelastcannibals35.jpg"
            ],
            "neighborhood": "Brooklyn, DUMBO",
            "comment": "",
            "place_name": "Plymouth Street and Washington Street, Brooklyn, New York 11201, United States",
            "Year": "1977",
            "Rated": "R",
            "Released": "01 Jun 1984",
            "Runtime": "91 min",
            "Genre": "Adventure, Horror",
            "Director": "Joe D'Amato",
            "Writer": "Joe D'Amato (story), Romano Scandariato (script), Joe D'Amato (script)",
            "Actors": "Laura Gemser, Gabriele Tinti, Nieves Navarro, Donald O'Brien",
            "Plot": "Photojournalist Emanuelle accompanies an anthropologist, two female missionary workers and a treacherous hunter's party in a trek through the Amazon to find a cannibalistic tribe long thought extinct.",
            "Language": "Italian",
            "Country": "Italy",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmQyNTM4NTctOWYwMC00ZjI1LTg2NWYtNGYyOWJlNzdmODdmXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.1/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "5.1",
            "imdbVotes": "2,590",
            "imdbID": "tt0075984",
            "Type": "movie",
            "DVD": "20 Jun 2006",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A"
        },
        {
            "title": "Miracle on 34th Street",
            "year": "341947",
            "summary": "At the Macy's Department Store Thanksgiving Day parade, the actor playing Santa is discoveredto be drunk by a whiskered old man. Doris Walker (Maureen O'Hara), the no nonsense special events director, persuades the old man to take his place. The old man proves to be asensation and is quickly recruited to be the store Santa at the main Macy's outlet. While he is successful, Ms. Walker learns that he calls himself Kris Kringle (Edmund Gwenn)and he claims to be the actual Santa Claus. Despite reassurances by Kringle's doctor that he is harmless, Doris still has misgivings, especially when she has cynically trained herself, and especially her daughter, Susan, to reject all notions of belief and fantasy. And yet, people, especially Susan, begin to notice there is something special about Kris and his determination to advance the true spirit of Christmas amidst the rampant commercialism around him and succeeding in improbable ways. When a raucous conflict with the store's cruelly incompetent psychologist erupts, Kris finds himself held at Bellevue where, in despair, he deliberates fails a mental examination to ensure his commitment. All seems lost until Doris' friend, Fred Gaily, reassure Kris of his worth and agrees to represent him in the fight to secure his release. To achieve that, Fred arranges a formal hearing in which he argues that Kris is sane because he is in fact Santa Claus. What ensues is a bizarre hearing in which people's beliefs are reexamined and put to the test, but even so, it's going to take a miracle for Kris to win.",
            "moviePoster": "/miracleon34thstreet/miracleon34thstreetposter.jpg",
            "locationInfo": {
                "address": "New York County Supreme Court, 60 Centre Street, Financial",
                "coords": [
                    -73.989347,
                    40.693598
                ]
            },
            "images": [
                "/miracleon34thstreet/miracleon34thstreet11.jpg",
                "/miracleon34thstreet/miracleon34thstreet10.jpg",
                "/miracleon34thstreet/miracleon34thstreet09.jpg",
                "/miracleon34thstreet/miracleon34thstreet14.jpg",
                "/miracleon34thstreet/miracleon34thstreet13.jpg"
            ],
            "neighborhood": "Manhattan, Downtown",
            "comment": "",
            "place_name": "Kings County Supreme Court, 360 Adams St, New York, New York 11201, United States",
            "Year": "1947",
            "Rated": "Not Rated",
            "Released": "02 Oct 1947",
            "Runtime": "96 min",
            "Genre": "Comedy, Drama, Family",
            "Director": "George Seaton",
            "Writer": "George Seaton (written for the screen by), Valentine Davies (story)",
            "Actors": "Maureen O'Hara, John Payne, Edmund Gwenn, Gene Lockhart",
            "Plot": "When a nice old man who claims to be Santa Claus is institutionalized as insane, a young lawyer decides to defend him by arguing in court that he is the real thing.",
            "Language": "English, Dutch",
            "Country": "USA",
            "Awards": "Won 3 Oscars. Another 5 wins & 1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjRkOGEwYTUtY2E5Yy00ODg4LTk2ZWItY2IyMzUxOGVhMTM1XkEyXkFqcGdeQXVyNDk0MDg4NDk@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.9/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "96%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "88/100"
                }
            ],
            "Metascore": "88",
            "imdbRating": "7.9",
            "imdbVotes": "39,089",
            "imdbID": "tt0039628",
            "Type": "movie",
            "DVD": "16 Oct 2001",
            "BoxOffice": "N/A",
            "Production": "20th Century Fox",
            "Website": "N/A"
        },
        {
            "title": "Regarding Henry",
            "year": "1991",
            "summary": "Henry Turner (Harrison Ford) is a despicable and ruthless trial lawyer whose life is turned upside down when he is shot in the head during a robbery. He survives the injury with significant brain damage and must learn again how to speak, walk, and function normally. He has also lost most of the memory of his personal life, and must adjust to life with the family that he does not remember. To the surprise of his wife and daughter, Henry becomes a loving and affectionate man.",
            "moviePoster": "/regardinghenry/regardinghenryposter.jpg",
            "locationInfo": {
                "address": "5th Avenue and East 82nd Street",
                "coords": [
                    -73.9623161,
                    40.7789525
                ]
            },
            "images": [
                "/regardinghenry/regardinghenry10.jpg",
                "/regardinghenry/regardinghenry09.jpg",
                "/regardinghenry/regardinghenry08.jpg",
                "/regardinghenry/regardinghenry31.jpg",
                "/regardinghenry/regardinghenry30.jpg",
                "/regardinghenry/regardinghenry35.jpg"
            ],
            "neighborhood": "Manhattan, Upper East Side",
            "comment": "",
            "place_name": "5th Avenue and East 82nd Street, New York, New York 10028, United States",
            "Year": "1991",
            "Rated": "PG-13",
            "Released": "10 Jul 1991",
            "Runtime": "108 min",
            "Genre": "Drama, Romance",
            "Director": "Mike Nichols",
            "Writer": "J.J. Abrams",
            "Actors": "Harrison Ford, Annette Bening, Michael Haley, Stanley Swerdlow",
            "Plot": "After being shot, a lawyer loses his memory and must relearn speech and mobility, but he has a loving family to support him.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win & 2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDU0YzM4MzAtZTNmNi00Yzc4LTliNTgtYzFmZmEzNmM4MmRmXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.7/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "41%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "47/100"
                }
            ],
            "Metascore": "47",
            "imdbRating": "6.7",
            "imdbVotes": "28,716",
            "imdbID": "tt0102768",
            "Type": "movie",
            "DVD": "09 Sep 2003",
            "BoxOffice": "N/A",
            "Production": "Paramount Home Video",
            "Website": "N/A"
        },
        {
            "title": "I Am Legend",
            "year": "2007",
            "summary": "Robert Neville (Will Smith) is a scientist who was unable to stop the spread of the terrible virusthat was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world.For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there.But he is not alone. Mutant victims of the plague -- The Infected -- lurk in the shadows... watching Neville's every move... waiting forhim to make a fatal mistake. Perhaps mankind's last, best hope, Neville is driven by only one remaining mission: to find a way to reversethe effects of the virus using his own immune blood. But he knows he is outnumbered... and quickly running out of time.Video clips from I Am Legend locations",
            "moviePoster": "/iamlegend/iamlegendposter.jpg",
            "locationInfo": {
                "address": "Park Avenue",
                "coords": [
                    -73.97869,
                    40.750212
                ]
            },
            "images": [
                "/iamlegend/iamlegend10.jpg",
                "/iamlegend/iamlegend28.jpg",
                "/iamlegend/iamlegend27.jpg",
                "/iamlegend/iamlegend29.jpg"
            ],
            "neighborhood": "Manhattan, Murray Hill",
            "comment": "",
            "place_name": "Park Avenue Tavern, 99 Park Ave, New York, New York 10016, United States",
            "Year": "2007",
            "Rated": "PG-13",
            "Released": "14 Dec 2007",
            "Runtime": "101 min",
            "Genre": "Action, Adventure, Drama, Sci-Fi, Thriller",
            "Director": "Francis Lawrence",
            "Writer": "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
            "Actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
            "Plot": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure in this post-apocalyptic action thriller.",
            "Language": "English",
            "Country": "USA",
            "Awards": "9 wins & 22 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.2/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "68%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "65/100"
                }
            ],
            "Metascore": "65",
            "imdbRating": "7.2",
            "imdbVotes": "674,957",
            "imdbID": "tt0480249",
            "Type": "movie",
            "DVD": "18 Mar 2008",
            "BoxOffice": "$256,399,999",
            "Production": "Warner Bros. Pictures",
            "Website": "N/A"
        },
        {
            "title": "Frankie and Johnny",
            "year": "1991",
            "summary": "Johnny (Al Pacino) is a lonely middle-aged man who gets a job in a restaurant owned by a greek family.There, he meets Frankie (Michelle Pfeiffer), a woman who doesn't seem very happy with her life, and he falls in love with her. The problem is that Frankie feelsreally lost in her monotony, so he can't convince her about his feelings.",
            "moviePoster": "/frankieandjohnny/frankieandjohnnyposter.jpg",
            "locationInfo": {
                "address": "Frankie's Apartment, 423 West 45th Street and 9th Avenue",
                "coords": [
                    -73.783095,
                    40.649816
                ]
            },
            "images": [
                "/frankieandjohnny/frankieandjohnny01.jpg",
                "/frankieandjohnny/frankieandjohnny02.jpg",
                "/frankieandjohnny/frankieandjohnny03.jpg",
                "/frankieandjohnny/frankieandjohnny04.jpg",
                "/frankieandjohnny/frankieandjohnny40.jpg"
            ],
            "neighborhood": "Manhattan, John F. Kennedy International Airport",
            "comment": "",
            "place_name": "Apartment 7B Deli & Market, JFK Terminal 7, New York, New York 11430, United States",
            "Year": "1991",
            "Rated": "R",
            "Released": "11 Oct 1991",
            "Runtime": "118 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Garry Marshall",
            "Writer": "Terrence McNally (play), Terrence McNally (screenplay)",
            "Actors": "Al Pacino, Michelle Pfeiffer, Hector Elizondo, Nathan Lane",
            "Plot": "Johnny has just been released from prison, and gets a job in a café beside waitress Frankie. Frankie is a bit of a loner, but Johnny is determined their romance will blossom.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Nominated for 1 Golden Globe. Another 4 wins & 1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMzA4Y2QyODMtNzBiYi00OGYwLTkxZjQtNjZmZGI3ZTc4NTk0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.8/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "66%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "66/100"
                }
            ],
            "Metascore": "66",
            "imdbRating": "6.8",
            "imdbVotes": "28,148",
            "imdbID": "tt0101912",
            "Type": "movie",
            "DVD": "04 Dec 2001",
            "BoxOffice": "N/A",
            "Production": "Paramount Home Video",
            "Website": "N/A"
        },
        {
            "title": "The Bourne Ultimatum",
            "year": "2007",
            "summary": "Bourne (Matt Damon) is once again brought out of hiding, this time inadvertently by London-basedreporter Simon Ross who is trying to unveil Operation Blackbriar--an upgrade to Project Treadstone--in a series of newspaper columns. Bourne sets up a meeting withRoss and realizes instantly they're being scanned. Information from the reporter stirs a new set of memories, and Bourne must finally, ultimately, uncover his darkpast whilst dodging The Company's best efforts in trying to eradicate him.",
            "moviePoster": "/thebourneultimatum/thebourneultimatumposter.jpg",
            "locationInfo": {
                "address": "East 56th Street and Park Avenue",
                "coords": [
                    -73.9711418,
                    40.760902
                ]
            },
            "images": [
                "/thebourneultimatum/thebourneultimatum05.jpg",
                "/thebourneultimatum/thebourneultimatum04.jpg",
                "/thebourneultimatum/thebourneultimatum07.jpg",
                "/thebourneultimatum/thebourneultimatum06.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "East 56th Street and Park Avenue, New York, New York 10457, United States",
            "Year": "2007",
            "Rated": "PG-13",
            "Released": "03 Aug 2007",
            "Runtime": "115 min",
            "Genre": "Action, Mystery, Thriller",
            "Director": "Paul Greengrass",
            "Writer": "Tony Gilroy (screenplay), Scott Z. Burns (screenplay), George Nolfi (screenplay), Tony Gilroy (screen story), Robert Ludlum (novel)",
            "Actors": "Matt Damon, Julia Stiles, David Strathairn, Scott Glenn",
            "Plot": "Jason Bourne dodges a ruthless C.I.A. official and his Agents from a new assassination program while searching for the origins of his life as a trained killer.",
            "Language": "English, French, Arabic, Russian, Spanish",
            "Country": "USA, Germany, France, Spain",
            "Awards": "Won 3 Oscars. Another 26 wins & 41 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNGNiNmU2YTMtZmU4OS00MjM0LTlmYWUtMjVlYjAzYjE2N2RjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "8.0/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "92%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "85/100"
                }
            ],
            "Metascore": "85",
            "imdbRating": "8.0",
            "imdbVotes": "596,544",
            "imdbID": "tt0440963",
            "Type": "movie",
            "DVD": "11 Dec 2007",
            "BoxOffice": "$227,400,000",
            "Production": "Universal Pictures",
            "Website": "N/A"
        },
        {
            "title": "It Takes Two",
            "year": "1995",
            "summary": "Alyssa (Ashley Olsen) is a rich girl and Amanda (Mary-Kate Olsen) is an orphan, who are two littlegirls who are identical, but complete strangers, that accidentally meet one day. In an attempt to stop Alyssa's father from getting married to Clarice (Jane Sibbett),a conceited know-it-all, the girls get him to meet Amanda's case worker and switch lives to stop the wedding once and for all. Though things don't go exactly asplanned when Alyssa gets adopted and Clarice moves up the wedding.",
            "moviePoster": "/ittakestwo/ittakestwoposter.jpg",
            "locationInfo": {
                "address": "Arden Elizabeth, 691 5th Avenue and East 54th Street",
                "coords": [
                    -73.97588999999999,
                    40.7600075
                ]
            },
            "images": [
                "/ittakestwo/ittakestwo09.jpg",
                "/ittakestwo/ittakestwo08.jpg",
                "/ittakestwo/ittakestwo07.jpg",
                "/ittakestwo/ittakestwo23.jpg",
                "/ittakestwo/ittakestwo22.jpg",
                "/ittakestwo/ittakestwo25.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "Elizabeth Arden Red Door Spa, 663 5th Ave, New York, New York 10022, United States",
            "Year": "1995",
            "Rated": "PG",
            "Released": "17 Nov 1995",
            "Runtime": "101 min",
            "Genre": "Comedy, Family, Romance",
            "Director": "Andy Tennant",
            "Writer": "Deborah Dean Davis",
            "Actors": "Kirstie Alley, Steve Guttenberg, Mary-Kate Olsen, Ashley Olsen",
            "Plot": "Alyssa and Amanda are two little girls who are identical, but complete strangers, that accidentally meet one day.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win & 3 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMzdhMGU0MzEtZjg1Ny00YzE5LWE0MGQtMTNiN2UwN2I5ZDBjXkEyXkFqcGdeQXVyNTgzMzU5MDI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.9/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "8%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "45/100"
                }
            ],
            "Metascore": "45",
            "imdbRating": "5.9",
            "imdbVotes": "20,207",
            "imdbID": "tt0113442",
            "Type": "movie",
            "DVD": "11 Jun 2002",
            "BoxOffice": "N/A",
            "Production": "Warner Home Video",
            "Website": "N/A"
        },
        {
            "title": "A Late Quartet",
            "year": "2012",
            "summary": "After a classical string quartet's 25 years of success, Peter (Christopher Walken), the cellist andoldest member, decides that he must retire when he learns he has Parkinson's Disease. For the others, that announcement proves a catalyst forletting their hidden resentments come to the surface while the married members' daughter has disruptive desires of her own. All this threatens totear the group apart even as they are famous for playing Beethoven's String Quartet No. 14, opus 131, a piece that is played non-stop no matterhow life interferes.",
            "moviePoster": "/alatequartet/alatequartetposter.jpg",
            "locationInfo": {
                "address": "East 7th Street",
                "coords": [
                    -73.8235981,
                    40.8992375
                ]
            },
            "images": [
                "/alatequartet/alatequartet07.jpg",
                "/alatequartet/alatequartet06.jpg",
                "/alatequartet/alatequartet05.jpg",
                "/alatequartet/alatequartet04.jpg",
                "/alatequartet/alatequartet26.jpg",
                "/alatequartet/alatequartet29.jpg"
            ],
            "neighborhood": "Manhattan, Mount Vernon",
            "comment": "",
            "place_name": "East 7th Street, Mount Vernon, New York 10550, United States",
            "Year": "2012",
            "Rated": "R",
            "Released": "23 Nov 2012",
            "Runtime": "105 min",
            "Genre": "Drama, Music",
            "Director": "Yaron Zilberman",
            "Writer": "Seth Grossman (screenplay), Yaron Zilberman (screenplay), Yaron Zilberman (story)",
            "Actors": "Catherine Keener, Christopher Walken, Philip Seymour Hoffman, Mark Ivanir",
            "Plot": "Members of a world-renowned string quartet struggle to stay together in the face of death, competing egos and insuppressible lust.",
            "Language": "English",
            "Country": "USA",
            "Awards": "2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3MDc3MzIzNV5BMl5BanBnXkFtZTcwNjkwNTU0OA@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.1/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "76%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "67/100"
                }
            ],
            "Metascore": "67",
            "imdbRating": "7.1",
            "imdbVotes": "13,641",
            "imdbID": "tt1226240",
            "Type": "movie",
            "DVD": "05 Feb 2013",
            "BoxOffice": "$1,400,000",
            "Production": "Entertainment One",
            "Website": "N/A"
        },
        {
            "title": "Deep Impact",
            "year": "1998",
            "summary": "A comet is on a course to collide with Earth, and people must cope with the fact that they will die. The President has devised a plan to keep as many humans alive as possible. Scientists have built giant caves big enough to hold a million people, and the government is going to have a lottery to pick 800,000 people to live in the caves along with 200,000 scientists, artists and doctors.",
            "moviePoster": "/deepimpact/deepimpactposter.jpg",
            "locationInfo": {
                "address": "Battery Park and the Financial District",
                "coords": [
                    -74.0176534,
                    40.7063675
                ]
            },
            "images": [
                "/deepimpact/deepimpact04.jpg",
                "/deepimpact/deepimpact03.jpg",
                "/deepimpact/deepimpact14.jpg",
                "/deepimpact/deepimpact05.jpg"
            ],
            "neighborhood": "Manhattan, Battery Park",
            "comment": "",
            "place_name": "Battery Place, New York, New York 10280, United States",
            "Year": "1998",
            "Rated": "PG-13",
            "Released": "08 May 1998",
            "Runtime": "120 min",
            "Genre": "Action, Drama, Romance, Sci-Fi, Thriller",
            "Director": "Mimi Leder",
            "Writer": "Bruce Joel Rubin, Michael Tolkin",
            "Actors": "Robert Duvall, Téa Leoni, Elijah Wood, Vanessa Redgrave",
            "Plot": "A comet is discovered to be on a collision course with Earth. As doomsday nears, the human race prepares for the worst.",
            "Language": "English",
            "Country": "USA",
            "Awards": "5 wins & 14 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTUwMTY1YmMtN2U5NC00YjkzLTg0YWQtZmEwNTEzZjdkNzQ2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.2/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "45%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "40/100"
                }
            ],
            "Metascore": "40",
            "imdbRating": "6.2",
            "imdbVotes": "159,041",
            "imdbID": "tt0120647",
            "Type": "movie",
            "DVD": "15 Dec 1998",
            "BoxOffice": "N/A",
            "Production": "Paramount Pictures",
            "Website": "N/A"
        },
        {
            "title": "Exposed",
            "year": "2016",
            "summary": "Detective Galban (Keanu Reeves), finds his partner and close friend, Detective Cullen murdered in an underground subway. On the huntfor the killer, Galban begins to suspect his partner may have been heavily involved in drug dealing and police corruption. As Galban investigates, people who knew Cullen, are conveniently found dead.The closer Galban gets to the truth, both Cullen's wife and his Lieutenant Christopher McDonald try to persuade him to back off, fearing his findings may discredit Cullen and expose corruptionwithin the Police Department. Galban's only remaining lead is Isabel (Ana de Armas), a young, devout, Latino girl, who resides with her in-laws. Galban fears her life could be in jeopardy should he gettoo close to her. However, Isabel has recently experienced something not from this world, something mystical that she believes is truly a miracle. Not unlike Galban, Isabel is dealing with herown demons from the past; a past that just may lead them to the truth; in turn, bringing both some form of assurance.",
            "moviePoster": "/exposed2016/exposed2016poster.jpg",
            "locationInfo": {
                "address": "West 173rd Street and Wadsworth Avenue",
                "coords": [
                    -73.9387288,
                    40.8446487
                ]
            },
            "images": [
                "/exposed2016/exposed18.jpg",
                "/exposed2016/exposed17.jpg",
                "/exposed2016/exposed50.jpg",
                "/exposed2016/exposed34.jpg"
            ],
            "neighborhood": "Washington Heights, Washington Heights",
            "comment": "",
            "place_name": "West 173rd Street and Wadsworth Avenue, New York, New York 10033, United States",
            "Year": "2016",
            "Rated": "R",
            "Released": "22 Jan 2016",
            "Runtime": "102 min",
            "Genre": "Crime, Drama, Mystery, Thriller",
            "Director": "Gee Malik Linton",
            "Writer": "Gee Malik Linton (screenplay)",
            "Actors": "Ana de Armas, Gabe Vargas, Sandy Tejada, Ariel Pacheco",
            "Plot": "A police detective investigates the truth behind his partner's death. The mysterious case reveals disturbing police corruption and a dangerous secret involving an unlikely young woman.",
            "Language": "English, Spanish",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwMzk1MDI1OF5BMl5BanBnXkFtZTgwMDYxODkzNzE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "4.3/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "8%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "23/100"
                }
            ],
            "Metascore": "23",
            "imdbRating": "4.3",
            "imdbVotes": "13,407",
            "imdbID": "tt4019560",
            "Type": "movie",
            "DVD": "29 Mar 2016",
            "BoxOffice": "N/A",
            "Production": "Lionsgate Premiere",
            "Website": "N/A"
        },
        {
            "title": "Side Street",
            "year": "1950",
            "summary": "Joe Norson (Farley Granger), a poor letter carrier with a sweet, pregnant wife, yields to momentary temptation andsteals $30,000 belonging to a pair of ruthless blackmailers who won't stop at murder. After a few days of soul-searching, Joe offers to return the money, only tofind that the \"friend\" he left it with has absconded. Now every move Joe makes plunges him deeper into trouble, as he's pursued and pursuing through the shadowy,sinister side of New York.",
            "moviePoster": "/sidestreet/sidestreetposter.jpg",
            "locationInfo": {
                "address": "Beauty Salon, 29 West 8th Street",
                "coords": [
                    -73.855495,
                    40.688049
                ]
            },
            "images": [
                "/sidestreet/sidestreet23.jpg",
                "/sidestreet/sidestreet21.jpg",
                "/sidestreet/sidestreet25.jpg",
                "/sidestreet/sidestreet62.jpg",
                "/sidestreet/sidestreet63.jpg"
            ],
            "neighborhood": "Manhattan, Woodhaven",
            "comment": "",
            "place_name": "El Beauty Salon Ferreira, 8702 91st Ave, New York, New York 11421, United States",
            "Year": "1950",
            "Rated": "Passed",
            "Released": "22 Apr 1950",
            "Runtime": "83 min",
            "Genre": "Crime, Drama, Film-Noir, Thriller",
            "Director": "Anthony Mann",
            "Writer": "Sydney Boehm (story), Sydney Boehm (screenplay)",
            "Actors": "Farley Granger, Cathy O'Donnell, James Craig, Paul Kelly",
            "Plot": "A struggling young father-to-be gives in to temptation and impulsively steals money from the office of a shady lawyer - with catastrophic consequences.",
            "Language": "English, Turkish",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNmRhNGM0YWYtMjZhMy00YTNiLWFhMTgtYjZlNGI5YjljYzlhXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.1/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "83%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.1",
            "imdbVotes": "2,337",
            "imdbID": "tt0042960",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "MGM",
            "Website": "N/A"
        },
        {
            "title": "They All Laughed",
            "year": "1981",
            "summary": "New York's Odyssey Detective Agency is hired by two different clients tofollow two women suspected of infidelity. Ladies' man John Russo (Ben Gazzara) trails Angela Niotes (Audrey Hepburn), the elegant wife of awealthy Italian industrialist, while Charles Rutledge and Arthur Brodsky follow Dolores Martin (Dorothy Stratten), the beautiful young wife of a jealous husband. Their respective cases arecomplicated when John falls for Angela, and Charles falls for Dolores.",
            "moviePoster": "/theyalllaughed/theyalllaughedposter.jpg",
            "locationInfo": {
                "address": "2nd Avenue and East 20th Street",
                "coords": [
                    -73.982267,
                    40.73602
                ]
            },
            "images": [
                "/theyalllaughed/theyalllaughed20.jpg",
                "/theyalllaughed/theyalllaughed19.jpg",
                "/theyalllaughed/theyalllaughed18.jpg",
                "/theyalllaughed/theyalllaughed17.jpg",
                "/theyalllaughed/theyalllaughed66.jpg",
                "/theyalllaughed/theyalllaughed67.jpg"
            ],
            "neighborhood": "Manhattan, Gramercy",
            "comment": "",
            "place_name": "2nd Avenue and East 20th Street, New York, New York 10003, United States",
            "Year": "1981",
            "Rated": "PG",
            "Released": "05 Mar 1982",
            "Runtime": "115 min",
            "Genre": "Comedy, Romance",
            "Director": "Peter Bogdanovich",
            "Writer": "Peter Bogdanovich, Blaine Novak",
            "Actors": "Audrey Hepburn, Ben Gazzara, Patti Hansen, John Ritter",
            "Plot": "A mad cap private-eye caper about a team of detectives who are following, and are being followed by, a group of beautiful women.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win & 1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTM3MjZhOTQtZjIxNi00OTUxLWJkOTgtMmM0YTFiZGM5Y2Y0XkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.4/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "44%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.4",
            "imdbVotes": "2,086",
            "imdbID": "tt0083189",
            "Type": "movie",
            "DVD": "17 Oct 2006",
            "BoxOffice": "N/A",
            "Production": "20th Century Fox Film Corporation",
            "Website": "N/A"
        },
        {
            "title": "Who's That Girl",
            "year": "1987",
            "summary": "Manhattan lawyer Louden Trott (Griffin Dunne) is about to marry his tycoon boss Simon Worthington's (John McMartin's) spoiled-rotten daughter Wendy (Haviland Morris), albeit with a crushing prenuptial. Simon, however, makes him interrupt the preparations to make sure in person that nobody Nikki Finn (Madonna), just released from a New York jail, takes the bus to meet her Philadelphia parole officer. Picking up a cat (actually a rare mountain lion) for even richer Montgomery Bell (Sir John Mills) proves to be bad enough, but Nikki takes the cake when it comes to provoking, manipulating, and surprising. Furthermore, they are tailed by a couple of criminal goons and a bickering pair of police detectives who are after the key to evidence which Nikki claims proves she was framed by corrupt Worthington.",
            "moviePoster": "/whosthatgirl/whosthatgirlposter.jpg",
            "locationInfo": {
                "address": "Brooklyn Bridge Park Pier 2",
                "coords": [
                    -73.9982015,
                    40.699518999999995
                ]
            },
            "images": [
                "/whosthatgirl/whosthatgirl303.jpg",
                "/whosthatgirl/whosthatgirl302.jpg",
                "/whosthatgirl/whosthatgirl300.jpg",
                "/whosthatgirl/whosthatgirl385.jpg"
            ],
            "neighborhood": "Brooklyn, Brooklyn Heights",
            "comment": "",
            "place_name": "Brooklyn Bridge Park - Pier 2, Furman St, New York, New York 10004, United States",
            "Year": "1987",
            "Rated": "PG",
            "Released": "07 Aug 1987",
            "Runtime": "92 min",
            "Genre": "Comedy, Music, Romance",
            "Director": "James Foley",
            "Writer": "Andrew Smith (story), Andrew Smith (screenplay), Ken Finkleman (screenplay)",
            "Actors": "Madonna, Griffin Dunne, Haviland Morris, John McMartin",
            "Plot": "The life of an uptight tax lawyer turns chaotic when he is asked to escort a young woman newly released from prison, who persuades him to help prove her innocence.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Nominated for 1 Golden Globe. Another 2 wins & 6 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2EwMDJiNjEtNWIzZS00MDRlLTkwNTItNDllMDg1NDBiNjQ0XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "4.8/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "38%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "27/100"
                }
            ],
            "Metascore": "27",
            "imdbRating": "4.8",
            "imdbVotes": "9,320",
            "imdbID": "tt0094321",
            "Type": "movie",
            "DVD": "14 Feb 2006",
            "BoxOffice": "N/A",
            "Production": "Warner Bros. Pictures",
            "Website": "N/A"
        },
        {
            "title": "Return to Montauk",
            "year": "2017",
            "summary": "It is winter in Montauk, at the far end of Long Island. There are two deck chairs on the windswept beach. The chairs are waiting for two people who have, for a long time, been lost to each other. He is a writer and has come from Berlin. She is a New York lawyer. Many years before, they had a fling, but they were too young to know they had each met the love of their lives. Now they have come back to Montauk, filled with regret and hope. The bodies remember. It feels for them like the next day after the last one they were together. They do not know if it is possible to reverse time. In Montauk, they find out.",
            "moviePoster": "/returntomontauk/returntomontaukposter.jpg",
            "locationInfo": {
                "address": "Apartment, 23 Henry Street",
                "coords": [
                    -73.783095,
                    40.649816
                ]
            },
            "images": [
                "/returntomontauk/returntomontauk41.jpg",
                "/returntomontauk/returntomontauk40.jpg",
                "/returntomontauk/returntomontauk39.jpg",
                "/returntomontauk/returntomontauk59.jpg",
                "/returntomontauk/returntomontauk61.jpg"
            ],
            "neighborhood": "Manhattan, John F. Kennedy International Airport",
            "comment": "",
            "place_name": "Apartment 7B Deli & Market, JFK Terminal 7, New York, New York 11430, United States",
            "Year": "2017",
            "Rated": "PG-13",
            "Released": "11 May 2017",
            "Runtime": "106 min",
            "Genre": "Drama, Romance",
            "Director": "Volker Schlöndorff",
            "Writer": "Colm Tóibín (screenplay), Volker Schlöndorff (screenplay)",
            "Actors": "Stellan Skarsgård, Bronagh Gallagher, Nina Hoss, Niels Arestrup",
            "Plot": "The author Max Zorn, now in his early 60s, is on a promotional book tour in New York when he meets up again with the woman he could never forget. They spend a weekend together. 17 years have passed. Can there be a future for their past?",
            "Language": "English, German, French",
            "Country": "Germany, Ireland, France",
            "Awards": "3 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjFmMjQ2MTctYmNjNy00YWYxLWEzYTYtOTZjODY2OThmMmNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.9/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "50%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "5.9",
            "imdbVotes": "996",
            "imdbID": "tt5247776",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "N/A",
            "Production": "N/A",
            "Website": "N/A"
        },
        {
            "title": "Self/less",
            "year": "2015",
            "summary": "Billionaire industrialist Damian Hale (Ben Kingsley) is master of his universe, until he encounters a foe that hecan't defeat: cancer. His only hope is a radical medical procedure called \"shedding,\" in which his consciousness is transferred to a healthy body. After the procedure, Damian, nowcalled Edward (Ryan Reynolds), starts a new life in New Orleans, but he's plagued by disturbing images. When he delves into Edward's mysterious origin, he learns that some will kill to keep it secret.",
            "moviePoster": "/selfless/selflessposter.jpg",
            "locationInfo": {
                "address": "134 Carondelet Street and  Common Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/selfless/selfless11.jpg",
                "/selfless/selfless10.jpg",
                "/selfless/selfless09.jpg",
                "/selfless/selfless08.jpg",
                "/selfless/selfless13.jpg",
                "/selfless/selfless14.jpg"
            ],
            "neighborhood": "New Orleans",
            "comment": "",
            "Year": "2015",
            "Rated": "PG-13",
            "Released": "10 Jul 2015",
            "Runtime": "117 min",
            "Genre": "Action, Mystery, Sci-Fi, Thriller",
            "Director": "Tarsem Singh",
            "Writer": "Àlex Pastor, David Pastor",
            "Actors": "Ryan Reynolds, Natalie Martinez, Matthew Goode, Ben Kingsley",
            "Plot": "A dying real estate mogul transfers his consciousness into a healthy young body, but soon finds that neither the procedure nor the company that performed it are quite what they seem.",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0MTQzNzAxMl5BMl5BanBnXkFtZTgwNjg4MjcxNjE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.5/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "19%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "34/100"
                }
            ],
            "Metascore": "34",
            "imdbRating": "6.5",
            "imdbVotes": "87,842",
            "imdbID": "tt2140379",
            "Type": "movie",
            "DVD": "10 Nov 2015",
            "BoxOffice": "N/A",
            "Production": "Focus Features",
            "Website": "N/A"
        },
        {
            "title": "Heavy Petting",
            "year": "2007",
            "summary": "When Charlie (Brendan Hines) meets Daphne (Malin Akerman) - the girl of his dreams - he never expects he'll haveto battle past her pet dog \"Babydoll\" to woo her. And just when it seems he can't beat the beast and all is lost, something unexpected happens:Charlie begins to fall in love with the dog himself, realizing he never really needed a girlfriend in the first place. Now, in order to keephanging out with \"man's best friend\", Charlie must scramble to keep the relationship with Daphne going at all costs - or risk losing them both.",
            "moviePoster": "/heavypetting/heavypettingposter.jpg",
            "locationInfo": {
                "address": "Pet Shop, 192 5th Avenue and Sackett Street",
                "coords": [
                    -74.045984,
                    40.721464
                ]
            },
            "images": [
                "/heavypetting/heavypetting03.jpg",
                "/heavypetting/heavypetting02.jpg",
                "/heavypetting/heavypetting01.jpg",
                "/heavypetting/heavypetting04.jpg"
            ],
            "neighborhood": "Brooklyn, Downtown",
            "comment": "",
            "place_name": "The Pet Shop, 193 Newark Ave, Jersey City, New Jersey 07302, United States",
            "Year": "2007",
            "Rated": "R",
            "Released": "15 Jul 2008",
            "Runtime": "94 min",
            "Genre": "Comedy",
            "Director": "Marcel Sarmiento",
            "Writer": "Marcel Sarmiento",
            "Actors": "Malin Akerman, Brendan Hines, Mike Doyle, Juan Carlos Hernández",
            "Plot": "When Charlie meets Daphne - the girl of his dreams - he never expects he'll have to battle past her pet dog \"Babydoll\" to woo her. And just when it seems he can't beat the beast and all is ...",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTI5Mjk0MzExOF5BMl5BanBnXkFtZTcwODUwMDU1MQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "4.5/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "4.5",
            "imdbVotes": "1,031",
            "imdbID": "tt0491211",
            "Type": "movie",
            "DVD": "15 Jul 2008",
            "BoxOffice": "N/A",
            "Production": "Docurama",
            "Website": "N/A"
        },
        {
            "title": "Purple Violets",
            "year": "2007",
            "summary": "Patti Petalson (Selma Blair) is a promising writer, but her marriage and conventional job keep her from her dream. She longs to return to her writing, especially after running into her first love Brian Callahan (Patrick Wilson), a successful crime novelist. Kate (Debra Messing) is Patti's best friend since college. She's a tough-talking schoolteacher who plays therapist to all Patti's problems, while she's got a few of her own. Despite Brian's gorgeous Tribeca loft and perfect house in the Hamptons, he longs to write works of greater literary value. Michael Murphy (Edward Burns), his lawyer and best friend from college still carries a flame for his former girlfriend Kate, even though their relationship ended badly years ago. She holds a major grudge, but he would go to any length just to win Kate back, knowing his feelings for her never went away. He tried to forget over the years but since he spotted Kate in the restaurant she was all he could think about. When Patti sells Murphy a new apartment, and Brian publishes his personal novel, these old friends reconnect in unexpected ways with surprising results.",
            "moviePoster": "/purpleviolets/purplevioletsposter.jpg",
            "locationInfo": {
                "address": "Queensboro Bridge, East 59th Street",
                "coords": [
                    -73.950445,
                    40.755201
                ]
            },
            "images": [
                "/purpleviolets/purpleviolets36.jpg",
                "/purpleviolets/purpleviolets35.jpg",
                "/purpleviolets/purpleviolets69.jpg",
                "/purpleviolets/purpleviolets70.jpg"
            ],
            "neighborhood": "New York, Hunters Point",
            "comment": "",
            "place_name": "Queensboro Bridge Pedestrian & Bike Path, Queensboro Bridge, New York, New York 11101, United States",
            "Year": "2007",
            "Rated": "N/A",
            "Released": "20 Feb 2009",
            "Runtime": "103 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Edward Burns",
            "Writer": "Edward Burns",
            "Actors": "Annette Arnold, Max Baker, Selma Blair, James Biberi",
            "Plot": "Patti Petalson (Blair) struggles with the pressure of becoming the next important American writer.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwOTU3Nzk4MV5BMl5BanBnXkFtZTcwMzU2NzAzMg@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.4/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.4",
            "imdbVotes": "3,044",
            "imdbID": "tt0491109",
            "Type": "movie",
            "DVD": "26 Aug 2008",
            "BoxOffice": "N/A",
            "Production": "Lucky Day Pictures",
            "Website": "N/A"
        },
        {
            "title": "My Last Day Without You",
            "year": "2011",
            "summary": "On a one-day business trip to New York, a young German business executive (Ken Duken) falls in love with a singer-songwriter(Nicole Beharie) who exposes him to her Brooklyn world and emotions he's never experienced before.",
            "moviePoster": "/mylastdaywithoutyou/mylastdaywithoutyouposter.jpg",
            "locationInfo": {
                "address": "One Battery Park Plaza, State Street and Bridge Street",
                "coords": [
                    -74.014183,
                    40.70337
                ]
            },
            "images": [
                "/mylastdaywithoutyou/mylastdaywithoutyou09.jpg",
                "/mylastdaywithoutyou/mylastdaywithoutyou02.jpg",
                "/mylastdaywithoutyou/mylastdaywithoutyou01.jpg",
                "/mylastdaywithoutyou/mylastdaywithoutyou22.jpg"
            ],
            "neighborhood": "Manhattan, Financial District",
            "comment": "",
            "place_name": "One Battery Park Plaza, 24 Whitehall St, New York, New York 10004, United States",
            "Year": "2011",
            "Rated": "TV-MA",
            "Released": "04 Oct 2013",
            "Runtime": "90 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Stefan C. Schaefer",
            "Writer": "Stefan C. Schaefer, Chris Silber",
            "Actors": "Nicole Beharie, Reg E. Cathey, Marlene Forte, Robert Clohessy",
            "Plot": "On a one-day business trip to New York, a young German business executive falls in love with a singer-songwriter who exposes him to her Brooklyn world and emotions he's never experienced before.",
            "Language": "English",
            "Country": "USA",
            "Awards": "3 wins & 2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTc4ODM5MDM0Nl5BMl5BanBnXkFtZTgwMzg0NjkxMDE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.6/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "5.6",
            "imdbVotes": "1,185",
            "imdbID": "tt1679248",
            "Type": "movie",
            "DVD": "18 Nov 2014",
            "BoxOffice": "N/A",
            "Production": "Novus Content and Mission Pictures",
            "Website": "N/A"
        },
        {
            "title": "New York Minute",
            "year": "2004",
            "summary": "Over a 24 hour period, 17-year-old sisters Jane (Ashley Olsen) and Roxy (Mary-Kate Olsen) Ryan,adversaries who begrudgingly journey together from their Long Island home to New York, where overachiever Jane is due to delivera speech to qualify for a prestigious college scholarship abroad. Meanwhile, laid-back punk rock rebel Roxy hopes to get backstageat an underground music video shoot for punk pop band Simple Plan so that she can slip her demo tape to the group. However,Roxy and Jane's plans go awry when a mix-up involving Jane's day planner lands them in the middle of a shady black-market transaction.Pursued by an overzealous truant officer and accused of kidnapping a dog belonging to a senator, the Ryan's must find a way to worktogether to thwart the forces threatening to jeopardize Jane's college dreams and ship Roxy off to a convent school.",
            "moviePoster": "/newyorkminute/newyorkminuteposter.jpg",
            "locationInfo": {
                "address": "The Plaza Hotel, 750 5th Avenue and Central Park South",
                "coords": [
                    -73.974466,
                    40.764523499999996
                ]
            },
            "images": [
                "/newyorkminute/newyorkminute157.jpg",
                "/newyorkminute/newyorkminute156.jpg",
                "/newyorkminute/newyorkminute155.jpg",
                "/newyorkminute/newyorkminute206.jpg",
                "/newyorkminute/newyorkminute207.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "The Plaza Hotel, 768 5th Ave, New York, New York 10019, United States",
            "Year": "2004",
            "Rated": "PG",
            "Released": "07 May 2004",
            "Runtime": "91 min",
            "Genre": "Comedy, Crime, Family, Romance",
            "Director": "Dennie Gordon",
            "Writer": "Emily Fox (story), Emily Fox (screenplay), Adam Cooper (screenplay), Bill Collage (screenplay)",
            "Actors": "Ashley Olsen, Mary-Kate Olsen, Eugene Levy, Andy Richter",
            "Plot": "One day in New York City, Jane Ryan tries out for an overseas college program, her twin sister Roxy schemes to meet her favorite punk rockers, and a series of mishaps throws their day into ...",
            "Language": "English",
            "Country": "USA",
            "Awards": "6 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTI2Mjc0OTc0MV5BMl5BanBnXkFtZTcwMjM4MzUyMQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.0/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "11%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "33/100"
                }
            ],
            "Metascore": "33",
            "imdbRating": "5.0",
            "imdbVotes": "21,440",
            "imdbID": "tt0363282",
            "Type": "movie",
            "DVD": "17 Aug 2004",
            "BoxOffice": "$14,018,364",
            "Production": "Warner Bros.",
            "Website": "N/A"
        },
        {
            "title": "The Sorcerer's Apprentice",
            "year": "2010",
            "summary": "Balthazar Blake (Nicolas Cage) is a master sorcerer in modern-day Manhattan trying to defend the city from hisarch-nemesis, Maxim Horvath (Alfred Molina). Balthazar can't do it alone, so he recruits Dave Stutler (Jay Baruchel), a seemingly average guy who demonstrates hidden potential, as his reluctant protégé. The sorcerer gives his unwilling accomplice a crash course in the art and science of magic, and together, these unlikely partners work to stop the forces of darkness. It'll take all the courage Dave can muster to survive his training, save the city and get the girl as he becomes The Sorcerer's Apprentice.",
            "moviePoster": "/thesorcerersapprentice/thesorcerersapprenticeposter.jpg",
            "locationInfo": {
                "address": "Bowling Green Park, Broadway",
                "coords": [
                    -74.0137214,
                    40.7044449
                ]
            },
            "images": [
                "/thesorcerersapprentice/thesorcerersapprentice50.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice49.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice48.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice65.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice66.jpg"
            ],
            "neighborhood": "Manhattan, Financial District",
            "comment": "",
            "place_name": "Bowling Grn, New York, New York 10004, United States",
            "Year": "2010",
            "Rated": "PG",
            "Released": "14 Jul 2010",
            "Runtime": "109 min",
            "Genre": "Action, Adventure, Family, Fantasy",
            "Director": "Jon Turteltaub",
            "Writer": "Lawrence Konner (screen story), Mark Rosenthal (screen story), Matt Lopez (screen story), Matt Lopez (screenplay), Doug Miro (screenplay), Carlo Bernard (screenplay)",
            "Actors": "Nicolas Cage, Jay Baruchel, Alfred Molina, Teresa Palmer",
            "Plot": "Master sorcerer Balthazar Blake must find and train Merlin's descendant to defeat dark sorceress Morgana la Fée.",
            "Language": "English, Cantonese, Ukrainian",
            "Country": "USA",
            "Awards": "1 win & 1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2EwMzg3YWUtMTQyYS00ZDY3LTgzNTctOWI5NzY3MmZkOTk2XkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.1/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "40%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "46/100"
                }
            ],
            "Metascore": "46",
            "imdbRating": "6.1",
            "imdbVotes": "150,273",
            "imdbID": "tt0963966",
            "Type": "movie",
            "DVD": "30 Nov 2010",
            "BoxOffice": "$63,143,812",
            "Production": "Walt Disney Studios",
            "Website": "N/A"
        },
        {
            "title": "Eat Pray Love",
            "year": "2010",
            "summary": "Liz Gilbert (Julia Roberts) had everything a modern woman is supposed to dream of having -a husband, a house, a successful career - yet like so many others, she found herself lost, confused, and searching for what she really wanted in life.Newly divorced and at a crossroads, Gilbert steps out of her comfort zone, risking everything to change her life, embarking on a journey around the world thatbecomes a quest for self-discovery. In her travels, she discovers the true pleasure of nourishment by eating in Italy; the power of prayer in India, and,finally and unexpectedly, the inner peace and balance of true love in Bali.",
            "moviePoster": "/eatpraylove/eatprayloveposter.jpg",
            "locationInfo": {
                "address": "Robin Des Bois Cafe, 195 Smith Street and Warren Street",
                "coords": [
                    -73.607964,
                    40.744556
                ]
            },
            "images": [
                "/eatpraylove/eatpraylove10.jpg",
                "/eatpraylove/eatpraylove09.jpg",
                "/eatpraylove/eatpraylove08.jpg",
                "/eatpraylove/eatpraylove03.jpg",
                "/eatpraylove/eatpraylove11.jpg"
            ],
            "neighborhood": "Brooklyn, Downtown",
            "comment": "",
            "place_name": "Cafe Formaggio, 307 Old Country Rd, Carle Place, New York 11514, United States",
            "Year": "2010",
            "Rated": "PG-13",
            "Released": "13 Aug 2010",
            "Runtime": "133 min",
            "Genre": "Biography, Drama, Romance",
            "Director": "Ryan Murphy",
            "Writer": "Ryan Murphy (screenplay), Jennifer Salt (screenplay), Elizabeth Gilbert (book)",
            "Actors": "Julia Roberts, I. Gusti Ayu Puspawati, Hadi Subiyanto, Billy Crudup",
            "Plot": "A married woman realizes how unhappy her marriage really is, and that her life needs to go in a different direction. After a painful divorce, she takes off on a round-the-world journey to \"find herself\".",
            "Language": "English, Italian, Portuguese",
            "Country": "USA",
            "Awards": "2 wins & 2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTY5NDkyNzkyM15BMl5BanBnXkFtZTcwNDQyNDk0Mw@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.8/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "36%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "50/100"
                }
            ],
            "Metascore": "50",
            "imdbRating": "5.8",
            "imdbVotes": "85,864",
            "imdbID": "tt0879870",
            "Type": "movie",
            "DVD": "23 Nov 2010",
            "BoxOffice": "$80,574,010",
            "Production": "Sony Pictures",
            "Website": "N/A"
        },
        {
            "title": "Fading Gigolo",
            "year": "2013",
            "summary": "In Brooklyn, the bankrupted owner of a book store Fioravante (John Turturro) is forced to closehis family business. His best friend Murray (Woody Allen) tells him that his dermatologist Dr. Parker (Sharon Stone) dreams of having a threesome and would pay a thousanddollars to have one with her friend Selima (Sofía Vergara). Murray proposes to be Fioravante's pimp and they start a male prostitution business. When Fioravantemeets the Jewish Avigal, who is the widow of a rabbi, they fall in love with each other. But the Jewish Dovi loves Avigal (Vanessa Paradis) and will make life difficult for Murray.",
            "moviePoster": "/fadinggigolo/fadinggigoloposter.jpg",
            "locationInfo": {
                "address": "Grand Avenue and Clifton Place",
                "coords": [
                    -73.962694,
                    40.687819
                ]
            },
            "images": [
                "/fadinggigolo/fadinggigolo14.jpg",
                "/fadinggigolo/fadinggigolo13.jpg",
                "/fadinggigolo/fadinggigolo07.jpg",
                "/fadinggigolo/fadinggigolo10.jpg",
                "/fadinggigolo/fadinggigolo74.jpg",
                "/fadinggigolo/fadinggigolo73.jpg",
                "/fadinggigolo/fadinggigolo75.jpg"
            ],
            "neighborhood": "Brooklyn, Clinton Hill",
            "comment": "",
            "place_name": "Grand Avenue and Clifton Place, Brooklyn, New York 11216, United States",
            "Year": "2013",
            "Rated": "R",
            "Released": "09 Apr 2014",
            "Runtime": "90 min",
            "Genre": "Comedy, Romance",
            "Director": "John Turturro",
            "Writer": "John Turturro",
            "Actors": "John Turturro, Woody Allen, Vanessa Paradis, Liev Schreiber",
            "Plot": "Fioravante decides to become a professional Don Juan as a way of making money to help his cash-strapped friend, Murray. With Murray acting as his \"manager\", the duo quickly finds themselves caught up in the crosscurrents of love and money.",
            "Language": "English, French, Spanish, Ladino, Hebrew, Italian, Portuguese, Latin",
            "Country": "USA",
            "Awards": "2 wins & 1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTQzMjU3NjY0Nl5BMl5BanBnXkFtZTgwMTQ1NDM5MDE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.2/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "54%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "58/100"
                }
            ],
            "Metascore": "58",
            "imdbRating": "6.2",
            "imdbVotes": "23,359",
            "imdbID": "tt2258345",
            "Type": "movie",
            "DVD": "19 Aug 2014",
            "BoxOffice": "$3,179,352",
            "Production": "Millenium Entertainment",
            "Website": "N/A"
        },
        {
            "title": "Cruel Intentions 2",
            "year": "22000",
            "summary": "When the roguish Sebastian (Robin Dunne) reunites with his wicked stepsister Kathryn (Amy Adams) in their grand new townhome in New York, heplans to put his past behind him and become a one-woman man. Especially after meeting the stunningly innocent Danielle (Sarah Thompson), the daughter of Manchester Prep'sHeadmaster. But after being crossed by Sebastian, Kathryn plots to test the strength of the lovers' relationship by throwing a few curves - namely herself -at her step-brother. Can Sebastian resist Kathryn's ample charms and dedicate himself solely to educating the naïve Danielle in the ways of love? Everything is up forgrabs, and nothing is what it seems in this deliciously tantalizing tale of corruption, domination and seduction.",
            "moviePoster": "/cruelintentions2/cruelintentions2_poster.jpg",
            "locationInfo": {
                "address": "Times Square",
                "coords": [
                    -73.983761,
                    40.7624195
                ]
            },
            "images": [
                "/cruelintentions2/cruelintentions2_02.jpg",
                "/cruelintentions2/cruelintentions2_01.jpg",
                "/cruelintentions2/cruelintentions2_12.jpg",
                "/cruelintentions2/cruelintentions2_13.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "Times Square Church, 237 W 51st St, New York, New York 10019, United States",
            "Year": "2000",
            "Rated": "R",
            "Released": "13 Mar 2001",
            "Runtime": "87 min",
            "Genre": "Drama",
            "Director": "Roger Kumble",
            "Writer": "Roger Kumble",
            "Actors": "Robin Dunne, Sarah Thompson, Keri Lynn Pratt, Amy Adams",
            "Plot": "This takes place several years before Cruel Intentions (1999), back to when Kathryn first meets Sebastian, their sexual attraction to each other and their enjoyment in destroying the lives of their peers.",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTc2MjUyNDc4MF5BMl5BanBnXkFtZTYwOTA1ODQ5._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "4.4/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "17%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "4.4",
            "imdbVotes": "14,682",
            "imdbID": "tt0196267",
            "Type": "movie",
            "DVD": "13 Mar 2001",
            "BoxOffice": "N/A",
            "Production": "Sony Pictures Home Entertainment",
            "Website": "N/A"
        },
        {
            "title": "Woo",
            "year": "1998",
            "summary": "Darlene \"Woo\" Bates (Jada Pinkett Smith) has been dumped a little bit too many times,now this femme-fatale doesn't let just any man swing with her, and when she's set up on a blind-date, it could be love.. if they don't kill each other first.",
            "moviePoster": "/woo/wooposter.jpg",
            "locationInfo": {
                "address": "West 42nd Street and 6th Avenue",
                "coords": [
                    -73.984118,
                    40.754842
                ]
            },
            "images": [
                "/woo/woo01.jpg",
                "/woo/woo10.jpg"
            ],
            "neighborhood": "Manhattan, Garment District",
            "comment": "",
            "place_name": "West 42nd Street and 6th Avenue, New York, New York 10011, United States",
            "Year": "1998",
            "Rated": "R",
            "Released": "08 May 1998",
            "Runtime": "84 min",
            "Genre": "Comedy, Romance",
            "Director": "Daisy von Scherler Mayer",
            "Writer": "David C. Johnson",
            "Actors": "Jada Pinkett Smith, Tommy Davidson, Duane Martin, Michael Ralph",
            "Plot": "Gorgeous and extravert Woo meets insecure and straight-laced law clerk Tim at a blind date.",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZTIxMDQzNDktMWE5MS00ZjNkLTgxMWQtZTVlZWVkMjNkOGIwXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "4.0/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "10%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "4.0",
            "imdbVotes": "1,738",
            "imdbID": "tt0120531",
            "Type": "movie",
            "DVD": "13 Jan 2004",
            "BoxOffice": "N/A",
            "Production": "New Line Home Entertainment",
            "Website": "N/A"
        },
        {
            "title": "Sorry, Haters",
            "year": "2005",
            "summary": "Ashade is a Syrian chemist who drives a cab in New York City and looks after his French-speakingsister-in-law and her child while they seek the release of Ashade's brother, a Canadian citizen grabbed at JFK by US intelligence and rendered to Syria.One night, Ashade takes a fare to New Jersey and back, a high-strung woman who says her name is Philly (Robin Wright) and that she's a producer of reality TV including\"Sorry, Haters,\" an envy-stoking show about the wealth of the stars. Philly pushes into Ashade's life and promises help from a lawyer, but then simply takesAshade's savings. His discovering who she really is and his attempts to get his life back take the rest of the film.",
            "moviePoster": "/sorryhaters/sorryhatersposter.jpg",
            "locationInfo": {
                "address": "East 22nd Street and Park Avenue",
                "coords": [
                    -73.9867925,
                    40.7394943
                ]
            },
            "images": [
                "/sorryhaters/sorryhaters04.jpg",
                "/sorryhaters/sorryhaters02.jpg",
                "/sorryhaters/sorryhaters01.jpg",
                "/sorryhaters/sorryhaters13.jpg"
            ],
            "neighborhood": "Manhattan, Flatiron District",
            "comment": "",
            "place_name": "East 22nd Street and Park Avenue South, New York, New York 10016, United States",
            "Year": "2005",
            "Rated": "Not Rated",
            "Released": "01 Mar 2006",
            "Runtime": "83 min",
            "Genre": "Drama, Thriller",
            "Director": "Jeff Stanzler",
            "Writer": "Jeff Stanzler",
            "Actors": "Robin Wright, Abdellatif Kechiche, Élodie Bouchez, Aasif Mandvi",
            "Plot": "Against the anxieties and fears of post-9/11 America, an Arab cab driver picks up a troubled professional woman with unexpected results.",
            "Language": "English, Arabic, French",
            "Country": "USA",
            "Awards": "2 wins & 4 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTg3NTQ0NjAyMF5BMl5BanBnXkFtZTcwMDUwNzMzMQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.3/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "37%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "43/100"
                }
            ],
            "Metascore": "43",
            "imdbRating": "6.3",
            "imdbVotes": "1,373",
            "imdbID": "tt0425600",
            "Type": "movie",
            "DVD": "08 Aug 2006",
            "BoxOffice": "N/A",
            "Production": "IFC Films",
            "Website": "N/A"
        },
        {
            "title": "August",
            "year": "2008",
            "summary": "Tom (Josh Hartnett) and Josh Sterling (Adam Scott) have a start-up dot-com. It's gone public to initial success. Josh is the technical genius. Tom is the fast-talking and abrasive CEO, in charge of the business side. It's August, 2001, less than a month before they can sell their shares and, perhaps, make lots of money. But the company is running out of cash, its main client is stalling, and share values are falling. For Tom to maintain the firm's appearance, he must find cash: investors could rescue him, but at a high cost of his potential wealth and company control. Tom goes to his brother for a loan. At the same time, an old flame, Sarrah, comes back to the city. Can Tom hold things together, bravura and all?",
            "moviePoster": "/august/augustposter.jpg",
            "locationInfo": {
                "address": "Office, 180 Maiden Lane and Front Street",
                "coords": [
                    -74.001789,
                    40.715083
                ]
            },
            "images": [
                "/august/august07.jpg",
                "/august/august06.jpg",
                "/august/august05.jpg",
                "/august/august28.jpg",
                "/august/august21.jpg"
            ],
            "neighborhood": "Manhattan, Lower East Side",
            "comment": "",
            "place_name": "Office of the City Clerk - Marriage Bureau, 141 Worth St, New York, New York 10013, United States",
            "Year": "2008",
            "Rated": "R",
            "Released": "08 Oct 2009",
            "Runtime": "88 min",
            "Genre": "Drama",
            "Director": "Austin Chick",
            "Writer": "Howard A. Rodman",
            "Actors": "Josh Hartnett, Naomie Harris, Adam Scott, Robin Tunney",
            "Plot": "August centers on two brothers fighting to keep their start-up company afloat on Wall Street during August 2001, a month before the 9/11 terrorist attacks.",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDBjZTIzZmYtZjIzZC00ZTg3LTkyM2YtOTFiNTE4NmQxMTZlXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.3/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "36%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "39/100"
                }
            ],
            "Metascore": "39",
            "imdbRating": "5.3",
            "imdbVotes": "4,008",
            "imdbID": "tt0470679",
            "Type": "movie",
            "DVD": "26 Aug 2008",
            "BoxOffice": "N/A",
            "Production": "Original Media",
            "Website": "N/A"
        },
        {
            "title": "Gloria",
            "year": "1999",
            "summary": "Gloria (Sharon Stone) has just gotten out of prison, where she has served three years to save her boyfriend,Kevin (Jeremy Northam). During her stay in prison, she thinks about how Kevin never once visited her. She goes to Kevin and tells him that the relationship is over andthat all she wants is the money he promised her for taking the rap for him. He refuses to give it to her. Meanwhile, the gang's accountant has tried to give himself someprotection by creating a computer disk which has the names of all those involved in the outfit's criminal activities. The plan backfires, and, in trying to get the disk,one of Kevin's trigger happy henchmen kills the accountant, as well as his wife, mother and daughter. Only his seven-year old son Nicky (Jean-Luke Figueroa) escapes, butis quickly caught and brought to Kevin's apartment. It is there that Gloria and Nicky's paths cross. Gloria must decide whether or not to risk her life in order to save the boy.",
            "moviePoster": "/gloria/gloriaposter.jpg",
            "locationInfo": {
                "address": "West 158th Street and Broadway",
                "coords": [
                    -73.9445661,
                    40.834739
                ]
            },
            "images": [
                "/gloria/gloria13.jpg",
                "/gloria/gloria14.jpg",
                "/gloria/gloria34.jpg",
                "/gloria/gloria33.jpg"
            ],
            "neighborhood": "Manhattan, Washington Heights",
            "comment": "",
            "place_name": "West 158th Street and E Broadway, New York, New York 10025, United States",
            "Year": "1980",
            "Rated": "PG",
            "Released": "01 Oct 1980",
            "Runtime": "123 min",
            "Genre": "Crime, Drama, Thriller",
            "Director": "John Cassavetes",
            "Writer": "John Cassavetes",
            "Actors": "Julie Carmen, Tony Knesich, Gregory Cleghorne, Buck Henry",
            "Plot": "When a young boy's family is killed by the mob, their tough neighbor Gloria becomes his reluctant guardian. In possession of a book that the gangsters want, the pair go on the run in New York.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Nominated for 1 Oscar. Another 4 wins & 3 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODRiMDViZTUtODQ3MC00NTE4LWI3MmItYjJhMzE3NjE0NThjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.2/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "93%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "68/100"
                }
            ],
            "Metascore": "68",
            "imdbRating": "7.2",
            "imdbVotes": "8,118",
            "imdbID": "tt0080798",
            "Type": "movie",
            "DVD": "25 Feb 2003",
            "BoxOffice": "N/A",
            "Production": "Columbia Pictures Corporation",
            "Website": "N/A"
        },
        {
            "title": "Then She Found Me",
            "year": "2007",
            "summary": "Deeply religious April Epner (Helen Hunt), a 39-year-old Brooklyn elementary school teacher, finds her life derailed by a series of events over which she has no control. Her husband Ben abruptly leaves her, her abrasive adoptive mother Trudy passes away the following day, and shortly after she is contacted by Alan, a representative of Bernice Graves, the flamboyant host of a local talk show, who introduces herself as her biological mother.\nAlthough intrigued by Bernice's claim she was fathered by Steve McQueen, April initially resists her efforts to forge a relationship. At the same time, she finds herself attracted to Frank, the divorced father of one of her students, as the two get to know each other via lengthy telephone conversations. For their first date he escorts her to a party at Bernice's apartment.\nComplications arise when April discovers she is pregnant, the result of a quick and clumsy coupling with Ben on the kitchen floor just before he left her. April has longed to have a child all her life and is delighted with the news, but is confused and upset by Ben's sudden return, Frank's hasty departure, and Bernice's insistent attempts to create a bond btw them. Not helping the situation is the discovery Bernice voluntarily put her up for adoption a full year after her birth and not three days later at the urging of her parents, according to the scenario she initially presented. When April miscarries, her brother Freddy tries to counsel her, but ultimately she must rely on her deep-rooted faith to deal with the betrayals she has suffered not only at the hands of those she trusted but by the God she worships as well.",
            "moviePoster": "/thenshefoundme/thenshefoundmeposter.jpg",
            "locationInfo": {
                "address": "East 78th Street",
                "coords": [
                    -73.9157014,
                    40.635625
                ]
            },
            "images": [
                "/thenshefoundme/thenshefoundme08.jpg",
                "/thenshefoundme/thenshefoundme07.jpg",
                "/thenshefoundme/thenshefoundme06.jpg",
                "/thenshefoundme/thenshefoundme01.jpg"
            ],
            "neighborhood": "Manhattan, Canarsie",
            "comment": "",
            "place_name": "East 78th Street, Brooklyn, New York 11236, United States",
            "Year": "2007",
            "Rated": "R",
            "Released": "09 May 2008",
            "Runtime": "100 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Helen Hunt",
            "Writer": "Alice Arlen (screenplay), Victor Levin (screenplay), Helen Hunt (screenplay), Elinor Lipman (novel)",
            "Actors": "Helen Hunt, Bette Midler, Colin Firth, Matthew Broderick",
            "Plot": "39-year-old April Epner's childish husband and school teacher colleague Benjamin/Ben leaves her, but with her biological clock ticking ever more loudly. Her dying bossy adoptive mother is ...",
            "Language": "English, Hebrew",
            "Country": "USA, UK",
            "Awards": "3 wins & 1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4ODYxNTYzOF5BMl5BanBnXkFtZTcwNjMwODg2MQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.0/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "50%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "56/100"
                }
            ],
            "Metascore": "56",
            "imdbRating": "6.0",
            "imdbVotes": "9,520",
            "imdbID": "tt0455805",
            "Type": "movie",
            "DVD": "02 Sep 2008",
            "BoxOffice": "$3,728,972",
            "Production": "ThinkFilm",
            "Website": "N/A"
        },
        {
            "title": "Anger Management",
            "year": "2003",
            "summary": "Mild-mannered timid businessman Dave Buznik (Adam Sandler) who works for a pet clothing companyout of New York City. He's got an abrasive boss named Mr. Frank Head who frequently takes credit for his work and steps on him in return. He's got a loving girlfriend,Linda (Marisa Tomei), whose best friend is her condescending college ex, Andrew. But when a misunderstanding aboard an airplane goes haywire, Dave is ordered by thecourt to undergo anger management therapy at the hands of specialist Dr. Buddy Rydell (Jack Nicholson), who is an unpredictable, psychopathic character. As therelationship between Dave and Buddy becomes more tense, when the unorthodox treatment wreaks havoc Dave's life, and Buddy might be the only one who can save himfrom a problem he recognizes right away in his patient, that could only get worse.",
            "moviePoster": "/angermanagement/angermanagementposter.jpg",
            "locationInfo": {
                "address": "St Bartholomew's Church, 325 Park Avenue and East 50th Street",
                "coords": [
                    -73.973648,
                    40.757607
                ]
            },
            "images": [
                "/angermanagement/angermanagement07.jpg",
                "/angermanagement/angermanagement08.jpg",
                "/angermanagement/angermanagement04.jpg",
                "/angermanagement/angermanagement02.jpg",
                "/angermanagement/angermanagement01.jpg",
                "/angermanagement/angermanagement52.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "St. Bartholomew's Church, 325 Park Ave, New York, New York 10022, United States",
            "Year": "2003",
            "Rated": "PG-13",
            "Released": "11 Apr 2003",
            "Runtime": "106 min",
            "Genre": "Comedy",
            "Director": "Peter Segal",
            "Writer": "David Dorfman",
            "Actors": "Adam Sandler, Jack Nicholson, Marisa Tomei, Luis Guzmán",
            "Plot": "Dave Buznik is a businessman who is wrongly sentenced to an anger management program, where he meets an aggressive instructor.",
            "Language": "English",
            "Country": "USA",
            "Awards": "2 wins & 5 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDg1YTNiODItZGYyOC00NGIwLWI3MjYtMTY3NDQ0ZDIwYjBiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.3/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "42%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "52/100"
                }
            ],
            "Metascore": "52",
            "imdbRating": "6.3",
            "imdbVotes": "200,204",
            "imdbID": "tt0305224",
            "Type": "movie",
            "DVD": "16 Sep 2003",
            "BoxOffice": "$133,756,285",
            "Production": "Sony Pictures Entertainment",
            "Website": "N/A"
        },
        {
            "title": "The Object of My Affection",
            "year": "1998",
            "summary": "George (Paul Rudd) and Nina (Jennifer Aniston) seem like the perfect couple. They share a cozy Brooklyn apartment, ataste for tuna casserole dinners, and a devotion to ballroom dancing. They love each other. There's only one hitch: George is gay. And when Nina announces she's pregnant, thingsget especially complicated. Vince - Nina's overbearing boyfriend and the baby's father-wants marriage. Nina wants independence. George will do anything for a little unqualifiedaffection, but is he ready to become an unwed surrogate dad?",
            "moviePoster": "/theobjectofmyaffection/theobjectofmyaffectionposter.jpg",
            "locationInfo": {
                "address": "Central Park Zoo, Central Park",
                "coords": [
                    -73.971747,
                    40.7677165
                ]
            },
            "images": [
                "/theobjectofmyaffection/theobjectofmyaffection26.jpg",
                "/theobjectofmyaffection/theobjectofmyaffection25.jpg",
                "/theobjectofmyaffection/theobjectofmyaffection23.jpg",
                "/theobjectofmyaffection/theobjectofmyaffection35.jpg"
            ],
            "neighborhood": "Manhattan, Central Park",
            "comment": "",
            "place_name": "Central Park Zoo, Central Park, New York, New York 10024, United States",
            "Year": "1998",
            "Rated": "R",
            "Released": "17 Apr 1998",
            "Runtime": "111 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Nicholas Hytner",
            "Writer": "Stephen McCauley (novel), Wendy Wasserstein (screenplay)",
            "Actors": "Paul Rudd, Kali Rocha, Jennifer Aniston, Lena Cardwell",
            "Plot": "A pregnant New York City social worker begins to develop romantic feelings for her gay best friend, and decides she'd rather raise her child with him, much to the dismay of her overbearing boyfriend.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win & 1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYmNjODYxOTMtNTBhMS00MmVhLWFiODUtYzYxMDA1MzNmZTEyXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.0/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "53%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "51/100"
                }
            ],
            "Metascore": "51",
            "imdbRating": "6.0",
            "imdbVotes": "18,393",
            "imdbID": "tt0120772",
            "Type": "movie",
            "DVD": "08 Jan 2002",
            "BoxOffice": "N/A",
            "Production": "Twentieth Century Fox Home Entertainment",
            "Website": "N/A"
        },
        {
            "title": "Léon, The Professional",
            "year": "1994",
            "summary": "Mathilda (Natalie Portman), a twelve-year old New York girl, is living an undesirable life among her half-family.Her father stores drugs for two-faced cop Norman Stansfield (Gary Oldman). Only her little brother keeps Mathilda from breaking apart. One day, Stansfield and his team takecruel revenge on her father for stretching the drugs a little, thus killing the whole family. Only Mathilda, who was out shopping, survives by finding shelterin Léon's apartment in the moment of highest need. Soon, she finds out about the strange neighbour's unusual profession - killing - and desperately seeks hishelp in taking revenge for her little brother. Léon (Jean Reno), who is completely unexperienced in fatherly tasks, and in friendships, does his best to keep Mathilda outof trouble - unsuccessfully. Now, the conflict btw a killer, who slowly discovers his abilities to live, to feel, to love and a corrupt police officer,who does anything in his might to get rid of an eye witness, arises to unmeasurable proportions - all for the sake of a little twelve-year old girl, who has nearly nothing to lose.",
            "moviePoster": "/leon/leonposter.jpg",
            "locationInfo": {
                "address": "3812 Broadway and West 159th Street",
                "coords": [
                    -73.919432,
                    40.759038
                ]
            },
            "images": [
                "/leon/leon79.jpg",
                "/leon/leon78.jpg",
                "/leon/leon77.jpg",
                "/leon/leon85.jpg",
                "/leon/leon97.jpg"
            ],
            "neighborhood": "Harlem, Astoria",
            "comment": "",
            "place_name": "38-12 Broadway, Queens, New York 11103, United States"
        },
        {
            "title": "Ghostbusters 2",
            "year": "21989",
            "summary": "Sidelined for five years since their spectacular save (an near destruction) of New York City,the superstars of the supernatural spring back into action when the infant son of single-mother Dana Barrett becomes the target of a powerful demonic force.Reunited with the no-nonsense Zeddemore, nerdy near-sighted Louis and their ever-industrious secretary Janine, the heroes of the hereafter must put a stop toan enormous underground river of slime ready to rot the roots of the entire Big Apple. Now, if your hometown was on the verge of being sucked down into the 10thlevel of Hell, who else would you call?",
            "moviePoster": "/ghostbusters2/Ghostbusters2poster.jpg",
            "locationInfo": {
                "address": "East 77th Street",
                "coords": [
                    -73.914944,
                    40.6339851
                ]
            },
            "images": [
                "/ghostbusters2/ghostbusters2_114.jpg",
                "/ghostbusters2/ghostbusters2_113.jpg",
                "/ghostbusters2/ghostbusters2_112.jpg",
                "/ghostbusters2/ghostbusters2_110.jpg",
                "/ghostbusters2/ghostbusters2_109.jpg",
                "/ghostbusters2/ghostbusters2_108.jpg",
                "/ghostbusters2/ghostbusters2_107.jpg",
                "/ghostbusters2/ghostbusters2_235.jpg",
                "/ghostbusters2/ghostbusters2_236.jpg"
            ],
            "neighborhood": "Manhattan, Canarsie",
            "comment": "",
            "place_name": "East 77th Street, Brooklyn, New York 11236, United States"
        },
        {
            "title": "Confessions of a Shopaholic",
            "year": "2009",
            "summary": "Struggling with her debilitating obsession with shopping and the sudden collapse of her income source, Rebecca Bloomwood (Isla Fisher)unintentionally lands a job writing for a financial magazine after a drunken letter-mailing mix-up. Ironicallywriting about the very consumer caution of which she herself has not abided, Rebecca's innovative comparisons and unconventional metaphors for economics grants her criticalacclaim, public success, and the admiration of her supportive boss Luke. But as she draws closer to her ultimate goal of writing for renowned fashion magazine Alette, shequestions her true ambitions and must determine if overcoming her \"shopaholic\" condition will bring her real happiness.",
            "moviePoster": "/confessionsofashopaholic/confessionsofashopaholicposter2.jpg",
            "locationInfo": {
                "address": "Kleinfeld Store, 110 West 20th Street",
                "coords": [
                    -73.992304,
                    40.74287
                ]
            },
            "images": [
                "/confessionsofashopaholic/confessionsofashopaholic48.jpg",
                "/confessionsofashopaholic/confessionsofashopaholic47.jpg",
                "/confessionsofashopaholic/confessionsofashopaholic46.jpg",
                "/confessionsofashopaholic/confessionsofashopaholic103.jpg",
                "/confessionsofashopaholic/confessionsofashopaholic98.jpg"
            ],
            "neighborhood": "Manhattan., Flatiron District",
            "comment": "",
            "place_name": "The Storehouse, 69 W 23rd St, New York, New York 10010, United States",
            "Year": "2009",
            "Rated": "PG",
            "Released": "13 Feb 2009",
            "Runtime": "104 min",
            "Genre": "Comedy, Romance",
            "Director": "P.J. Hogan",
            "Writer": "Tracey Jackson (screenplay), Tim Firth (screenplay), Kayla Alpert (screenplay), Sophie Kinsella (books)",
            "Actors": "Isla Fisher, Hugh Dancy, Krysten Ritter, Joan Cusack",
            "Plot": "A college grad lands a job as a financial journalist in New York City to support where she nurtures her shopping addiction and falls for a wealthy entrepreneur.",
            "Language": "English, Finnish, Spanish, French",
            "Country": "USA",
            "Awards": "1 win & 3 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ1MzcyMTkwOF5BMl5BanBnXkFtZTcwMDM3MTc5MQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.9/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "25%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "38/100"
                }
            ],
            "Metascore": "38",
            "imdbRating": "5.9",
            "imdbVotes": "73,572",
            "imdbID": "tt1093908",
            "Type": "movie",
            "DVD": "23 Jun 2009",
            "BoxOffice": "$44,239,688",
            "Production": "Walt Disney Studios",
            "Website": "N/A"
        },
        {
            "title": "New Jack City",
            "year": "1991",
            "summary": "The gangster Nino (Wesley Snipes) has a gang who call themselves Cash Money Brothers.They get into the crack business and not before long they make a million dollars every week. A cop, Scotty (Ice-T), is after them. He tries to get intothe gang by letting an ex-drug addict infiltrate the gang, but the attempt fails miserably. The only thing that remains is that Scotty himselfbecomes a drug pusher.",
            "moviePoster": "/newjackcity/newjackcityposter.jpg",
            "locationInfo": {
                "address": "Grant's Tomb, West 122th Street & Riverside Drive",
                "coords": [
                    -73.963239,
                    40.813186
                ]
            },
            "images": [
                "/newjackcity/newjackcity08.jpg",
                "/newjackcity/newjackcity07.jpg",
                "/newjackcity/newjackcity06.jpg",
                "/newjackcity/newjackcity05.jpg",
                "/newjackcity/newjackcity09.jpg",
                "/newjackcity/newjackcity10.jpg"
            ],
            "neighborhood": "Manhattan, Morningside Heights",
            "comment": "",
            "place_name": "Grant's Tomb Visitor Center, New York, New York 10024, United States",
            "Year": "1991",
            "Rated": "R",
            "Released": "08 Mar 1991",
            "Runtime": "97 min",
            "Genre": "Action, Crime, Drama, Thriller",
            "Director": "Mario Van Peebles",
            "Writer": "Thomas Lee Wright (story), Thomas Lee Wright (screenplay), Barry Michael Cooper (screenplay)",
            "Actors": "Wesley Snipes, Ice-T, Allen Payne, Chris Rock",
            "Plot": "A crime lord ascends to power and becomes megalomaniacal while a maverick police detective vows to stop him.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win & 5 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOGZlYzg3NjEtMmFhOS00NTA3LWJlOTktMjFhOWNkMjc0YjBkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.7/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "77%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "61/100"
                }
            ],
            "Metascore": "61",
            "imdbRating": "6.7",
            "imdbVotes": "30,804",
            "imdbID": "tt0102526",
            "Type": "movie",
            "DVD": "25 Aug 1998",
            "BoxOffice": "N/A",
            "Production": "Warner Bros. Pictures",
            "Website": "N/A"
        },
        {
            "title": "One Fine Day",
            "year": "1996",
            "summary": "Melanie Parker (Michelle Pfeiffer), an architect and mother of Sammy, and Jack Taylor (George Clooney), anewspaper columnist and father of Maggie, are both divorced. They meet one morning when overwhelmed Jack is left unexpectedly with Maggie and forgets that Melanie wasto take her to school. As a result, both children miss their school field trip and are stuck with the parents. The two adults project their negative stereotypes ofex-spouses on each other, but end up needing to rely on each other to watch the children as each must save his job. Humor is added by Sammy's propensity for lodgingobjects in his nose and Maggie's tendency to wander.",
            "moviePoster": "/onefineday/onefinedayposter.jpg",
            "locationInfo": {
                "address": "Carnegie Deli, 854 7th Avenue and West 55th Street",
                "coords": [
                    -74.057256,
                    40.825332
                ]
            },
            "images": [
                "/onefineday/onefineday288.jpg",
                "/onefineday/onefineday289.jpg",
                "/onefineday/onefineday286.jpg",
                "/onefineday/onefineday206.jpg",
                "/onefineday/onefineday225.jpg",
                "/onefineday/onefineday312.jpg"
            ],
            "neighborhood": "Manhattan, Carlstadt",
            "comment": "",
            "place_name": "Carnegie Deli, 605 Washington Ave, Carlstadt, New Jersey 07072, United States",
            "Year": "1996",
            "Rated": "PG",
            "Released": "20 Dec 1996",
            "Runtime": "108 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Michael Hoffman",
            "Writer": "Terrel Seltzer, Ellen Simon",
            "Actors": "Michelle Pfeiffer, George Clooney, Mae Whitman, Alex D. Linz",
            "Plot": "The lives of two strangers and their young children unexpectedly intersect on one hectic, stressful day in New York City.",
            "Language": "English, Spanish",
            "Country": "USA",
            "Awards": "Nominated for 1 Oscar. Another 4 wins & 5 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDdhMjgxODQtZjNhNS00YjZiLWFmYTAtODZmM2RhM2M3YmIwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.5/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "50%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.5",
            "imdbVotes": "42,560",
            "imdbID": "tt0117247",
            "Type": "movie",
            "DVD": "08 Jan 2002",
            "BoxOffice": "N/A",
            "Production": "Twentieth Century Fox Home Entertainment",
            "Website": "N/A"
        },
        {
            "title": "Begin Again",
            "year": "2013",
            "summary": "Gretta (Keira Knightley) and her long-time boyfriend Dave (Adam Levine) are college sweethearts and songwriting partnerswho decamp for New York when he lands a deal with a major label. But the trappings of his new-found fame soon tempt Dave to stray, and a reeling, lovelorn Gretta is left on herown. Her world takes a turn for the better when Dan (Mark Ruffalo), a disgraced record-label exec, stumbles upon her performing on an East Village stage and is immediatelycaptivated by her raw talent. From this chance encounter emerges an enchanting portrait of a mutually transformative collaboration, set to the soundtrack of a summer in New York City.",
            "moviePoster": "/beginagain/beginagainposter.jpg",
            "locationInfo": {
                "address": "Avenue B and East 6th Street",
                "coords": [
                    -73.981637,
                    40.724494
                ]
            },
            "images": [
                "/beginagain/beginagain13.jpg",
                "/beginagain/beginagain12.jpg",
                "/beginagain/beginagain81.jpg",
                "/beginagain/beginagain82.jpg"
            ],
            "neighborhood": "Manhattan, East Village",
            "comment": "",
            "place_name": "Avenue B and East 6th Street, New York, New York 10009, United States",
            "Year": "2013",
            "Rated": "R",
            "Released": "11 Jul 2014",
            "Runtime": "104 min",
            "Genre": "Comedy, Drama, Music, Romance",
            "Director": "John Carney",
            "Writer": "John Carney",
            "Actors": "James Corden, Keira Knightley, Mark Ruffalo, Hailee Steinfeld",
            "Plot": "A chance encounter between a down-and-out music-business executive and a young singer-songwriter, new to Manhattan, turns into a promising collaboration between the two talents.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Nominated for 1 Oscar. Another 5 wins & 17 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjAxMTI4MTgzMV5BMl5BanBnXkFtZTgwOTAwODEwMjE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.4/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "83%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "62/100"
                }
            ],
            "Metascore": "62",
            "imdbRating": "7.4",
            "imdbVotes": "139,291",
            "imdbID": "tt1980929",
            "Type": "movie",
            "DVD": "28 Oct 2014",
            "BoxOffice": "$12,078,174",
            "Production": "The Weinstein Company",
            "Website": "N/A"
        },
        {
            "title": "Here and Now",
            "year": "2018",
            "summary": "Vivienne (Sarah Jessica Parker), is an established singer/songwriter with a successful music career. On the eve of a major performance, Vivienne receives some life-altering news that causes her to reevaluate her priorities. As she crisscrosses the busy streets of New York City, she tries to balance her upcoming music tour, family, and friends. With the support of her overbearing mother, Jeanne (Jacqueline Bisset), her long-time manager, Ben, and her ex-husband, Nick (Simon Baker), Vivienne strives to make peace with the decisions and sacrifices she's made along the way.",
            "moviePoster": "/hereandnow/hereandnowposter.jpg",
            "locationInfo": {
                "address": "Riverside Drive and West 157th Street",
                "coords": [
                    -73.9469169,
                    40.8349476
                ]
            },
            "images": [
                "/hereandnow/hereandnow69.jpg",
                "/hereandnow/hereandnow68.jpg",
                "/hereandnow/hereandnow66.jpg",
                "/hereandnow/hereandnow64.jpg",
                "/hereandnow/hereandnow108.jpg",
                "/hereandnow/hereandnow109.jpg",
                "/hereandnow/hereandnow110.jpg"
            ],
            "neighborhood": "Washington Heights, Washington Heights",
            "comment": "",
            "place_name": "Riverside Drive and West 157th Street, New York, New York 10032, United States",
            "Year": "2018",
            "Rated": "TV-MA",
            "Released": "11 Feb 2018",
            "Runtime": "60 min",
            "Genre": "Comedy, Drama, Fantasy",
            "Director": "N/A",
            "Writer": "Alan Ball",
            "Actors": "Tim Robbins, Holly Hunter, Daniel Zovatto, Jerrika Hinton",
            "Plot": "A dark dramedy about a progressive Portlandian family made up of husband, wife, three adopted children from Liberia, Vietnam and Colombia and one biological daughter who find their sanity tested and values challenged in 2018 America.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTk2NDIwOTg4M15BMl5BanBnXkFtZTgwOTAxMzc1NDM@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.8/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.8",
            "imdbVotes": "4,310",
            "imdbID": "tt5923012",
            "Type": "series",
            "totalSeasons": "1"
        },
        {
            "title": "Wall Street: Money Never Sleeps",
            "year": "2010",
            "summary": "In 2001, corporate raider Gordon Gecko (Michael Douglas) completes a prisonsentence for money laundering. No one is there to meet him. Jump seven years: Gecko is promoting his book, his estranged daughter Winnie is apolitical muckraker engaged to Jake Moore (Shia LaBeouf), a hot-shot Wall Street trader, and an old nemesis of Gecko's, Bretton James, devours the firm Jakeworks for. When Jake's mentor takes his life, Jake wants revenge and Gordon may be the perfect ally. With the fiscal crisis of September 2008as background, can Jake maintain Winnie's love, broker a rapprochement with her father, get his revenge, and find funds for a green-energyproject he champions; or will greed trump all?",
            "moviePoster": "/wallstreet2/wallstreet2poster.jpg",
            "locationInfo": {
                "address": "Winnie Gekko's Apartment, 41 Charlton Street and 6th Avenue",
                "coords": [
                    -73.783095,
                    40.649816
                ]
            },
            "images": [
                "/wallstreet2/wallstreet2_35.jpg",
                "/wallstreet2/wallstreet2_34.jpg",
                "/wallstreet2/wallstreet2_33.jpg",
                "/wallstreet2/wallstreet2_32.jpg",
                "/wallstreet2/wallstreet2_37.jpg",
                "/wallstreet2/wallstreet2_52.jpg"
            ],
            "neighborhood": "Manhattan, John F. Kennedy International Airport",
            "comment": "",
            "place_name": "Apartment 7B Deli & Market, JFK Terminal 7, New York, New York 11430, United States",
            "Year": "2010",
            "Rated": "PG-13",
            "Released": "24 Sep 2010",
            "Runtime": "133 min",
            "Genre": "Drama",
            "Director": "Oliver Stone",
            "Writer": "Allan Loeb, Stephen Schiff, Stanley Weiser (characters), Oliver Stone (characters)",
            "Actors": "Richard Stratton, Harry Kerrigan, Michael Douglas, Carey Mulligan",
            "Plot": "Now out of prison but still disgraced by his peers, Gordon Gekko works his future son-in-law, an idealistic stock broker, when he sees an opportunity to take down a Wall Street enemy and rebuild his empire.",
            "Language": "English",
            "Country": "USA",
            "Awards": "Nominated for 1 Golden Globe. Another 1 win & 3 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU5MDEzMzYwMF5BMl5BanBnXkFtZTcwNTcwMjUxMw@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.2/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "55%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "59/100"
                }
            ],
            "Metascore": "59",
            "imdbRating": "6.2",
            "imdbVotes": "96,683",
            "imdbID": "tt1027718",
            "Type": "movie",
            "DVD": "21 Dec 2010",
            "BoxOffice": "$52,474,616",
            "Production": "20th Century Fox",
            "Website": "N/A"
        },
        {
            "title": "Two Weeks Notice",
            "year": "2002",
            "summary": "Lucy Kelson (Sandra Bullock) is a Chief Counsel for the Wade Corporation, one of New York City's top commercial real estate developers.She's a brilliant lawyer with a sharp, strategic mind. She also has an ulcer and doesn't get much sleep. It's not the job that's getting to her. It's her millionaire boss,George Wade (Hugh Grant). Handsome, charming and undeniably self-absorbed, he treats her more like a nanny than a Harvard Law grad and can barely choose a tie without her help.Now, after one year of calling the shots-on everything from his clothes to his divorce settlements - Lucy Kelson is calling it quits.",
            "moviePoster": "/twoweeksnotice/twoweeksnoticeposter.jpg",
            "locationInfo": {
                "address": "Lucy's Office, 55 Water Street",
                "coords": [
                    -74.001789,
                    40.715083
                ]
            },
            "images": [
                "/twoweeksnotice/twoweeksnotice167.jpg",
                "/twoweeksnotice/twoweeksnotice166.jpg",
                "/twoweeksnotice/twoweeksnotice165.jpg",
                "/twoweeksnotice/2weeksnotice33.jpg",
                "/twoweeksnotice/twoweeksnotice220.jpg"
            ],
            "neighborhood": "Manhattan, Lower East Side",
            "comment": "",
            "place_name": "Office of the City Clerk - Marriage Bureau, 141 Worth St, New York, New York 10013, United States",
            "Year": "2002",
            "Rated": "PG-13",
            "Released": "20 Dec 2002",
            "Runtime": "101 min",
            "Genre": "Comedy, Romance",
            "Director": "Marc Lawrence",
            "Writer": "Marc Lawrence",
            "Actors": "Sandra Bullock, Hugh Grant, Alicia Witt, Dana Ivey",
            "Plot": "A lawyer decides that she's used too much like a nanny by her boss, so she walks out on him.",
            "Language": "English",
            "Country": "USA, Australia",
            "Awards": "2 wins & 3 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTg4N2M2ODItZjVjMy00YTljLTllNjUtYzY4ZTE2MTI2M2RhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.1/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "42%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "42/100"
                }
            ],
            "Metascore": "42",
            "imdbRating": "6.1",
            "imdbVotes": "104,361",
            "imdbID": "tt0313737",
            "Type": "movie",
            "DVD": "29 Apr 2003",
            "BoxOffice": "$93,300,000",
            "Production": "Warner Bros.",
            "Website": "N/A"
        },
        {
            "title": "Doppelganger",
            "year": "1993",
            "summary": "Holly Gooding (Drew Barrymore) moves from NYC to LA after a murder, in which she is implicated. She is followed by what is apparently her evil alter- ego. She moves into a room for rent by a writer, and he begins having an affair with her, but after some strange things happen, he's not so sure if the affair is with her or her doppelganger.",
            "moviePoster": "/doppelganger/doppelgangerposter.jpg",
            "locationInfo": {
                "address": "5th Avenue and West 59th Street",
                "coords": [
                    -73.9736247,
                    40.7645771
                ]
            },
            "images": [
                "/doppelganger/doppelganger05.jpg",
                "/doppelganger/doppelganger04.jpg",
                "/doppelganger/doppelganger03.jpg",
                "/doppelganger/doppelganger02.jpg",
                "/doppelganger/doppelganger01.jpg",
                "/doppelganger/doppelganger17.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "5th Avenue and West 59th Street, New York, New York 10019, United States",
            "Year": "1993",
            "Rated": "R",
            "Released": "23 Oct 1993",
            "Runtime": "104 min",
            "Genre": "Horror, Romance, Thriller",
            "Director": "Avi Nesher",
            "Writer": "Avi Nesher",
            "Actors": "Drew Barrymore, George Newbern, Dennis Christopher, Leslie Hope",
            "Plot": "A writer with a room for rent acquires a strange new roommate with a psychotic alter-ego that follows her wherever she goes.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "1 nomination.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDIwZjU3YTUtMTUyMC00ZWYyLWE1MzItZDAwNDE2NDFjMmMyXkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "4.3/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "4.3",
            "imdbVotes": "3,233",
            "imdbID": "tt0106753",
            "Type": "movie",
            "DVD": "17 Dec 2002",
            "BoxOffice": "N/A",
            "Production": "Twentieth Century Fox Home Entertainment",
            "Website": "N/A"
        },
        {
            "title": "Teenage Mutant Ninja Turtles",
            "year": "2014",
            "summary": "Darkness has settled over New York City as Shredder and his evil Foot Clan have an iron grip on everything from the police to the politicians. The future is grim until four unlikely outcast brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must work with fearless reporter April O'Neil (Megan Fox) and her cameraman Vern Fenwick to save the city and unravel Shredder's diabolical plan.",
            "moviePoster": "/tmnt/tmntposter.jpg",
            "locationInfo": {
                "address": "5th Avenue",
                "coords": [
                    -73.9751235,
                    40.761975
                ]
            },
            "images": [
                "/tmnt/tmnt11.jpg",
                "/tmnt/tmnt08.jpg",
                "/tmnt/tmnt07.jpg",
                "/tmnt/tmnt01.jpg",
                "/tmnt/tmnt34.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "Fifth Avenue Presbyterian Church, 7 W 55th St, New York, New York 10019, United States",
            "Year": "2014",
            "Rated": "PG-13",
            "Released": "08 Aug 2014",
            "Runtime": "101 min",
            "Genre": "Action, Adventure, Comedy, Sci-Fi",
            "Director": "Jonathan Liebesman",
            "Writer": "Josh Appelbaum, André Nemec, Evan Daugherty, Peter Laird (based on the Teenage Mutant Ninja Turtles characters created by), Kevin Eastman (based on the Teenage Mutant Ninja Turtles characters created by)",
            "Actors": "Megan Fox, Will Arnett, William Fichtner, Alan Ritchson",
            "Plot": "When a kingpin threatens New York City, a group of mutated turtle warriors must emerge from the shadows to protect their home.",
            "Language": "English, Japanese",
            "Country": "USA",
            "Awards": "1 win & 10 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjUzODQ5MDY5NV5BMl5BanBnXkFtZTgwOTc1NzcyMjE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.8/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "21%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "31/100"
                }
            ],
            "Metascore": "31",
            "imdbRating": "5.8",
            "imdbVotes": "198,640",
            "imdbID": "tt1291150",
            "Type": "movie",
            "DVD": "16 Dec 2014",
            "BoxOffice": "$163,911,409",
            "Production": "Paramount Pictures",
            "Website": "N/A"
        },
        {
            "title": "Bridge of Spies",
            "year": "2015",
            "summary": "In the cold war, a lawyer, James B. Donovan (Tom Hanks) is recruited by the CIA and involved in an intense negotiation mission to release and exchange aCIA U-2 spy-plane pilot, Francis G. Powers. The pilot was arrested alive after his plane was shot down by the Soviet Union during a mission and stays in the company of a KGB intelligence officer, Rudolf Abel (Mark Rylance), who was arrested for espionage in the US.",
            "moviePoster": "/bridgeofspies/bridgeofspiesposter.jpg",
            "locationInfo": {
                "address": "Rudolf's Workshop, 135 Plymouth Street and Anchorage Place",
                "coords": [
                    -73.957477,
                    40.770052
                ]
            },
            "images": [
                "/bridgeofspies/bridgeofspies04.jpg",
                "/bridgeofspies/bridgeofspies01.jpg",
                "/bridgeofspies/bridgeofspies02.jpg",
                "/bridgeofspies/bridgeofspies03.jpg",
                "/bridgeofspies/bridgeofspies29.jpg"
            ],
            "neighborhood": "Brooklyn, Upper East Side",
            "comment": "",
            "place_name": "WORKSHOP, 1415 Second Avenue, New York, New York 10021, United States",
            "Year": "2015",
            "Rated": "PG-13",
            "Released": "16 Oct 2015",
            "Runtime": "142 min",
            "Genre": "Drama, History, Thriller",
            "Director": "Steven Spielberg",
            "Writer": "Matt Charman, Ethan Coen, Joel Coen",
            "Actors": "Mark Rylance, Domenick Lombardozzi, Victor Verhaeghe, Mark Fichera",
            "Plot": "During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.",
            "Language": "English, German, Russian",
            "Country": "Germany, India, USA",
            "Awards": "Won 1 Oscar. Another 30 wins & 101 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxOTI0MjU5NV5BMl5BanBnXkFtZTgwNzM4OTk4NTE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.6/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "90%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "81/100"
                }
            ],
            "Metascore": "81",
            "imdbRating": "7.6",
            "imdbVotes": "281,551",
            "imdbID": "tt3682448",
            "Type": "movie",
            "DVD": "02 Feb 2016",
            "BoxOffice": "N/A",
            "Production": "Dreamworks Pictures",
            "Website": "N/A"
        },
        {
            "title": "The Dark Tower",
            "year": "2017",
            "summary": "Roland Deschain (Idris Elba), the last Gunslinger, is locked in an eternal battle with Walter O'Dim (Matthew McConaughey), also known as the Man in Black. The Gunslinger must prevent the Man in Black from toppling the Dark Tower, the key that holds the universe together. With the fate of worlds at stake, two men collide in the ultimate battle between good and evil.",
            "moviePoster": "/thedarktower/thedarktowerposter2.jpg",
            "locationInfo": {
                "address": "Lexington Avenue",
                "coords": [
                    -73.983034,
                    40.741364
                ]
            },
            "images": [
                "/thedarktower/thedarktower17.jpg",
                "/thedarktower/thedarktower16.jpg",
                "/thedarktower/thedarktower15.jpg",
                "/thedarktower/thedarktower13.jpg",
                "/thedarktower/thedarktower80.jpg",
                "/thedarktower/thedarktower82.jpg"
            ],
            "neighborhood": "Manhattan, Gramercy",
            "comment": "",
            "place_name": "Lexington Ave, 73 Lexington Ave, New York, New York 10016, United States",
            "Year": "2017",
            "Rated": "PG-13",
            "Released": "04 Aug 2017",
            "Runtime": "95 min",
            "Genre": "Action, Adventure, Fantasy, Horror, Sci-Fi, Western",
            "Director": "Nikolaj Arcel",
            "Writer": "Akiva Goldsman (screenplay by), Jeff Pinkner (screenplay by), Anders Thomas Jensen (screenplay by), Nikolaj Arcel (screenplay by), Stephen King (based on \"The Dark Tower\" novels by)",
            "Actors": "Matthew McConaughey, Idris Elba, Tom Taylor, Dennis Haysbert",
            "Plot": "A boy haunted by visions of a dark tower from a parallel reality teams up with the tower's disillusioned guardian to stop an evil warlock known as the Man in Black who plans to use the boy to destroy the tower and open the gates of Hell.",
            "Language": "English",
            "Country": "USA",
            "Awards": "4 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU3MjUwMzQ3MF5BMl5BanBnXkFtZTgwMjcwNjkxMjI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.6/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "16%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "34/100"
                }
            ],
            "Metascore": "34",
            "imdbRating": "5.6",
            "imdbVotes": "123,195",
            "imdbID": "tt1648190",
            "Type": "movie",
            "DVD": "31 Oct 2017",
            "BoxOffice": "$50,644,837",
            "Production": "Sony Pictures",
            "Website": "N/A"
        },
        {
            "title": "The Art of Getting By",
            "year": "2011",
            "summary": "Believing the quote that you are born alone, die alone and everything else is an illusion,George (Freddie Highmore) doesn't see the point of life, school, or homework. Then he meets Sally (Emma Roberts) and he now has a reason to go to schooland make friends, even if he's not ready to admit to himself or to her that he likes her. The school's principal and art teacher introduce him to an alumni,and successful artist, Dustin, who can help guide George along life's path, but other distractions start surfacing, and George might not even be able tograduate from high school.",
            "moviePoster": "/theartofgettingby/theartofgettingbyposter.jpg",
            "locationInfo": {
                "address": "East 3rd Street and 2nd Avenue",
                "coords": [
                    -73.833373,
                    40.907237
                ]
            },
            "images": [
                "/theartofgettingby/theartofgettingby41.jpg",
                "/theartofgettingby/theartofgettingby40.jpg",
                "/theartofgettingby/theartofgettingby39.jpg",
                "/theartofgettingby/theartofgettingby72.jpg",
                "/theartofgettingby/theartofgettingby73.jpg"
            ],
            "neighborhood": "Manhattan, Mount Vernon",
            "comment": "",
            "place_name": "East 3rd Street and Second Ave, Mount Vernon, New York 10550, United States",
            "Year": "2011",
            "Rated": "PG-13",
            "Released": "17 Jun 2011",
            "Runtime": "83 min",
            "Genre": "Drama, Romance",
            "Director": "Gavin Wiesen",
            "Writer": "Gavin Wiesen",
            "Actors": "Freddie Highmore, Emma Roberts, Sasha Spielberg, Marcus Carl Franklin",
            "Plot": "George, a lonely and fatalistic teen who has made it all the way to his senior year without ever having done a real day of work, is befriended by Sally, a popular but complicated girl who recognizes in him a kindred spirit.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win & 2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDg3NzE5MjU3MV5BMl5BanBnXkFtZTcwNjY1NTgxNQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.6/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "20%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "36/100"
                }
            ],
            "Metascore": "36",
            "imdbRating": "6.6",
            "imdbVotes": "55,784",
            "imdbID": "tt1645080",
            "Type": "movie",
            "DVD": "29 Nov 2011",
            "BoxOffice": "$1,429,260",
            "Production": "Fox Searchlight",
            "Website": "N/A"
        },
        {
            "title": "One Fine Day",
            "year": "1996",
            "summary": "Melanie Parker (Michelle Pfeiffer), an architect and mother of Sammy, and Jack Taylor (George Clooney), anewspaper columnist and father of Maggie, are both divorced. They meet one morning when overwhelmed Jack is left unexpectedly with Maggie and forgets that Melanie wasto take her to school. As a result, both children miss their school field trip and are stuck with the parents. The two adults project their negative stereotypes ofex-spouses on each other, but end up needing to rely on each other to watch the children as each must save his job. Humor is added by Sammy's propensity for lodgingobjects in his nose and Maggie's tendency to wander.",
            "moviePoster": "/onefineday/onefinedayposter.jpg",
            "locationInfo": {
                "address": "1 Centre Street and Chambers Street",
                "coords": [
                    -74.003757,
                    40.712972
                ]
            },
            "images": [
                "/onefineday/onefineday152.jpg",
                "/onefineday/onefineday151.jpg",
                "/onefineday/onefineday149.jpg",
                "/onefineday/onefineday147.jpg",
                "/onefineday/onefineday146.jpg",
                "/onefineday/onefineday46.jpg",
                "/onefineday/onefineday03.jpg",
                "/onefineday/onefineday218.jpg"
            ],
            "neighborhood": "Manhattan, Lower East Side",
            "comment": "",
            "place_name": "1 Centre Street, New York, New York 10007, United States",
            "Year": "1996",
            "Rated": "PG",
            "Released": "20 Dec 1996",
            "Runtime": "108 min",
            "Genre": "Comedy, Drama, Romance",
            "Director": "Michael Hoffman",
            "Writer": "Terrel Seltzer, Ellen Simon",
            "Actors": "Michelle Pfeiffer, George Clooney, Mae Whitman, Alex D. Linz",
            "Plot": "The lives of two strangers and their young children unexpectedly intersect on one hectic, stressful day in New York City.",
            "Language": "English, Spanish",
            "Country": "USA",
            "Awards": "Nominated for 1 Oscar. Another 4 wins & 5 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDdhMjgxODQtZjNhNS00YjZiLWFmYTAtODZmM2RhM2M3YmIwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.5/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "50%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.5",
            "imdbVotes": "42,560",
            "imdbID": "tt0117247",
            "Type": "movie",
            "DVD": "08 Jan 2002",
            "BoxOffice": "N/A",
            "Production": "Twentieth Century Fox Home Entertainment",
            "Website": "N/A"
        },
        {
            "title": "The Freshman",
            "year": "1990",
            "summary": "Clark Kellogg (Matthew Broderick) is a young man starting his first year at film school in New YorkCity. After a small time crook steals all his belongings, Clark meets Carmine \"Jimmy the Toucan\" Sabatini (Marlon Brando), an \"importer\" bearing a startlingresemblance to a certain cinematic godfather. When Sabatini makes Clark an offer he can't refuse, he finds himself caught up in a caper involvingendangered species and fine dining.",
            "moviePoster": "/thefreshman/thefreshmanposter.jpg",
            "locationInfo": {
                "address": "Washington Square North, Greenwich Village",
                "coords": [
                    -73.996652,
                    40.7314067
                ]
            },
            "images": [
                "/thefreshman/thefreshman15.jpg",
                "/thefreshman/thefreshman14.jpg",
                "/thefreshman/thefreshman39.jpg",
                "/thefreshman/thefreshman38.jpg"
            ],
            "neighborhood": "Manhattan, Greenwich Village",
            "comment": "",
            "place_name": "Washington Square North, New York, New York 10011, United States",
            "Year": "1990",
            "Rated": "PG",
            "Released": "27 Jul 1990",
            "Runtime": "102 min",
            "Genre": "Comedy, Crime",
            "Director": "Andrew Bergman",
            "Writer": "Andrew Bergman",
            "Actors": "Marlon Brando, Matthew Broderick, Bruno Kirby, Penelope Ann Miller",
            "Plot": "An N.Y.C. film school student accepts a job with a local mobster who resembles a famous cinema godfather and who takes the young man under his wing, after demanding total loyalty.",
            "Language": "English, Italian, German, French",
            "Country": "USA",
            "Awards": "1 win & 2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjMzZGE4YTctMzUxOS00OTYzLWI4YTAtNTdkZDFjYWQ5OGY4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.4/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "94%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "78/100"
                }
            ],
            "Metascore": "78",
            "imdbRating": "6.4",
            "imdbVotes": "18,373",
            "imdbID": "tt0099615",
            "Type": "movie",
            "DVD": "30 Jun 1998",
            "BoxOffice": "N/A",
            "Production": "Sony Pictures Home Entertainment",
            "Website": "N/A"
        },
        {
            "title": "Lola Versus",
            "year": "2012",
            "summary": "Lola (Greta Gerwig) is 29 years-old and is happily engaged to her perfectman, Luke (Joel Kinnaman). But just three weeks before her big day, Luke calls it off, and Lola is forced to re-group as she cancels the wedding.While struggling to find happiness through sexual flings with her best friend, first dates with strangers, and attempts at re-connecting with herex-fiancé, Lola realizes she's going to have to find herself first before she can find love and happiness.",
            "moviePoster": "/lolaversus/lolaversusposter.jpg",
            "locationInfo": {
                "address": "Times Square",
                "coords": [
                    -73.983761,
                    40.7624195
                ]
            },
            "images": [
                "/lolaversus/lolaversus41.jpg",
                "/lolaversus/lolaversus36.jpg",
                "/lolaversus/lolaversus35.jpg",
                "/lolaversus/lolaversus113.jpg",
                "/lolaversus/lolaversus112.jpg",
                "/lolaversus/lolaversus95.jpg"
            ],
            "neighborhood": "Manhattan, Midtown",
            "comment": "",
            "place_name": "Times Square Church, 237 W 51st St, New York, New York 10019, United States",
            "Year": "2012",
            "Rated": "R",
            "Released": "08 Jun 2012",
            "Runtime": "87 min",
            "Genre": "Comedy",
            "Director": "Daryl Wein",
            "Writer": "Zoe Lister-Jones, Daryl Wein",
            "Actors": "Greta Gerwig, Joel Kinnaman, Zoe Lister-Jones, Hamish Linklater",
            "Plot": "Dumped by her boyfriend just three weeks before their wedding, Lola enlists her close friends for a series of adventures she hopes will help her come to terms with approaching 30 as a single woman.",
            "Language": "English",
            "Country": "USA",
            "Awards": "2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTA5MjQ1MzE2NzNeQTJeQWpwZ15BbWU3MDk2ODkzNjc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.5/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "36%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "49/100"
                }
            ],
            "Metascore": "49",
            "imdbRating": "5.5",
            "imdbVotes": "8,205",
            "imdbID": "tt1710417",
            "Type": "movie",
            "DVD": "11 Sep 2012",
            "BoxOffice": "$200,000",
            "Production": "Fox Searchlight Pictures",
            "Website": "N/A"
        },
        {
            "title": "Big",
            "year": "1988",
            "summary": "At a carnival, young Josh Baskins (Tom Hanks) wishes he was big - only to awake the next morning and discover he is! Withthe help of his friend Billy (Jared Rushton), Josh lands a job at a toy company in New York City. There, his inner wisdomenables him to successfully preditc what children want to buy, making the awestruck, naive Josh irresistible to to a beautiful ladder-climbingcolleague (Elizabeth Perkins). But the more he experiences being an adult, the more Josh longs for the simple joys of childhood.",
            "moviePoster": "/big/bigposter.jpg",
            "locationInfo": {
                "address": "FAO Schwarz  767 5th Avenue and East 59th Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/big/big018.jpg",
                "/big/big017.jpg",
                "/big/big016.jpg",
                "/big/big015.jpg",
                "/big/big10.jpg",
                "/big/big09.jpg",
                "/big/big15.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": "The 16ft piano that Tom Hanks walked on has been given to a US children's museum in \nPhiladelphia, Pennsylvania. The instrument was offered to the Please Touch Museum by a US couple who bought it after the film&apos;s release. It was built in Philadelphia by \nRemo Saraceni, who called his invention a Walking Piano. The three-octave piano went on display in January 2009.",
            "Year": "1988",
            "Rated": "PG",
            "Released": "03 Jun 1988",
            "Runtime": "104 min",
            "Genre": "Comedy, Drama, Fantasy, Romance",
            "Director": "Penny Marshall",
            "Writer": "Gary Ross, Anne Spielberg",
            "Actors": "Tom Hanks, Elizabeth Perkins, Robert Loggia, John Heard",
            "Plot": "After wishing to be made big, a teenage boy wakes the next morning to find himself mysteriously in the body of an adult.",
            "Language": "English, Spanish",
            "Country": "USA",
            "Awards": "Nominated for 2 Oscars. Another 11 wins & 12 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDQ1ODM5MTMtMjAwYi00ZGUxLTliNTMtN2ZhODAwMjVhMTRlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.3/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "97%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "73/100"
                }
            ],
            "Metascore": "73",
            "imdbRating": "7.3",
            "imdbVotes": "193,624",
            "imdbID": "tt0094737",
            "Type": "movie",
            "DVD": "18 Dec 2001",
            "BoxOffice": "N/A",
            "Production": "Twentieth Century Fox Home Entertainment",
            "Website": "N/A"
        },
        {
            "title": "You Stupid Man",
            "year": "2002",
            "summary": "A young man named Owen (David Krumholtz), who can't get over his would-be fiancee and nowex-girlfriend, Chloe (Denise Richards), who moved to Los Angeles to become a TV star, finally falls in love with Nadine (Milla Jovovich), the girl who would've been their maidof honor. Soon after, however, his ex loses her TV show, and comes back home, looking to reunite.",
            "moviePoster": "/youstupidman/youstupidmanposter.jpg",
            "locationInfo": {
                "address": "Commerce Street and Bedford Street",
                "coords": [
                    -74.0049377,
                    40.7315444
                ]
            },
            "images": [
                "/youstupidman/youstupidman03.jpg",
                "/youstupidman/youstupidman02.jpg",
                "/youstupidman/youstupidman01.jpg",
                "/youstupidman/youstupidman33.jpg"
            ],
            "neighborhood": "Manhattan, West Village",
            "comment": "",
            "place_name": "Commerce Street and Bedford Street, New York, New York 10014, United States",
            "Year": "2002",
            "Rated": "Not Rated",
            "Released": "27 Feb 2011",
            "Runtime": "95 min",
            "Genre": "Comedy, Romance",
            "Director": "Brian Burns",
            "Writer": "Brian Burns",
            "Actors": "Milla Jovovich, David Krumholtz, William Baldwin, Denise Richards",
            "Plot": "After a man finally gets over his former girlfriend, who has moved to Los Angeles and become a television star, and falls in love with another woman, the former girlfriend's show is canceled and she wants him back.",
            "Language": "English",
            "Country": "Canada, USA, Germany",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODg3MDM4NTM1N15BMl5BanBnXkFtZTgwMDY1NTgwMzE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.8/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "5.8",
            "imdbVotes": "2,333",
            "imdbID": "tt0271882",
            "Type": "movie",
            "DVD": "07 Feb 2006",
            "BoxOffice": "N/A",
            "Production": "Warner Home Video",
            "Website": "N/A"
        },
        {
            "title": "Ass Backwards",
            "year": "2013",
            "summary": "Two childhood best friends Kate (June Diane Raphael) and Chloe (Casey Wilson) who are pushing the age of 30and not quite where they thought they'd be in life. When they run into their former beauty pageant nemesis, Laurel (Alicia Silverstone), they decide to go on a road trip backhome to recapture the pageant crown which eluded them as children. On the road, they face some hard truths about themselves and each other as they encounter spring breakers,strip clubs, a women's militant group and their favorite reality star. This heightened comedic awakening leads us into an unforgettable third act finale that is the girls'homecoming and final reckoning with their past, present and future.",
            "moviePoster": "/assbackwards/assbackwardsposter.jpg",
            "locationInfo": {
                "address": "Manhattan Bridge, East River",
                "coords": [
                    -73.992246,
                    40.709965
                ]
            },
            "images": [
                "/assbackwards/assbackwards14.jpg",
                "/assbackwards/assbackwards13.jpg",
                "/assbackwards/assbackwards12.jpg",
                "/assbackwards/assbackwards21.jpg",
                "/assbackwards/assbackwards19.jpg"
            ],
            "neighborhood": "Lower Manhattan, Lower East Side",
            "comment": "",
            "place_name": "Manhattan Bridge North Plaque, Manhattan Bridge, New York, New York 10038, United States",
            "Year": "2013",
            "Rated": "Unrated",
            "Released": "21 Jan 2013",
            "Runtime": "85 min",
            "Genre": "Adventure, Comedy",
            "Director": "Chris Nelson",
            "Writer": "June Diane Raphael, Casey Wilson",
            "Actors": "June Diane Raphael, Casey Wilson, Jon Cryer, Vincent D'Onofrio",
            "Plot": "Two best friends (Kate and Chloe) embark on a cross country trip back to their hometown to attempt to win a pageant that eluded them as children.",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTUzODI1MjY0M15BMl5BanBnXkFtZTgwMDk0MzgxMDE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "4.2/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "27%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "37/100"
                }
            ],
            "Metascore": "37",
            "imdbRating": "4.2",
            "imdbVotes": "2,132",
            "imdbID": "tt1509788",
            "Type": "movie",
            "DVD": "27 Jan 2014",
            "BoxOffice": "N/A",
            "Production": "Gravitas Ventures",
            "Website": "N/A"
        },
        {
            "title": "Anjaana Anjaani",
            "year": "2010",
            "summary": "The story of two strangers on an odyssey of discovery -- down a path that is ridden with theexquisite pain and joy of falling in love, only they don't realize it. A series of hilarious misadventures trace their bi coastal road journey as they go aboutfulfilling their last wishes. But then life interrupts, as is its habit; and painful choices must be made. The duo part with the understanding that their daystogether were a brief interlude of insanity that had to succumb to real life. They part as they met - as strangers.",
            "moviePoster": "/anjaanaanjaani/anjaanaanjaaniposter.jpg",
            "locationInfo": {
                "address": "Morris Street and Broadway, Financial",
                "coords": [
                    -74.0132769,
                    40.7058713
                ]
            },
            "images": [
                "/anjaanaanjaani/anjaanaanjaani04.jpg",
                "/anjaanaanjaani/anjaanaanjaani03.jpg",
                "/anjaanaanjaani/anjaanaanjaani24.jpg",
                "/anjaanaanjaani/anjaanaanjaani25.jpg"
            ],
            "neighborhood": "Manhattan, Financial District",
            "comment": "",
            "place_name": "Morris Street and E Broadway, New York, New York 10025, United States",
            "Year": "2010",
            "Rated": "Not Rated",
            "Released": "01 Oct 2010",
            "Runtime": "151 min",
            "Genre": "Comedy, Drama, Musical, Romance",
            "Director": "Siddharth Anand",
            "Writer": "Mamta Anand (story), Siddharth Anand (dialogue), Siddharth Anand (screenplay), Vishal Dadlani (lyrics), Advaita Kala (screenplay), Kumaar (lyrics), Kausar Munir (lyrics)",
            "Actors": "Priyanka Chopra, Ranbir Kapoor, Aubrey K. Miller, Carl Marino",
            "Plot": "After numerous attempts at suicide fail, a couple decide to live it up and then kill themselves on New Year's Day.",
            "Language": "Hindi",
            "Country": "India",
            "Awards": "1 win & 2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTkyN2M4M2ItOTg0Yi00ZTA5LWI5NDctZjgzNmIxYzgzNjA2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.8/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "5.8",
            "imdbVotes": "6,083",
            "imdbID": "tt1499201",
            "Type": "movie",
            "DVD": "21 Dec 2010",
            "BoxOffice": "N/A",
            "Production": "Eros International",
            "Website": "N/A"
        },
        {
            "title": "Lola Versus",
            "year": "2012",
            "summary": "Lola (Greta Gerwig) is 29 years-old and is happily engaged to her perfectman, Luke (Joel Kinnaman). But just three weeks before her big day, Luke calls it off, and Lola is forced to re-group as she cancels the wedding.While struggling to find happiness through sexual flings with her best friend, first dates with strangers, and attempts at re-connecting with herex-fiancé, Lola realizes she's going to have to find herself first before she can find love and happiness.",
            "moviePoster": "/lolaversus/lolaversusposter.jpg",
            "locationInfo": {
                "address": "East 10th Street and Stuyvesant Street",
                "coords": [
                    -73.9875129,
                    40.7300663
                ]
            },
            "images": [
                "/lolaversus/lolaversus30.jpg",
                "/lolaversus/lolaversus29.jpg",
                "/lolaversus/lolaversus99.jpg",
                "/lolaversus/lolaversus101.jpg"
            ],
            "neighborhood": "Manhattan, East Village",
            "comment": "",
            "place_name": "East 10th Street and Stuyvesant Street, New York, New York 10003, United States",
            "Year": "2012",
            "Rated": "R",
            "Released": "08 Jun 2012",
            "Runtime": "87 min",
            "Genre": "Comedy",
            "Director": "Daryl Wein",
            "Writer": "Zoe Lister-Jones, Daryl Wein",
            "Actors": "Greta Gerwig, Joel Kinnaman, Zoe Lister-Jones, Hamish Linklater",
            "Plot": "Dumped by her boyfriend just three weeks before their wedding, Lola enlists her close friends for a series of adventures she hopes will help her come to terms with approaching 30 as a single woman.",
            "Language": "English",
            "Country": "USA",
            "Awards": "2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTA5MjQ1MzE2NzNeQTJeQWpwZ15BbWU3MDk2ODkzNjc@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "5.5/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "36%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "49/100"
                }
            ],
            "Metascore": "49",
            "imdbRating": "5.5",
            "imdbVotes": "8,205",
            "imdbID": "tt1710417",
            "Type": "movie",
            "DVD": "11 Sep 2012",
            "BoxOffice": "$200,000",
            "Production": "Fox Searchlight Pictures",
            "Website": "N/A"
        },
        {
            "title": "Lulu on the Bridge",
            "year": "1998",
            "summary": "Izzy Maurer (Harvey Keitel), a jazz saxophonist loses his capability to play when he is injured in a shooting at acafé where he was playing. He sinks into depression when everyone charges in to take care of him, including his ex-wife. However, he discovers a stonewith a telephone number attached. Returning the stone, he meets Celia Burns (Mira Sorvino), a young aspiring actress who in one of those film coincidences is listening to his music.Soon the two begin an affair which is fouled by his over-obsessiveness with her which costs them both a job at a restaurant.",
            "moviePoster": "/luluonthebridge/luluonthebridgeposter.jpg",
            "locationInfo": {
                "address": "Restaurant, 201A West 79th Street and Amsterdam Avenue",
                "coords": [
                    -73.987381,
                    40.722306
                ]
            },
            "images": [
                "/luluonthebridge/luluonthebridge04.jpg",
                "/luluonthebridge/luluonthebridge03.jpg",
                "/luluonthebridge/luluonthebridge02.jpg",
                "/luluonthebridge/luluonthebridge01.jpg",
                "/luluonthebridge/luluonthebridge10.jpg",
                "/luluonthebridge/luluonthebridge11.jpg"
            ],
            "neighborhood": "Manhattan, Lower East Side",
            "comment": "",
            "place_name": "Katz's Delicatessen, 205 E Houston St, New York, New York 10002, United States",
            "Year": "1998",
            "Rated": "PG-13",
            "Released": "14 Aug 1998",
            "Runtime": "103 min",
            "Genre": "Drama, Music, Mystery, Romance",
            "Director": "Paul Auster",
            "Writer": "Paul Auster",
            "Actors": "Harvey Keitel, Richard Edson, Don Byron, Kevin Corrigan",
            "Plot": "A famous jazz saxophonist whose life is forever changed after he is accidentally shot.",
            "Language": "English",
            "Country": "USA",
            "Awards": "2 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTY5NTAwNzA0MF5BMl5BanBnXkFtZTYwODI3MTc4._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.2/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "0%"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "6.2",
            "imdbVotes": "3,721",
            "imdbID": "tt0125879",
            "Type": "movie",
            "DVD": "21 Sep 1999",
            "BoxOffice": "N/A",
            "Production": "Trimark",
            "Website": "N/A"
        },
        {
            "title": "5 Flights Up",
            "year": "52014",
            "summary": "A husband (Morgan Freeman) and wife (Diane Keaton) spend a hectic weekend pondering the sale of the apartment they've shared for more than 40 years..",
            "moviePoster": "/5flightsup/5flightsupposter.jpg",
            "locationInfo": {
                "address": "Alex's Apartment, 327 Bedford Avenue and S 3rd Street",
                "coords": [
                    -73.783095,
                    40.649816
                ]
            },
            "images": [
                "/5flightsup/5flightsup11.jpg",
                "/5flightsup/5flightsup12.jpg",
                "/5flightsup/5flightsup09.jpg",
                "/5flightsup/5flightsup08.jpg",
                "/5flightsup/5flightsup07.jpg",
                "/5flightsup/5flightsup24.jpg",
                "/5flightsup/5flightsup25.jpg"
            ],
            "neighborhood": "Brooklyn, John F. Kennedy International Airport",
            "comment": "",
            "place_name": "Apartment 7B Deli & Market, JFK Terminal 7, New York, New York 11430, United States",
            "Year": "2014",
            "Rated": "PG-13",
            "Released": "08 May 2015",
            "Runtime": "88 min",
            "Genre": "Comedy, Drama",
            "Director": "Richard Loncraine",
            "Writer": "Charlie Peters (screenplay), Jill Ciment (book)",
            "Actors": "Diane Keaton, Morgan Freeman, Cynthia Nixon, Carrie Preston",
            "Plot": "A long-time married couple who've spent their lives together in the same New York apartment become overwhelmed by personal and real estate-related issues when they plan to move away.",
            "Language": "English",
            "Country": "USA",
            "Awards": "1 win.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ5MzU3MzgwN15BMl5BanBnXkFtZTgwNjM2NDQ3NDE@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.2/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "46%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "55/100"
                }
            ],
            "Metascore": "55",
            "imdbRating": "6.2",
            "imdbVotes": "9,020",
            "imdbID": "tt2933544",
            "Type": "movie",
            "DVD": "07 Jul 2015",
            "BoxOffice": "N/A",
            "Production": "Focus Features",
            "Website": "N/A"
        },
        {
            "title": "Noel",
            "year": "2004",
            "summary": "Christmas Eve in New York, and the lonely divorced publisher, Rose Collins (Susan Sarandon), needsa miracle to improve the health of her mother, interned in a hospital with Alzheimers. She feels sorry for another patient and meets his visitor. Meanwhile,Nina Vasquez (Penélope Cruz) breaks her engagement with her beloved fiancé Mike (Paul Walker) due to his suffocating jealousy, but misses him. Mike isstalked by a stranger, bartender Artie Venzuela. The poor Jules arranges to spend Christmas Eve in the hospital, where he spent the best Christmas of his lifewhen he was a teenager. The lives of some of these characters cross with others along the night.",
            "moviePoster": "/noel/noelposter.jpg",
            "locationInfo": {
                "address": "Rose Collins' Workplace, 30 Rockefeller Plaza",
                "coords": [
                    -73.993161,
                    40.73373
                ]
            },
            "images": [
                "/noel/noel04.jpg",
                "/noel/noel03.jpg",
                "/noel/noel02.jpg",
                "/noel/noel01.jpg",
                "/noel/noel09.jpg"
            ],
            "neighborhood": "Manhattan, Greenwich Village",
            "comment": "",
            "place_name": "Collins, 88 University Pl, New York, New York 10003, United States",
            "Year": "2004",
            "Rated": "PG",
            "Released": "26 Nov 2004",
            "Runtime": "96 min",
            "Genre": "Drama",
            "Director": "Chazz Palminteri",
            "Writer": "David Hubbard",
            "Actors": "Susan Sarandon, Paul Walker, Penélope Cruz, Alan Arkin",
            "Plot": "Five New Yorkers come together on Christmas Eve, seeking a miracle.",
            "Language": "English",
            "Country": "USA, Canada",
            "Awards": "N/A",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTAxMzY1MDUzNl5BMl5BanBnXkFtZTcwNzk4NTcyMQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "6.2/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "28%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "29/100"
                }
            ],
            "Metascore": "29",
            "imdbRating": "6.2",
            "imdbVotes": "8,847",
            "imdbID": "tt0383534",
            "Type": "movie",
            "DVD": "25 Oct 2005",
            "BoxOffice": "N/A",
            "Production": "Convex Group",
            "Website": "N/A"
        },
        {
            "title": "The Code",
            "year": "2009",
            "summary": "In New York, the experienced art thief, Keith Ripley (Morgan Freeman), invites the bold thief fromMiami, Gabriel Martin (Antonio Banderas), to team up with him. He plans the heist of two valuable mysterious antique Faberge eggs, located in a safe, of the wellprotected Russian jewelry Romanov. Each egg is worth twenty million dollars on the black market, and Ripley needs his cut to free himself fromhis debt to a powerful mobster, known as Nicky. The reluctant Gabriel agrees to participate, after having a one night stand with Ripley'sgoddaughter Alexandra Karolin (Radha Mitchell). Meanwhile, the persistent Lieutenant Weber, who has unsuccessfully tried to put Ripley in jail for twenty years,figures out how to anticipate the movements of the criminal in order to catch him. This film is also known as Thick As Thieves.",
            "moviePoster": "/thecode/thecodeposter.jpg",
            "locationInfo": {
                "address": "Brighton Beach Avenue & Brighton 2nd Street",
                "coords": [
                    -73.965095,
                    40.576827
                ]
            },
            "images": [
                "/thecode/thecode24.jpg",
                "/thecode/thecode23.jpg",
                "/thecode/thecode28.jpg",
                "/thecode/thecode29.jpg"
            ],
            "neighborhood": "Brooklyn, Brighton Beach",
            "comment": "",
            "place_name": "Brighton Beach Avenue and Brighton 2nd Street, Brooklyn, New York 11235, United States",
            "Year": "2014–2016",
            "Rated": "N/A",
            "Released": "21 Sep 2014",
            "Runtime": "54 min",
            "Genre": "Drama, Thriller",
            "Director": "N/A",
            "Writer": "Shelley Birse",
            "Actors": "Dan Spielman, Ashley Zukerman, Adele Perovic, Michael Denkha",
            "Plot": "Two Canberra based brothers become entangled in a cover up that involves a remote outback community and key members of the Australian Government.",
            "Language": "English",
            "Country": "Australia",
            "Awards": "9 wins & 9 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNmRhYWNlYjktZTVhMi00OTViLWIxNjEtOWZiZmE5YTE0MTY2XkEyXkFqcGdeQXVyNTM4OTY2MDU@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.4/10"
                }
            ],
            "Metascore": "N/A",
            "imdbRating": "7.4",
            "imdbVotes": "3,641",
            "imdbID": "tt3914672",
            "Type": "series",
            "totalSeasons": "2"
        }
    ]

    return { 
        locationList : shuffleArr(locationList),
        shuffle,
    }
}());

export { Helper };