const Helper = (function() {

    function shuffle() {
        return shuffleArr(locationList);
    }

    const coordList = [

    ];

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
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Alien Space Avenger",
            "year": "1989",
            "summary": "A group of extraterrestrial criminals go on the run from a powerful intergalactic bounty hunter in this sci-fi action film. The alien offenders eventually crash land in New York City and take over a series of human bodies in order to hide from their pursuer.",
            "moviePoster": "/alienspaceavenger/alienspaceavengerposter.jpg",
            "locationInfo": {
                "address": "Merchant's Gate Fountain, Columbus Circle and Central Park West",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/alienspaceavenger/alienspaceavenger12.jpg",
                "/alienspaceavenger/alienspaceavenger11.jpg",
                "/alienspaceavenger/alienspaceavenger21.jpg",
                "/alienspaceavenger/alienspaceavenger22.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Miss Congeniality 2: Armed & Fabulous",
            "year": "22005",
            "summary": "The FBI agent Gracie Hart (Sandra Bullock) is assigned to promote the FBI, touring with the brutalagent Sam Fuller as her bodyguard. While traveling around the country, her friend and Miss USA is kidnapped with StanFields, and Gracie decides to investigate the abduction in Las Vegas by her own and against the direct orders of local chief Collins.",
            "moviePoster": "/misscongeniality2/misscongeniality2poster.jpg",
            "locationInfo": {
                "address": "PS 11 William T Harris School, 320 West 21st Street and 8th Avenue",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": "Notice that the sign on the front of the school clearly shows PS 31, when \n\t\t\t\t\t\t\t\t\t\t\t\t\t\tin fact the school is PS 11 on 21st Street."
        },
        {
            "title": "Most Beautiful Island",
            "year": "2017",
            "summary": "Most Beautiful Island chronicles one harrowing day in the life of Luciana (Ana Asensio), a young immigrant woman struggling to make ends meet while striving to escape her past. As Luciana's day unfolds, she is whisked, physically and emotionally, through a series of troublesome and unforeseeable extremes. Before her day is done, she inadvertently finds herself a central participant in a cruel game where lives are placed at risk, and psyches are twisted and broken for the perverse entertainment of a privileged few.",
            "moviePoster": "/mostbeautifulisland/mostbeautifulislandposter.jpg",
            "locationInfo": {
                "address": "Grand Central Terminal, 89 East 42nd Street and Park Avenue",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/mostbeautifulisland/mostbeautifulisland03.jpg",
                "/mostbeautifulisland/mostbeautifulisland02.jpg",
                "/mostbeautifulisland/mostbeautifulisland01.jpg",
                "/mostbeautifulisland/mostbeautifulisland09.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
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
            "comment": ""
        },
        {
            "title": "Can You Ever Forgive Me?",
            "year": "2018",
            "summary": "Lee Israel (Melissa McCarthy) made her living in the 1970's and 80's profiling the likes of Katharine Hepburn, Tallulah Bankhead, Estee Lauder and journalist Dorothy Kilgallen. When Lee is no longer able to get published because she has fallen out of step with current tastes, she turns her art form to deception, abetted by her loyal friend Jack (Richard E. Grant).",
            "moviePoster": "/canyoueverforgiveme/canyoueverforgivemeposter.jpg",
            "locationInfo": {
                "address": "Central Park",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Single White Female",
            "year": "1992",
            "summary": "Allison Jones (Bridget Fonda) is a successful software designer working in bustling Manhattan, along with hersuccessful career, she lives in a very trendy apartment and has a handsome boyfriend Sam. But when she finds out that Sam has been cheating on her, she has nooption but to start out on her own. Determined not to lose her apartment, she advertises for a roommate. After failed interviews, she finally comes across Hedra Carlson (Jennifer Jason Leigh). At first everything seems to be running smoothly, with the self-centred Allison enjoying Hedra's company and her constant willingness to please. But things start to turn strange when Hedra begins copying Allison, her hair style, the clothes she wears and even the way she acts. When Allison decidesto give her ex boyfriend, Sam, another chance and asks him to move in, she asks Hedra to look for new accommodation, unleashing a very weird and psychotic side to her roommate.",
            "moviePoster": "/singlewhitefemale/singlewhitefemaleposter.jpg",
            "locationInfo": {
                "address": "Broadway and West 75th Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/singlewhitefemale/singlewhitefemale102.jpg",
                "/singlewhitefemale/singlewhitefemale101.jpg",
                "/singlewhitefemale/singlewhitefemale157.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Confessions of a Shopaholic",
            "year": "2009",
            "summary": "Struggling with her debilitating obsession with shopping and the sudden collapse of her income source, Rebecca Bloomwood (Isla Fisher)unintentionally lands a job writing for a financial magazine after a drunken letter-mailing mix-up. Ironicallywriting about the very consumer caution of which she herself has not abided, Rebecca's innovative comparisons and unconventional metaphors for economics grants her criticalacclaim, public success, and the admiration of her supportive boss Luke. But as she draws closer to her ultimate goal of writing for renowned fashion magazine Alette, shequestions her true ambitions and must determine if overcoming her \"shopaholic\" condition will bring her real happiness.",
            "moviePoster": "/confessionsofashopaholic/confessionsofashopaholicposter2.jpg",
            "locationInfo": {
                "address": "Madison Avenue",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "The Odd Couple",
            "year": "1968",
            "summary": "Felix Ungar (Jack Lemmon) has just broken up with his wife. Despondent, he goes to kill himself butis saved by his friend Oscar Madison (Walter Matthau). With nowhere else to go, Felix is urged by Oscar to move in with him, at least for a while. The only problemis that Felix is neat, tidy, and neurotic, whereas Oscar is slovenly and casual.",
            "moviePoster": "/theoddcouple/theoddcoupleposter.jpg",
            "locationInfo": {
                "address": "Shea Stadium, 12301 Roosevelt Avenue, Flushing Meadows Park",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Queens",
            "comment": "The scene at Shea Stadium, which also featured Heywood Hale Broun, \nwas filmed right before a real game btw the New York Mets and the Pittsburgh Pirates on June 27, 1967. Roberto Clemente was asked to hit into the \ntriple play that Oscar misses, but he refused to do it and Bill Mazeroski took his place."
        },
        {
            "title": "The Anomaly",
            "year": "2014",
            "summary": "The travails of a traumatized ex-soldier who wakes up in the back of a van, alongside akidnapped boy, to find that he only has only nine minutes and 37 seconds of consciousness to work out why and how he got there.",
            "moviePoster": "/theanomaly/theanomalyposter.jpg",
            "locationInfo": {
                "address": "72 Walker Street and Cortlandt Alley",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/theanomaly/theanomaly03.jpg",
                "/theanomaly/theanomaly02.jpg",
                "/theanomaly/theanomaly01.jpg",
                "/theanomaly/theanomaly13.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Desperately Seeking Susan",
            "year": "1985",
            "summary": "Roberta (Rosanna Arquette) is a housewife, bored with her life and feeling ignored by her hot tub-selling husband.The one thing that interests her is the excitement and romance she finds in following the relationship of Jim (Robert Joy) and Susan (Madonna),who communicate through their travels using the personal ads. Susan is having her own fun when she sees the ad to meetJim in NYC. Unfortunately, Susan is unaware that the last man she was with is entangled with the mob. So when Robertashows up to actually see her idol, she takes it upon herself to emulate her. After a bout of amnesia, she is mistakenfor Susan and must survive with Susan, Jim, her husband, and the mob - scrambling for the truth. Until Jim's best friend comes to the rescue.",
            "moviePoster": "/desperatelyseekingsusan/desperatelyseekingsusanposter.jpg",
            "locationInfo": {
                "address": "Times Square",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/desperatelyseekingsusan/desperatelyseekingsusan141.jpg",
                "/desperatelyseekingsusan/desperatelyseekingsusan140.jpg",
                "/desperatelyseekingsusan/desperatelyseekingsusan205.jpg",
                "/desperatelyseekingsusan/desperatelyseekingsusan204.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Marathon Man",
            "year": "1976",
            "summary": "Thomas Babington \"Babe\" Levy (Dustin Hoffman) is a history Ph.D. candidate and avid runner researching the same field as his father, who committed suicide after being investigated during the Joseph McCarthy era. Babe's brother, Henry (Roy Scheider), better known as \"Doc\", poses as an oil company executive but, unknown to Babe, is actually a U.S. government agent working for a secret agency headed by Director Peter Janeway (William Devane).",
            "moviePoster": "/marathonman/marathonmanposter.jpg",
            "locationInfo": {
                "address": "Central Park Zoo",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": "The fence which run around the reservior has since been replaced by an iron railing fence."
        },
        {
            "title": "Buying the Cow",
            "year": "2002",
            "summary": "David Collins (Jerry O'Connell) is a commmitment-shy Los Angeles yuppie whose girlfriend of many years,advertising executive Sarah (Bridgette Wilson-Sampras), gives him an ultimatum: commit or get out. David has two months to decide if he wants to stay with Sarah as she leaves townfor a job in New York. Following the advice from his more outgoing friends, David hits the dating scene as he tries to find his one and only soul mate, amysterious woman he sees again and again, but always gets away before he can talk to her.",
            "moviePoster": "/buyingthecow/buyingthecowposter.jpg",
            "locationInfo": {
                "address": "Main Street and Plymouth Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/buyingthecow/buyingthecow05.jpg",
                "/buyingthecow/buyingthecow04.jpg",
                "/buyingthecow/buyingthecow02.jpg",
                "/buyingthecow/buyingthecow01.jpg",
                "/buyingthecow/buyingthecow03.jpg"
            ],
            "neighborhood": "Brooklyn",
            "comment": "The exterior shot was filmed in Brooklyn on Main Street. The interior shots have yet to be identified."
        },
        {
            "title": "Turk 182",
            "year": "1821985",
            "summary": "Jimmy Lynch (Timothy Hutton) is angry because his older brother, who was injured as a result of an off dutyfire rescue, is denied benefits by the city. At the same time, Mayor Tyler is embroiled in a political scandal that he denies all previous knowledge of.Jimmy begins painting \"Tyler Knew, Turk 182\" as an embarrassment to the mayor. The mayor is furious at this grafitti appearing all over the city and ordersthe police to find the artist. Jimmy's \"Turk 182\" spraypaints continue to appear.",
            "moviePoster": "/turk182/turk182poster.jpg",
            "locationInfo": {
                "address": "Mayor's Office, 51 Chambers Street and Centre Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/turk182/turk182_03.jpg",
                "/turk182/turk182_02.jpg",
                "/turk182/turk182_01.jpg",
                "/turk182/turk182_20.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Forgetting the Girl",
            "year": "2012",
            "summary": "Haunted by a traumatic history, photographer Kevin Wolfe (Christopher Denham) struggles tosystematically forget all his bad memories, but erasing his past threatens to consume his future. Kevin is obsessed with finding a girl who can help him forgethis unpleasant past. However, all his encounters with the opposite sex inevitably go afoul, creating more awkward experiences than he can cope with. As therejections mount, Kevin's futile search for happiness and love becomes overwhelmingly turbulent, forcing him to take desperate measures. Shot in a varietyof NYC locales, from Hell's Kitchen to Greenpoint, Forgetting the Girl is a gritty vision of the city and its denizens. The tightly-woven drama blendsrecollections with reality to craft an intense character study of the psychologically-scarred protagonist. As beautiful as it is dark, the tense narrativeslowly boils under the surface until it unleashes an unsettling climax that will not be easily forgotten.",
            "moviePoster": "/forgettingthegirl/forgettingthegirlposter.jpg",
            "locationInfo": {
                "address": "10th Avenue and West 39th Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/forgettingthegirl/forgettingthegirl12.jpg",
                "/forgettingthegirl/forgettingthegirl11.jpg",
                "/forgettingthegirl/forgettingthegirl10.jpg",
                "/forgettingthegirl/forgettingthegirl15.jpg",
                "/forgettingthegirl/forgettingthegirl16.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Malcolm X",
            "year": "1992",
            "summary": "Biography of Malcolm X, the famous African American leader. Born Malcolm Little, his father(a minister) was killed by the Ku Klux Klan. He became a gangster, and while in jail discovered the Nation of Islam writings of Elijah Muhammad. He preaches theteachings when let out of jail, but later on goes on a pilgrimage to the city of Mecca, there he converts to the original Islamic religion and becomes a SunniMuslim. He changes his name to El-Hajj Malik Al-Shabazz and stops his anti-white teachings, as he realises the error of his mistakes. He is later on assasinatedand dies a Muslim Martyr.",
            "moviePoster": "/malcolmx/malcolmxposter.jpg",
            "locationInfo": {
                "address": "West 125th Street and 8th Avenue",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "For Richer or Poorer",
            "year": "1997",
            "summary": "Brad (Tim Allen) and Caroline Sexton (Kirstie Alley) were incredibly rich and incredibly miserable. Until something unbelievable happened... their accountant robbed them dry. Now they're on the run from the IRS and hiding out in the one place no one will ever look for them... Amish country. While their lawyer sorts things out in New York, they've got to do their best to blend in and are failing miserably! Hard work may prove to be more difficult than hard time as the Sextons are learning how to milk cows, plow fields and fall in love all over again.",
            "moviePoster": "/forricherorpoorer/forricherorpoorerposter.jpg",
            "locationInfo": {
                "address": "Sexton's Office, 180 Maiden Lane and Front Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
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
            "comment": ""
        },
        {
            "title": "Something Borrowed",
            "year": "2011",
            "summary": "Rachel (Ginnifer Goodwin) is a lawyer. When she was in law school she fell for another student Dex (Colin Egglesfield) who comes from an affluent family. But she's too shy to say anything. When Dex meets her best friend Darcy (Kate Hudson) who treats her like dirt sometimes, who was visiting her, she makes a move on him and gets him. Eventually they get engaged and Darcy asks Rachel to be her Maid of Honor. But Rachel stills has feelings for Dex and still can't say anything. But when Darcy throws her a birthday party and Dex is there. When she and gets Dex are alone, she blurts out that she had a thing for him in college which surprised him. And after drinking a little they spend the night together. They try to forget the whole thing but can't but agree that it means nothing. But Ethan, Rachel close friend tells her that she'll spend her entire life regretting that if she does nothing.",
            "moviePoster": "/somethingborrowed/somethingborrowedposter.jpg",
            "locationInfo": {
                "address": "Crimson Club, 915 Broadway and East 21st Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Purple Violets",
            "year": "2007",
            "summary": "Patti Petalson (Selma Blair) is a promising writer, but her marriage and conventional job keep her from her dream. She longs to return to her writing, especially after running into her first love Brian Callahan (Patrick Wilson), a successful crime novelist. Kate (Debra Messing) is Patti's best friend since college. She's a tough-talking schoolteacher who plays therapist to all Patti's problems, while she's got a few of her own. Despite Brian's gorgeous Tribeca loft and perfect house in the Hamptons, he longs to write works of greater literary value. Michael Murphy (Edward Burns), his lawyer and best friend from college still carries a flame for his former girlfriend Kate, even though their relationship ended badly years ago. She holds a major grudge, but he would go to any length just to win Kate back, knowing his feelings for her never went away. He tried to forget over the years but since he spotted Kate in the restaurant she was all he could think about. When Patti sells Murphy a new apartment, and Brian publishes his personal novel, these old friends reconnect in unexpected ways with surprising results.",
            "moviePoster": "/purpleviolets/purplevioletsposter.jpg",
            "locationInfo": {
                "address": "Brian's Apartment, 142 Duane Street and West Broadway",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Nine 1/2 Weeks",
            "year": "121986",
            "summary": "In the often impersonal city of New York, a city that never sleeps, a city filled with the shadows and secretsof its citizens, a man and a woman conduct a highly sensual sexual affair. John (Mickey Rourke), a wealthy businessman,seduces a beautiful art assistant, Elizabeth (Kim Basinger), who is recently divorced after a three-year marriage.",
            "moviePoster": "/nineandahalfweeks/nineandahalfweeksposter.jpg",
            "locationInfo": {
                "address": "Mulberry Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/nineandahalfweeks/nineweeks35.jpg",
                "/nineandahalfweeks/nineweeks37.jpg",
                "/nineandahalfweeks/nineweeks33.jpg",
                "/nineandahalfweeks/nineweeks157.jpg",
                "/nineandahalfweeks/nineweeks158.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Die Hard: With a Vengeance",
            "year": "1995",
            "summary": "John McClane (Bruce Willis) is now almost a full-blown alcoholic and is suspended from the NYPD.But when a bomb goes off in the Bonwit Teller Department Store the police go insane trying to figure out what's going on. Soon, a man named Simon calls and asksfor McClane. Simon tells Inspector Walter Cobb that McClane is going to play a game called \"Simon Says\". He says that McClane is going to do the tasks heassigns him. If not, he'll blow off another bomb. With the help of a Harlem electrician, John McClane must race all over New York trying to figure out thefrustrating puzzles that the crafty terrorist gives him. But when a bomb goes off in a subway station right by the Federal Reserve (the biggest gold storage in the world) things start to get heated up.",
            "moviePoster": "/diehard3/diehard3poster.jpg",
            "locationInfo": {
                "address": "William Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": "The park on top of the Wall Street station in the film was a vacant lot that was made into a park for the film. It was turned back into a vacant lot after filming was completed."
        },
        {
            "title": "Regarding Henry",
            "year": "1991",
            "summary": "Henry Turner (Harrison Ford) is a despicable and ruthless trial lawyer whose life is turned upside down when he is shot in the head during a robbery. He survives the injury with significant brain damage and must learn again how to speak, walk, and function normally. He has also lost most of the memory of his personal life, and must adjust to life with the family that he does not remember. To the surprise of his wife and daughter, Henry becomes a loving and affectionate man.",
            "moviePoster": "/regardinghenry/regardinghenryposter.jpg",
            "locationInfo": {
                "address": "Capri Cinema, 738 8th Avenue",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/regardinghenry/regardinghenry17.jpg",
                "/regardinghenry/regardinghenry16.jpg",
                "/regardinghenry/regardinghenry15.jpg",
                "/regardinghenry/regardinghenry34.jpg",
                "/regardinghenry/regardinghenry33.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Morning Glory",
            "year": "2010",
            "summary": "Becky (Rachel McAdams) is a hard-working morning TV show producer, or at least she was untilshe got fired. Desperate to get a job, she finally gets an interview with Jerry (Jeff Goldblum) - who is desperate to hire a producer for the strugglingshow \"Daybreak\". Becky accepts the job and it proves to be more difficult than even she might be able to handle. She has to fire the sexist co-host, thentry to convince egotistical news reporter, Mike Pomeroy (Harrison Ford), to take the job, and then try and get him to actually do the job, properly. And she hasto do this while falling for handsome Adam (Patrick Wilson), and trying tosave the show from plummeting ratings. Will Becky be able to hold on to her dream job and her sanity?",
            "moviePoster": "/morningglory/morninggloryposter.jpg",
            "locationInfo": {
                "address": "5th Avenue and East 59th Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Bright Lights, Big City",
            "year": "1988",
            "summary": "Jamie Conway (Michael J. Fox) works as a fact-checker for a major New York magazine, but becausehe spends his nights partying with his glib best friend (Kiefer Sutherland), he's on the verge of getting fired. His wife, a fast-rising model (Phoebe Cates),just left him; he's still reeling from the death of his mother (Dianne Wiest) a year earlier; and he's obsessed with a tabloid story about a pregnant woman in acoma. Bright Lights, Big City doesn't have much of a plot, but in its meandering way it captures some of the glossy chaos of the time and of a man desperatelytrying to escape the pain in his life.",
            "moviePoster": "/brightlightsbigcity/brightlightsbigcityposter.jpg",
            "locationInfo": {
                "address": "Laight Street and Greenwich Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Shame",
            "year": "2011",
            "summary": "Thirty-something Brandon Sullivan (Michael Fassbender) is a New York yuppie. He is also a sexaddict who thinks about sex all the time when he's not having sex. He surfs for porn on his work computer, masturbates often even in his office's men's room, and eyes strange women in whateversituation he's in in the hopes of having quick anonymous sex with them. He hides his sex addiction from those few people in his life who he lets in in an emotionalsense, unlike his married boss, David Fisher, who is open about his marital infidelities to his male work colleagues. And the act of sex holds no emotional connotationwhatsoever for Brandon. The arrival back into his life and his apartment of his sister Sissy Sullivan (Carey Mulligan), from who he was estranged due to the emotional baggageassociated, changes Brandon's life, especially in what he can do in what used to be the privacy and sanctity of his apartment.",
            "moviePoster": "/shame/shameposter.jpg",
            "locationInfo": {
                "address": "Broadway and West 31st Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/shame/shame14.jpg",
                "/shame/shame13.jpg",
                "/shame/shame12.jpg",
                "/shame/shame45.jpg",
                "/shame/shame46.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "The Dark Tower",
            "year": "2017",
            "summary": "Roland Deschain (Idris Elba), the last Gunslinger, is locked in an eternal battle with Walter O'Dim (Matthew McConaughey), also known as the Man in Black. The Gunslinger must prevent the Man in Black from toppling the Dark Tower, the key that holds the universe together. With the fate of worlds at stake, two men collide in the ultimate battle between good and evil.",
            "moviePoster": "/thedarktower/thedarktowerposter2.jpg",
            "locationInfo": {
                "address": "Dixie Pig, 135 Plymouth Street and Anchorage Place",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/thedarktower/thedarktower52.jpg",
                "/thedarktower/thedarktower46.jpg",
                "/thedarktower/thedarktower45.jpg",
                "/thedarktower/thedarktower85.jpg",
                "/thedarktower/thedarktower89.jpg"
            ],
            "neighborhood": "Brooklyn",
            "comment": ""
        },
        {
            "title": "One Fine Day",
            "year": "1996",
            "summary": "Melanie Parker (Michelle Pfeiffer), an architect and mother of Sammy, and Jack Taylor (George Clooney), anewspaper columnist and father of Maggie, are both divorced. They meet one morning when overwhelmed Jack is left unexpectedly with Maggie and forgets that Melanie wasto take her to school. As a result, both children miss their school field trip and are stuck with the parents. The two adults project their negative stereotypes ofex-spouses on each other, but end up needing to rely on each other to watch the children as each must save his job. Humor is added by Sammy's propensity for lodgingobjects in his nose and Maggie's tendency to wander.",
            "moviePoster": "/onefineday/onefinedayposter.jpg",
            "locationInfo": {
                "address": "6th Avenue and Bleecker Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/onefineday/onefineday162.jpg",
                "/onefineday/onefineday161.jpg",
                "/onefineday/onefineday160.jpg",
                "/onefineday/onefineday227.jpg",
                "/onefineday/onefineday226.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "The Smurfs",
            "year": "2011",
            "summary": "When the evil wizard Gargamel (Hank Azaria) chases the tiny blue Smurfs Papa Smurf (Jonathan Winters),Smurfette (Katy Perry), Clumsy (Anton Yelchin), Grouchy (George Lopez), Brainy (Fred Armisen) and Gutsy (Alan Cumming) out of their village, they tumble from their magicalworld and into the real world of Central Park and New York City. The Smurfs befriend Patrick (Neil Patrick Harris) and Grace Winslow (Jayma Mays), a married and expectant couple and up staying in theirapartment until they find a way to get back to their village before Gargamel tracks them down.",
            "moviePoster": "/thesmurfs/thesmurfsposter.jpg",
            "locationInfo": {
                "address": "Times Square",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "People I Know",
            "year": "2002",
            "summary": "Eli Wurman (Al Pacino) is a publicist on the out, but all he knows is how to hustle and cajole,threaten and persuade. The hazy mania of his everyday life is fuelled by a steady stream of prescription drugs and alcohol. One night, Eli's last remaining \"big client\"Cary Launer (Ryan O'Neal) entreats him to take care of his latest publicity mess—a dangerous liaison with a hard-shelled, quick-tongued television actress with a soft centre and a taste for illegal drugs (Téa Leoni). The television actress takes him to a drug- and-sexden, a playground for the rich and famous, where she claims to be looking for a toy.",
            "moviePoster": "/peopleiknow/peopleiknowposter.jpg",
            "locationInfo": {
                "address": "Eli Wurman's Apartment, 11 5th Avenue and West 8th Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/peopleiknow/peopleiknow02.jpg",
                "/peopleiknow/peopleiknow01.jpg",
                "/peopleiknow/peopleiknow14.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Broken English",
            "year": "2007",
            "summary": "Nora Wilder (Parker Posey) is freaking out. Everyone around her is in a relationship, is married, or has children. Nora is in her thirties, alone with job she's outgrown and a mother who constantly reminds her of it all. Not to mention her best friend Audrey's \"perfect marriage\". But after a series of disastrous dates, Nora unexpectedly meets Julien, a quirky Frenchman who opens her eyes to a lot more than love.",
            "moviePoster": "/brokenenglish/brokenenglishposter.jpg",
            "locationInfo": {
                "address": "15 West 56th Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/brokenenglish/brokenenglish03.jpg",
                "/brokenenglish/brokenenglish02.jpg",
                "/brokenenglish/brokenenglish01.jpg",
                "/brokenenglish/brokenenglish10.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Trading Places",
            "year": "1983",
            "summary": "Louis Winthorpe III (Dan Aykroyd) is a successful Philadelphia commodity broker with mansion, manservant andgirlfriend to match. Billy Ray Valentine (Eddie Murphy) is a hustling beggar. Winthorpe's employers, the elderly Duke brothers, make a bet that by switching the lifestyle of the twoBilly Ray will make good and their man will take to a life of crime. Suddenly Louis finds himself uncomprehendingly with no job, no home and only a new acquaintance,glamorous hooker Ophelia, prepared to help him. So at least in one way things could actually be worse.",
            "moviePoster": "/tradingplaces/tradingplacesposter.jpg",
            "locationInfo": {
                "address": "Greenwich Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/tradingplaces/tradingplaces105.jpg",
                "/tradingplaces/tradingplaces103.jpg",
                "/tradingplaces/tradingplaces102.jpg",
                "/tradingplaces/tradingplaces101.jpg",
                "/tradingplaces/tradingplaces117.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Collateral Beauty",
            "year": "2016",
            "summary": "When Howard (Will Smith) a successful New York advertising executive suffers a great tragedy, he retreatsfrom life. While his concerned friends Whit (Edward Norton), Claire (Kate Winslet) and Simon (Michael Pena) try desperately to reconnect with him, he seeks answers fromthe universe by writing letters to Love, Time and Death. When his notes bring unexpected personal responses, he begins to understand how these constants interlock in alife fully lived and how even the deepest loss can reveal moments of meaning and beauty.",
            "moviePoster": "/collateralbeauty/collateralbeautyposter.jpg",
            "locationInfo": {
                "address": "West 58th Street and 5th Avenue",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/collateralbeauty/collateralbeauty06.jpg",
                "/collateralbeauty/collateralbeauty05.jpg",
                "/collateralbeauty/collateralbeauty04.jpg",
                "/collateralbeauty/collateralbeauty200.jpg",
                "/collateralbeauty/collateralbeauty201.jpg"
            ],
            "neighborhood": "Manhattan.",
            "comment": ""
        },
        {
            "title": "Thanks for Sharing",
            "year": "2012",
            "summary": "Adam (Mark Ruffalo) has just reached the 5-year mark in his sex addiction sobriety with help from his sponsor Mike (Tim Robbins). New-comer Neil (Josh Gad) seeks out Adam's help hoping that he'll be his mentor, but Neil doesn't have the same maturity and continues to harass women at work, on the street, and on the subway. Adam has also just met Phoebe (Gwyneth Paltrow), who might be perfect for him, but Adam hasn't been in a relationship since he recognized his addiction to sex, and Phoebe doesn't date addicts. As Adam navigates the romantic relationship waters, Mike struggles connecting to his former drug-addicted son who has just returned home, and Neil develops a relationship with another woman in his sex addicts group, but a platonic friendship might be exactly what he needs.",
            "moviePoster": "/thanksforsharing/thanksforsharingposter.jpg",
            "locationInfo": {
                "address": "Lido Bar, 2168 Frederick Douglass Blvd & West 117th Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/thanksforsharing/thanksforsharing35.jpg",
                "/thanksforsharing/thanksforsharing34.jpg",
                "/thanksforsharing/thanksforsharing33.jpg",
                "/thanksforsharing/thanksforsharing55.jpg",
                "/thanksforsharing/thanksforsharing57.jpg"
            ],
            "neighborhood": "Harlem",
            "comment": ""
        },
        {
            "title": "One Night Stand",
            "year": "1997",
            "summary": "Los Angeles commercials director Max Carlyle (Wesley Snipes) visits his friend, artist Charlie (Robert Downey Jr.), who wasdiagnosed with AIDS in New York. There he meets Karen (Nastassja Kinski), they are attracted to each other and after they meet later that day at the concert,they have a passionate night. Then he returns home to L.A. to his family and wife Mimi (Ming-Na). A year later Max returns to New York again to visitCharlie who is now dying, and there he meets Karen again, who is married to Charlie's brother Vernon (Kyle MacLachlan).",
            "moviePoster": "/onenightstand/onenightstandposter.jpg",
            "locationInfo": {
                "address": "20 Exchange Place and William Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Bride Wars",
            "year": "2009",
            "summary": "In Manhattan, the lawyer Liv Lerner (Kate Hudson) and the school teacher Emma Allan (Anne Hathaway)have been best friends since their childhood. They both are proposed to by their boyfriends on the same day and they plan their wedding parties in Plaza Hotel,using the services of the famous Marion St. Claire. However, due to Marion's secretary's mistake, their weddings are scheduled for the same day. None of them agreesto change the date and they become enemies, trying to sabotage the wedding party of the rival.",
            "moviePoster": "/bridewars/bridewarsposter.jpg",
            "locationInfo": {
                "address": "Pulitzer Fountain, W 58th Street and Grand Army Plaza",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/bridewars/bridewars12.jpg",
                "/bridewars/bridewars05.jpg",
                "/bridewars/bridewars06.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Eraser",
            "year": "1996",
            "summary": "U.S. Marshal deputy John Kruger (Arnold Schwarzenegger) is one of the toughest Marshals, his methods are to \"Erase\" The identities of his witnesses he is assigned to protect. Meanwhile, a woman named Lee Cullen who works for a corporation named Cyrez performed an undercover job for the FBI to unveil a top secret weapon which uses an electromagnetic pulse to dispatch targets. Cyrez discovered this about Lee and are now out to kill her, Kruger's job is now to protect Lee so she can testify against Cyrez. But, when Kruger was assigned to perform a job with another Marshal named Robert Deguerin, he discovers that Deguerin is behind some kind of scam that will involve the EM Gun, which will change hands to a Russian criminal if Kruger does not stop them, Kruger must not only protect Lee's life but his own.",
            "moviePoster": "/eraser/eraserposter.jpg",
            "locationInfo": {
                "address": "Doyers Street and Pell Street, Chinatown",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/eraser/eraser11.jpg",
                "/eraser/eraser10.jpg",
                "/eraser/eraser01.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "The Bag Man",
            "year": "2014",
            "summary": "Jack (John Cusack) is a tough guy with chronic bad luck but human touches. Hired by Dragna (Robert De Niro), a legendary crime boss to complete a simple but unusual task, the plot centers around the anticipated arrival of Dragna who has summoned JACK and a host of shady characters to a remote location for unknown reasons. Over the course of a long and violently eventful night awaiting Dragna's arrival, Jack's path crosses that of RIVKA (Rebecca Da Costa), a stunningly beautiful woman whose life becomes physically and emotionally entangled with Jack's. When Dragna finally arrives on the scene there are sudden and extreme consequences for all.",
            "moviePoster": "/thebagman/thebagmanposter.jpg",
            "locationInfo": {
                "address": "Broadway and Chambers Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "The Sorcerer's Apprentice",
            "year": "2010",
            "summary": "Balthazar Blake (Nicolas Cage) is a master sorcerer in modern-day Manhattan trying to defend the city from hisarch-nemesis, Maxim Horvath (Alfred Molina). Balthazar can't do it alone, so he recruits Dave Stutler (Jay Baruchel), a seemingly average guy who demonstrates hidden potential, as his reluctant protégé. The sorcerer gives his unwilling accomplice a crash course in the art and science of magic, and together, these unlikely partners work to stop the forces of darkness. It'll take all the courage Dave can muster to survive his training, save the city and get the girl as he becomes The Sorcerer's Apprentice.",
            "moviePoster": "/thesorcerersapprentice/thesorcerersapprenticeposter.jpg",
            "locationInfo": {
                "address": "Alley, Franklin Place and White Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/thesorcerersapprentice/thesorcerersapprentice27.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice26.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice53.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice59.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Demolition",
            "year": "2015",
            "summary": "Davis (Jake Gyllenhaal), a successful investment banker, struggles after losing his wife in a tragic car crash. Despite pressure from his father-in-law, Phil (Chris Cooper), to pull it together, Davis continues to unravel. What starts as a complaint letter to a vending machine company turns into a series of letters revealing startling personal admissions. Davis' letters catch the attention of customer service rep, Karen (Naomi Watts), and, amidst emotional and financial burdens of her own, the two form an unlikely connection. With the help of Karen and her son Chris (Judah Lewis), Davis starts to rebuild, beginning with the demolition of the life he once knew.",
            "moviePoster": "/demolition/demolitionposter.jpg",
            "locationInfo": {
                "address": "Office, 250 Greenwich Street and Barclay Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/demolition/demolition08.jpg",
                "/demolition/demolition07.jpg",
                "/demolition/demolition06.jpg",
                "/demolition/demolition23.jpg",
                "/demolition/demolition24.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "The Wanderers",
            "year": "1979",
            "summary": "The Wanderers are an Italian-American gang vying for respect on the streets of the Bronx in 1963. Between rumbles with rivals such as the Ducky Boys and the Fordham Baldies, the group of toughs learn some difficult lessons about life and love. Leader Richie Gennaro (Ken Wahl) finds himself entangled with Despie Galasso (Toni Kalem), the daughter of a mobster, while the artistically inclined Joey (John Friedrich) falls hard for Nina (Karen Allen).",
            "moviePoster": "/thewanderers/thewanderersposter.jpg",
            "locationInfo": {
                "address": "Kingsbridge Terrace",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/thewanderers/thewanderers21.jpg",
                "/thewanderers/thewanderers20.jpg",
                "/thewanderers/thewanderers04.jpg",
                "/thewanderers/thewanderers02.jpg",
                "/thewanderers/thewanderers03.jpg"
            ],
            "neighborhood": "Bronx",
            "comment": ""
        },
        {
            "title": "P.S. I Love You",
            "year": "2007",
            "summary": "Holly Kennedy is beautiful, smart and married to the love of her life - a passionate, funny, and impetuous Irishman named Gerry. So when Gerry's life is taken by an illness, it takes the life out of Holly. The only one who can help her is the person who is no longer there. Nobody knows Holly better than Gerry. So it's a good thing he planned ahead. Before he died, Gerry wrote Holly a series of letters that will guide her, not only through her grief, but in rediscovering herself. The first message arrives on Holly's 30th birthday in the form of a cake, and to her utter shock, a tape recording from Gerry, who proceeds to tell her to get out and \"celebrate herself\". In the weeks and months that follow, more letters from Gerry are delivered in surprising ways, each sending her on a new adventure and each signing off in the same way; P.S. I Love You. Holly's mother and best friends begin to worry that Gerry's letters are keeping Holly tied to the past, but in fact, each letter is pushing her further into a new future. With Gerry's words as her guide, Holly embarks on a journey of rediscovery in a story about marriage, friendship and how a love so strong can turn the finality of death into a new beginning for life.",
            "moviePoster": "/psiloveyou/piiloveyouposter.jpg",
            "locationInfo": {
                "address": "Holly and Gerry's Apartment, 254 Broome Street and Orchard Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/psiloveyou/psiloveyou08.jpg",
                "/psiloveyou/psiloveyou07.jpg",
                "/psiloveyou/psiloveyou09.jpg",
                "/psiloveyou/psiloveyou10.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Sharknado 2: The Second One",
            "year": "22014",
            "summary": "When Fin (Ian Ziering) & April (Tara Reid) are on their way to New York, a Category 7 Hurricane spawns Heavy rain, winds, storm surges, & deadly Sharknadoes. And it's up to Fin & April to save the Big Apple from total devastation.",
            "moviePoster": "/sharknado2/sharknado2poster.jpg",
            "locationInfo": {
                "address": "Circle Line Ferry",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/sharknado2/sharknado2_05.jpg",
                "/sharknado2/sharknado2_04.jpg",
                "/sharknado2/sharknado2_06.jpg",
                "/sharknado2/sharknado2_14.jpg",
                "/sharknado2/sharknado2_15.jpg"
            ],
            "neighborhood": "New York Harbour",
            "comment": ""
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
            "comment": ""
        },
        {
            "title": "Emanuelle and the Last Cannibals",
            "year": "1977",
            "summary": "While doing undercover work in a mental hospital, Emanuelle (Laura Gemser) discovers a girl who seems to havebeen raised by a tribe of amazonian cannibals. Intrigued, Emanuelle and friends travel deep into the Amazon jungle, where they find that the supposedly extinct tribe ofcannibals is still very much alive, and Emanuelle and her party are not welcome visitors.",
            "moviePoster": "/emanuelleandthelastcannibals/emanuelleandthelastcannibalsposter.jpg",
            "locationInfo": {
                "address": "Plymouth Street and Washington Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/emanuelleandthelastcannibals/emanuelleandthelastcannibals21.jpg",
                "/emanuelleandthelastcannibals/emanuelleandthelastcannibals20.jpg",
                "/emanuelleandthelastcannibals/emanuelleandthelastcannibals19.jpg",
                "/emanuelleandthelastcannibals/emanuelleandthelastcannibals34.jpg",
                "/emanuelleandthelastcannibals/emanuelleandthelastcannibals35.jpg"
            ],
            "neighborhood": "Brooklyn",
            "comment": ""
        },
        {
            "title": "Miracle on 34th Street",
            "year": "341947",
            "summary": "At the Macy's Department Store Thanksgiving Day parade, the actor playing Santa is discoveredto be drunk by a whiskered old man. Doris Walker (Maureen O'Hara), the no nonsense special events director, persuades the old man to take his place. The old man proves to be asensation and is quickly recruited to be the store Santa at the main Macy's outlet. While he is successful, Ms. Walker learns that he calls himself Kris Kringle (Edmund Gwenn)and he claims to be the actual Santa Claus. Despite reassurances by Kringle's doctor that he is harmless, Doris still has misgivings, especially when she has cynically trained herself, and especially her daughter, Susan, to reject all notions of belief and fantasy. And yet, people, especially Susan, begin to notice there is something special about Kris and his determination to advance the true spirit of Christmas amidst the rampant commercialism around him and succeeding in improbable ways. When a raucous conflict with the store's cruelly incompetent psychologist erupts, Kris finds himself held at Bellevue where, in despair, he deliberates fails a mental examination to ensure his commitment. All seems lost until Doris' friend, Fred Gaily, reassure Kris of his worth and agrees to represent him in the fight to secure his release. To achieve that, Fred arranges a formal hearing in which he argues that Kris is sane because he is in fact Santa Claus. What ensues is a bizarre hearing in which people's beliefs are reexamined and put to the test, but even so, it's going to take a miracle for Kris to win.",
            "moviePoster": "/miracleon34thstreet/miracleon34thstreetposter.jpg",
            "locationInfo": {
                "address": "New York County Supreme Court, 60 Centre Street, Financial",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/miracleon34thstreet/miracleon34thstreet11.jpg",
                "/miracleon34thstreet/miracleon34thstreet10.jpg",
                "/miracleon34thstreet/miracleon34thstreet09.jpg",
                "/miracleon34thstreet/miracleon34thstreet14.jpg",
                "/miracleon34thstreet/miracleon34thstreet13.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Regarding Henry",
            "year": "1991",
            "summary": "Henry Turner (Harrison Ford) is a despicable and ruthless trial lawyer whose life is turned upside down when he is shot in the head during a robbery. He survives the injury with significant brain damage and must learn again how to speak, walk, and function normally. He has also lost most of the memory of his personal life, and must adjust to life with the family that he does not remember. To the surprise of his wife and daughter, Henry becomes a loving and affectionate man.",
            "moviePoster": "/regardinghenry/regardinghenryposter.jpg",
            "locationInfo": {
                "address": "5th Avenue and East 82nd Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "I Am Legend",
            "year": "2007",
            "summary": "Robert Neville (Will Smith) is a scientist who was unable to stop the spread of the terrible virusthat was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world.For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there.But he is not alone. Mutant victims of the plague -- The Infected -- lurk in the shadows... watching Neville's every move... waiting forhim to make a fatal mistake. Perhaps mankind's last, best hope, Neville is driven by only one remaining mission: to find a way to reversethe effects of the virus using his own immune blood. But he knows he is outnumbered... and quickly running out of time.Video clips from I Am Legend locations",
            "moviePoster": "/iamlegend/iamlegendposter.jpg",
            "locationInfo": {
                "address": "Park Avenue",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/iamlegend/iamlegend10.jpg",
                "/iamlegend/iamlegend28.jpg",
                "/iamlegend/iamlegend27.jpg",
                "/iamlegend/iamlegend29.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Frankie and Johnny",
            "year": "1991",
            "summary": "Johnny (Al Pacino) is a lonely middle-aged man who gets a job in a restaurant owned by a greek family.There, he meets Frankie (Michelle Pfeiffer), a woman who doesn't seem very happy with her life, and he falls in love with her. The problem is that Frankie feelsreally lost in her monotony, so he can't convince her about his feelings.",
            "moviePoster": "/frankieandjohnny/frankieandjohnnyposter.jpg",
            "locationInfo": {
                "address": "Frankie's Apartment, 423 West 45th Street and 9th Avenue",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/frankieandjohnny/frankieandjohnny01.jpg",
                "/frankieandjohnny/frankieandjohnny02.jpg",
                "/frankieandjohnny/frankieandjohnny03.jpg",
                "/frankieandjohnny/frankieandjohnny04.jpg",
                "/frankieandjohnny/frankieandjohnny40.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "The Bourne Ultimatum",
            "year": "2007",
            "summary": "Bourne (Matt Damon) is once again brought out of hiding, this time inadvertently by London-basedreporter Simon Ross who is trying to unveil Operation Blackbriar--an upgrade to Project Treadstone--in a series of newspaper columns. Bourne sets up a meeting withRoss and realizes instantly they're being scanned. Information from the reporter stirs a new set of memories, and Bourne must finally, ultimately, uncover his darkpast whilst dodging The Company's best efforts in trying to eradicate him.",
            "moviePoster": "/thebourneultimatum/thebourneultimatumposter.jpg",
            "locationInfo": {
                "address": "East 56th Street and Park Avenue",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/thebourneultimatum/thebourneultimatum05.jpg",
                "/thebourneultimatum/thebourneultimatum04.jpg",
                "/thebourneultimatum/thebourneultimatum07.jpg",
                "/thebourneultimatum/thebourneultimatum06.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "It Takes Two",
            "year": "1995",
            "summary": "Alyssa (Ashley Olsen) is a rich girl and Amanda (Mary-Kate Olsen) is an orphan, who are two littlegirls who are identical, but complete strangers, that accidentally meet one day. In an attempt to stop Alyssa's father from getting married to Clarice (Jane Sibbett),a conceited know-it-all, the girls get him to meet Amanda's case worker and switch lives to stop the wedding once and for all. Though things don't go exactly asplanned when Alyssa gets adopted and Clarice moves up the wedding.",
            "moviePoster": "/ittakestwo/ittakestwoposter.jpg",
            "locationInfo": {
                "address": "Arden Elizabeth, 691 5th Avenue and East 54th Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "A Late Quartet",
            "year": "2012",
            "summary": "After a classical string quartet's 25 years of success, Peter (Christopher Walken), the cellist andoldest member, decides that he must retire when he learns he has Parkinson's Disease. For the others, that announcement proves a catalyst forletting their hidden resentments come to the surface while the married members' daughter has disruptive desires of her own. All this threatens totear the group apart even as they are famous for playing Beethoven's String Quartet No. 14, opus 131, a piece that is played non-stop no matterhow life interferes.",
            "moviePoster": "/alatequartet/alatequartetposter.jpg",
            "locationInfo": {
                "address": "East 7th Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Deep Impact",
            "year": "1998",
            "summary": "A comet is on a course to collide with Earth, and people must cope with the fact that they will die. The President has devised a plan to keep as many humans alive as possible. Scientists have built giant caves big enough to hold a million people, and the government is going to have a lottery to pick 800,000 people to live in the caves along with 200,000 scientists, artists and doctors.",
            "moviePoster": "/deepimpact/deepimpactposter.jpg",
            "locationInfo": {
                "address": "Battery Park and the Financial District",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/deepimpact/deepimpact04.jpg",
                "/deepimpact/deepimpact03.jpg",
                "/deepimpact/deepimpact14.jpg",
                "/deepimpact/deepimpact05.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Exposed",
            "year": "2016",
            "summary": "Detective Galban (Keanu Reeves), finds his partner and close friend, Detective Cullen murdered in an underground subway. On the huntfor the killer, Galban begins to suspect his partner may have been heavily involved in drug dealing and police corruption. As Galban investigates, people who knew Cullen, are conveniently found dead.The closer Galban gets to the truth, both Cullen's wife and his Lieutenant Christopher McDonald try to persuade him to back off, fearing his findings may discredit Cullen and expose corruptionwithin the Police Department. Galban's only remaining lead is Isabel (Ana de Armas), a young, devout, Latino girl, who resides with her in-laws. Galban fears her life could be in jeopardy should he gettoo close to her. However, Isabel has recently experienced something not from this world, something mystical that she believes is truly a miracle. Not unlike Galban, Isabel is dealing with herown demons from the past; a past that just may lead them to the truth; in turn, bringing both some form of assurance.",
            "moviePoster": "/exposed2016/exposed2016poster.jpg",
            "locationInfo": {
                "address": "West 173rd Street and Wadsworth Avenue",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/exposed2016/exposed18.jpg",
                "/exposed2016/exposed17.jpg",
                "/exposed2016/exposed50.jpg",
                "/exposed2016/exposed34.jpg"
            ],
            "neighborhood": "Washington Heights",
            "comment": ""
        },
        {
            "title": "Side Street",
            "year": "1950",
            "summary": "Joe Norson (Farley Granger), a poor letter carrier with a sweet, pregnant wife, yields to momentary temptation andsteals $30,000 belonging to a pair of ruthless blackmailers who won't stop at murder. After a few days of soul-searching, Joe offers to return the money, only tofind that the \"friend\" he left it with has absconded. Now every move Joe makes plunges him deeper into trouble, as he's pursued and pursuing through the shadowy,sinister side of New York.",
            "moviePoster": "/sidestreet/sidestreetposter.jpg",
            "locationInfo": {
                "address": "Beauty Salon, 29 West 8th Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/sidestreet/sidestreet23.jpg",
                "/sidestreet/sidestreet21.jpg",
                "/sidestreet/sidestreet25.jpg",
                "/sidestreet/sidestreet62.jpg",
                "/sidestreet/sidestreet63.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "They All Laughed",
            "year": "1981",
            "summary": "New York's Odyssey Detective Agency is hired by two different clients tofollow two women suspected of infidelity. Ladies' man John Russo (Ben Gazzara) trails Angela Niotes (Audrey Hepburn), the elegant wife of awealthy Italian industrialist, while Charles Rutledge and Arthur Brodsky follow Dolores Martin (Dorothy Stratten), the beautiful young wife of a jealous husband. Their respective cases arecomplicated when John falls for Angela, and Charles falls for Dolores.",
            "moviePoster": "/theyalllaughed/theyalllaughedposter.jpg",
            "locationInfo": {
                "address": "2nd Avenue and East 20th Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Who's That Girl",
            "year": "1987",
            "summary": "Manhattan lawyer Louden Trott (Griffin Dunne) is about to marry his tycoon boss Simon Worthington's (John McMartin's) spoiled-rotten daughter Wendy (Haviland Morris), albeit with a crushing prenuptial. Simon, however, makes him interrupt the preparations to make sure in person that nobody Nikki Finn (Madonna), just released from a New York jail, takes the bus to meet her Philadelphia parole officer. Picking up a cat (actually a rare mountain lion) for even richer Montgomery Bell (Sir John Mills) proves to be bad enough, but Nikki takes the cake when it comes to provoking, manipulating, and surprising. Furthermore, they are tailed by a couple of criminal goons and a bickering pair of police detectives who are after the key to evidence which Nikki claims proves she was framed by corrupt Worthington.",
            "moviePoster": "/whosthatgirl/whosthatgirlposter.jpg",
            "locationInfo": {
                "address": "Brooklyn Bridge Park Pier 2",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/whosthatgirl/whosthatgirl303.jpg",
                "/whosthatgirl/whosthatgirl302.jpg",
                "/whosthatgirl/whosthatgirl300.jpg",
                "/whosthatgirl/whosthatgirl385.jpg"
            ],
            "neighborhood": "Brooklyn",
            "comment": ""
        },
        {
            "title": "Return to Montauk",
            "year": "2017",
            "summary": "It is winter in Montauk, at the far end of Long Island. There are two deck chairs on the windswept beach. The chairs are waiting for two people who have, for a long time, been lost to each other. He is a writer and has come from Berlin. She is a New York lawyer. Many years before, they had a fling, but they were too young to know they had each met the love of their lives. Now they have come back to Montauk, filled with regret and hope. The bodies remember. It feels for them like the next day after the last one they were together. They do not know if it is possible to reverse time. In Montauk, they find out.",
            "moviePoster": "/returntomontauk/returntomontaukposter.jpg",
            "locationInfo": {
                "address": "Apartment, 23 Henry Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/returntomontauk/returntomontauk41.jpg",
                "/returntomontauk/returntomontauk40.jpg",
                "/returntomontauk/returntomontauk39.jpg",
                "/returntomontauk/returntomontauk59.jpg",
                "/returntomontauk/returntomontauk61.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
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
            "comment": ""
        },
        {
            "title": "Heavy Petting",
            "year": "2007",
            "summary": "When Charlie (Brendan Hines) meets Daphne (Malin Akerman) - the girl of his dreams - he never expects he'll haveto battle past her pet dog \"Babydoll\" to woo her. And just when it seems he can't beat the beast and all is lost, something unexpected happens:Charlie begins to fall in love with the dog himself, realizing he never really needed a girlfriend in the first place. Now, in order to keephanging out with \"man's best friend\", Charlie must scramble to keep the relationship with Daphne going at all costs - or risk losing them both.",
            "moviePoster": "/heavypetting/heavypettingposter.jpg",
            "locationInfo": {
                "address": "Pet Shop, 192 5th Avenue and Sackett Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/heavypetting/heavypetting03.jpg",
                "/heavypetting/heavypetting02.jpg",
                "/heavypetting/heavypetting01.jpg",
                "/heavypetting/heavypetting04.jpg"
            ],
            "neighborhood": "Brooklyn",
            "comment": ""
        },
        {
            "title": "Purple Violets",
            "year": "2007",
            "summary": "Patti Petalson (Selma Blair) is a promising writer, but her marriage and conventional job keep her from her dream. She longs to return to her writing, especially after running into her first love Brian Callahan (Patrick Wilson), a successful crime novelist. Kate (Debra Messing) is Patti's best friend since college. She's a tough-talking schoolteacher who plays therapist to all Patti's problems, while she's got a few of her own. Despite Brian's gorgeous Tribeca loft and perfect house in the Hamptons, he longs to write works of greater literary value. Michael Murphy (Edward Burns), his lawyer and best friend from college still carries a flame for his former girlfriend Kate, even though their relationship ended badly years ago. She holds a major grudge, but he would go to any length just to win Kate back, knowing his feelings for her never went away. He tried to forget over the years but since he spotted Kate in the restaurant she was all he could think about. When Patti sells Murphy a new apartment, and Brian publishes his personal novel, these old friends reconnect in unexpected ways with surprising results.",
            "moviePoster": "/purpleviolets/purplevioletsposter.jpg",
            "locationInfo": {
                "address": "Queensboro Bridge, East 59th Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/purpleviolets/purpleviolets36.jpg",
                "/purpleviolets/purpleviolets35.jpg",
                "/purpleviolets/purpleviolets69.jpg",
                "/purpleviolets/purpleviolets70.jpg"
            ],
            "neighborhood": "New York",
            "comment": ""
        },
        {
            "title": "My Last Day Without You",
            "year": "2011",
            "summary": "On a one-day business trip to New York, a young German business executive (Ken Duken) falls in love with a singer-songwriter(Nicole Beharie) who exposes him to her Brooklyn world and emotions he's never experienced before.",
            "moviePoster": "/mylastdaywithoutyou/mylastdaywithoutyouposter.jpg",
            "locationInfo": {
                "address": "One Battery Park Plaza, State Street and Bridge Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/mylastdaywithoutyou/mylastdaywithoutyou09.jpg",
                "/mylastdaywithoutyou/mylastdaywithoutyou02.jpg",
                "/mylastdaywithoutyou/mylastdaywithoutyou01.jpg",
                "/mylastdaywithoutyou/mylastdaywithoutyou22.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "New York Minute",
            "year": "2004",
            "summary": "Over a 24 hour period, 17-year-old sisters Jane (Ashley Olsen) and Roxy (Mary-Kate Olsen) Ryan,adversaries who begrudgingly journey together from their Long Island home to New York, where overachiever Jane is due to delivera speech to qualify for a prestigious college scholarship abroad. Meanwhile, laid-back punk rock rebel Roxy hopes to get backstageat an underground music video shoot for punk pop band Simple Plan so that she can slip her demo tape to the group. However,Roxy and Jane's plans go awry when a mix-up involving Jane's day planner lands them in the middle of a shady black-market transaction.Pursued by an overzealous truant officer and accused of kidnapping a dog belonging to a senator, the Ryan's must find a way to worktogether to thwart the forces threatening to jeopardize Jane's college dreams and ship Roxy off to a convent school.",
            "moviePoster": "/newyorkminute/newyorkminuteposter.jpg",
            "locationInfo": {
                "address": "The Plaza Hotel, 750 5th Avenue and Central Park South",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/newyorkminute/newyorkminute157.jpg",
                "/newyorkminute/newyorkminute156.jpg",
                "/newyorkminute/newyorkminute155.jpg",
                "/newyorkminute/newyorkminute206.jpg",
                "/newyorkminute/newyorkminute207.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "The Sorcerer's Apprentice",
            "year": "2010",
            "summary": "Balthazar Blake (Nicolas Cage) is a master sorcerer in modern-day Manhattan trying to defend the city from hisarch-nemesis, Maxim Horvath (Alfred Molina). Balthazar can't do it alone, so he recruits Dave Stutler (Jay Baruchel), a seemingly average guy who demonstrates hidden potential, as his reluctant protégé. The sorcerer gives his unwilling accomplice a crash course in the art and science of magic, and together, these unlikely partners work to stop the forces of darkness. It'll take all the courage Dave can muster to survive his training, save the city and get the girl as he becomes The Sorcerer's Apprentice.",
            "moviePoster": "/thesorcerersapprentice/thesorcerersapprenticeposter.jpg",
            "locationInfo": {
                "address": "Bowling Green Park, Broadway",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/thesorcerersapprentice/thesorcerersapprentice50.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice49.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice48.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice65.jpg",
                "/thesorcerersapprentice/thesorcerersapprentice66.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Eat Pray Love",
            "year": "2010",
            "summary": "Liz Gilbert (Julia Roberts) had everything a modern woman is supposed to dream of having -a husband, a house, a successful career - yet like so many others, she found herself lost, confused, and searching for what she really wanted in life.Newly divorced and at a crossroads, Gilbert steps out of her comfort zone, risking everything to change her life, embarking on a journey around the world thatbecomes a quest for self-discovery. In her travels, she discovers the true pleasure of nourishment by eating in Italy; the power of prayer in India, and,finally and unexpectedly, the inner peace and balance of true love in Bali.",
            "moviePoster": "/eatpraylove/eatprayloveposter.jpg",
            "locationInfo": {
                "address": "Robin Des Bois Cafe, 195 Smith Street and Warren Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/eatpraylove/eatpraylove10.jpg",
                "/eatpraylove/eatpraylove09.jpg",
                "/eatpraylove/eatpraylove08.jpg",
                "/eatpraylove/eatpraylove03.jpg",
                "/eatpraylove/eatpraylove11.jpg"
            ],
            "neighborhood": "Brooklyn",
            "comment": ""
        },
        {
            "title": "Fading Gigolo",
            "year": "2013",
            "summary": "In Brooklyn, the bankrupted owner of a book store Fioravante (John Turturro) is forced to closehis family business. His best friend Murray (Woody Allen) tells him that his dermatologist Dr. Parker (Sharon Stone) dreams of having a threesome and would pay a thousanddollars to have one with her friend Selima (Sofía Vergara). Murray proposes to be Fioravante's pimp and they start a male prostitution business. When Fioravantemeets the Jewish Avigal, who is the widow of a rabbi, they fall in love with each other. But the Jewish Dovi loves Avigal (Vanessa Paradis) and will make life difficult for Murray.",
            "moviePoster": "/fadinggigolo/fadinggigoloposter.jpg",
            "locationInfo": {
                "address": "Grand Avenue and Clifton Place",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Brooklyn",
            "comment": ""
        },
        {
            "title": "Cruel Intentions 2",
            "year": "22000",
            "summary": "When the roguish Sebastian (Robin Dunne) reunites with his wicked stepsister Kathryn (Amy Adams) in their grand new townhome in New York, heplans to put his past behind him and become a one-woman man. Especially after meeting the stunningly innocent Danielle (Sarah Thompson), the daughter of Manchester Prep'sHeadmaster. But after being crossed by Sebastian, Kathryn plots to test the strength of the lovers' relationship by throwing a few curves - namely herself -at her step-brother. Can Sebastian resist Kathryn's ample charms and dedicate himself solely to educating the naïve Danielle in the ways of love? Everything is up forgrabs, and nothing is what it seems in this deliciously tantalizing tale of corruption, domination and seduction.",
            "moviePoster": "/cruelintentions2/cruelintentions2_poster.jpg",
            "locationInfo": {
                "address": "Times Square",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/cruelintentions2/cruelintentions2_02.jpg",
                "/cruelintentions2/cruelintentions2_01.jpg",
                "/cruelintentions2/cruelintentions2_12.jpg",
                "/cruelintentions2/cruelintentions2_13.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Woo",
            "year": "1998",
            "summary": "Darlene \"Woo\" Bates (Jada Pinkett Smith) has been dumped a little bit too many times,now this femme-fatale doesn't let just any man swing with her, and when she's set up on a blind-date, it could be love.. if they don't kill each other first.",
            "moviePoster": "/woo/wooposter.jpg",
            "locationInfo": {
                "address": "West 42nd Street and 6th Avenue",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/woo/woo01.jpg",
                "/woo/woo10.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Sorry, Haters",
            "year": "2005",
            "summary": "Ashade is a Syrian chemist who drives a cab in New York City and looks after his French-speakingsister-in-law and her child while they seek the release of Ashade's brother, a Canadian citizen grabbed at JFK by US intelligence and rendered to Syria.One night, Ashade takes a fare to New Jersey and back, a high-strung woman who says her name is Philly (Robin Wright) and that she's a producer of reality TV including\"Sorry, Haters,\" an envy-stoking show about the wealth of the stars. Philly pushes into Ashade's life and promises help from a lawyer, but then simply takesAshade's savings. His discovering who she really is and his attempts to get his life back take the rest of the film.",
            "moviePoster": "/sorryhaters/sorryhatersposter.jpg",
            "locationInfo": {
                "address": "East 22nd Street and Park Avenue",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/sorryhaters/sorryhaters04.jpg",
                "/sorryhaters/sorryhaters02.jpg",
                "/sorryhaters/sorryhaters01.jpg",
                "/sorryhaters/sorryhaters13.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "August",
            "year": "2008",
            "summary": "Tom (Josh Hartnett) and Josh Sterling (Adam Scott) have a start-up dot-com. It's gone public to initial success. Josh is the technical genius. Tom is the fast-talking and abrasive CEO, in charge of the business side. It's August, 2001, less than a month before they can sell their shares and, perhaps, make lots of money. But the company is running out of cash, its main client is stalling, and share values are falling. For Tom to maintain the firm's appearance, he must find cash: investors could rescue him, but at a high cost of his potential wealth and company control. Tom goes to his brother for a loan. At the same time, an old flame, Sarrah, comes back to the city. Can Tom hold things together, bravura and all?",
            "moviePoster": "/august/augustposter.jpg",
            "locationInfo": {
                "address": "Office, 180 Maiden Lane and Front Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/august/august07.jpg",
                "/august/august06.jpg",
                "/august/august05.jpg",
                "/august/august28.jpg",
                "/august/august21.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Gloria",
            "year": "1999",
            "summary": "Gloria (Sharon Stone) has just gotten out of prison, where she has served three years to save her boyfriend,Kevin (Jeremy Northam). During her stay in prison, she thinks about how Kevin never once visited her. She goes to Kevin and tells him that the relationship is over andthat all she wants is the money he promised her for taking the rap for him. He refuses to give it to her. Meanwhile, the gang's accountant has tried to give himself someprotection by creating a computer disk which has the names of all those involved in the outfit's criminal activities. The plan backfires, and, in trying to get the disk,one of Kevin's trigger happy henchmen kills the accountant, as well as his wife, mother and daughter. Only his seven-year old son Nicky (Jean-Luke Figueroa) escapes, butis quickly caught and brought to Kevin's apartment. It is there that Gloria and Nicky's paths cross. Gloria must decide whether or not to risk her life in order to save the boy.",
            "moviePoster": "/gloria/gloriaposter.jpg",
            "locationInfo": {
                "address": "West 158th Street and Broadway",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/gloria/gloria13.jpg",
                "/gloria/gloria14.jpg",
                "/gloria/gloria34.jpg",
                "/gloria/gloria33.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Then She Found Me",
            "year": "2007",
            "summary": "Deeply religious April Epner (Helen Hunt), a 39-year-old Brooklyn elementary school teacher, finds her life derailed by a series of events over which she has no control. Her husband Ben abruptly leaves her, her abrasive adoptive mother Trudy passes away the following day, and shortly after she is contacted by Alan, a representative of Bernice Graves, the flamboyant host of a local talk show, who introduces herself as her biological mother.\nAlthough intrigued by Bernice's claim she was fathered by Steve McQueen, April initially resists her efforts to forge a relationship. At the same time, she finds herself attracted to Frank, the divorced father of one of her students, as the two get to know each other via lengthy telephone conversations. For their first date he escorts her to a party at Bernice's apartment.\nComplications arise when April discovers she is pregnant, the result of a quick and clumsy coupling with Ben on the kitchen floor just before he left her. April has longed to have a child all her life and is delighted with the news, but is confused and upset by Ben's sudden return, Frank's hasty departure, and Bernice's insistent attempts to create a bond btw them. Not helping the situation is the discovery Bernice voluntarily put her up for adoption a full year after her birth and not three days later at the urging of her parents, according to the scenario she initially presented. When April miscarries, her brother Freddy tries to counsel her, but ultimately she must rely on her deep-rooted faith to deal with the betrayals she has suffered not only at the hands of those she trusted but by the God she worships as well.",
            "moviePoster": "/thenshefoundme/thenshefoundmeposter.jpg",
            "locationInfo": {
                "address": "East 78th Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/thenshefoundme/thenshefoundme08.jpg",
                "/thenshefoundme/thenshefoundme07.jpg",
                "/thenshefoundme/thenshefoundme06.jpg",
                "/thenshefoundme/thenshefoundme01.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Anger Management",
            "year": "2003",
            "summary": "Mild-mannered timid businessman Dave Buznik (Adam Sandler) who works for a pet clothing companyout of New York City. He's got an abrasive boss named Mr. Frank Head who frequently takes credit for his work and steps on him in return. He's got a loving girlfriend,Linda (Marisa Tomei), whose best friend is her condescending college ex, Andrew. But when a misunderstanding aboard an airplane goes haywire, Dave is ordered by thecourt to undergo anger management therapy at the hands of specialist Dr. Buddy Rydell (Jack Nicholson), who is an unpredictable, psychopathic character. As therelationship between Dave and Buddy becomes more tense, when the unorthodox treatment wreaks havoc Dave's life, and Buddy might be the only one who can save himfrom a problem he recognizes right away in his patient, that could only get worse.",
            "moviePoster": "/angermanagement/angermanagementposter.jpg",
            "locationInfo": {
                "address": "St Bartholomew's Church, 325 Park Avenue and East 50th Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "The Object of My Affection",
            "year": "1998",
            "summary": "George (Paul Rudd) and Nina (Jennifer Aniston) seem like the perfect couple. They share a cozy Brooklyn apartment, ataste for tuna casserole dinners, and a devotion to ballroom dancing. They love each other. There's only one hitch: George is gay. And when Nina announces she's pregnant, thingsget especially complicated. Vince - Nina's overbearing boyfriend and the baby's father-wants marriage. Nina wants independence. George will do anything for a little unqualifiedaffection, but is he ready to become an unwed surrogate dad?",
            "moviePoster": "/theobjectofmyaffection/theobjectofmyaffectionposter.jpg",
            "locationInfo": {
                "address": "Central Park Zoo, Central Park",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/theobjectofmyaffection/theobjectofmyaffection26.jpg",
                "/theobjectofmyaffection/theobjectofmyaffection25.jpg",
                "/theobjectofmyaffection/theobjectofmyaffection23.jpg",
                "/theobjectofmyaffection/theobjectofmyaffection35.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Léon, The Professional",
            "year": "1994",
            "summary": "Mathilda (Natalie Portman), a twelve-year old New York girl, is living an undesirable life among her half-family.Her father stores drugs for two-faced cop Norman Stansfield (Gary Oldman). Only her little brother keeps Mathilda from breaking apart. One day, Stansfield and his team takecruel revenge on her father for stretching the drugs a little, thus killing the whole family. Only Mathilda, who was out shopping, survives by finding shelterin Léon's apartment in the moment of highest need. Soon, she finds out about the strange neighbour's unusual profession - killing - and desperately seeks hishelp in taking revenge for her little brother. Léon (Jean Reno), who is completely unexperienced in fatherly tasks, and in friendships, does his best to keep Mathilda outof trouble - unsuccessfully. Now, the conflict btw a killer, who slowly discovers his abilities to live, to feel, to love and a corrupt police officer,who does anything in his might to get rid of an eye witness, arises to unmeasurable proportions - all for the sake of a little twelve-year old girl, who has nearly nothing to lose.",
            "moviePoster": "/leon/leonposter.jpg",
            "locationInfo": {
                "address": "3812 Broadway and West 159th Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/leon/leon79.jpg",
                "/leon/leon78.jpg",
                "/leon/leon77.jpg",
                "/leon/leon85.jpg",
                "/leon/leon97.jpg"
            ],
            "neighborhood": "Harlem",
            "comment": ""
        },
        {
            "title": "Ghostbusters 2",
            "year": "21989",
            "summary": "Sidelined for five years since their spectacular save (an near destruction) of New York City,the superstars of the supernatural spring back into action when the infant son of single-mother Dana Barrett becomes the target of a powerful demonic force.Reunited with the no-nonsense Zeddemore, nerdy near-sighted Louis and their ever-industrious secretary Janine, the heroes of the hereafter must put a stop toan enormous underground river of slime ready to rot the roots of the entire Big Apple. Now, if your hometown was on the verge of being sucked down into the 10thlevel of Hell, who else would you call?",
            "moviePoster": "/ghostbusters2/Ghostbusters2poster.jpg",
            "locationInfo": {
                "address": "East 77th Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Confessions of a Shopaholic",
            "year": "2009",
            "summary": "Struggling with her debilitating obsession with shopping and the sudden collapse of her income source, Rebecca Bloomwood (Isla Fisher)unintentionally lands a job writing for a financial magazine after a drunken letter-mailing mix-up. Ironicallywriting about the very consumer caution of which she herself has not abided, Rebecca's innovative comparisons and unconventional metaphors for economics grants her criticalacclaim, public success, and the admiration of her supportive boss Luke. But as she draws closer to her ultimate goal of writing for renowned fashion magazine Alette, shequestions her true ambitions and must determine if overcoming her \"shopaholic\" condition will bring her real happiness.",
            "moviePoster": "/confessionsofashopaholic/confessionsofashopaholicposter2.jpg",
            "locationInfo": {
                "address": "Kleinfeld Store, 110 West 20th Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/confessionsofashopaholic/confessionsofashopaholic48.jpg",
                "/confessionsofashopaholic/confessionsofashopaholic47.jpg",
                "/confessionsofashopaholic/confessionsofashopaholic46.jpg",
                "/confessionsofashopaholic/confessionsofashopaholic103.jpg",
                "/confessionsofashopaholic/confessionsofashopaholic98.jpg"
            ],
            "neighborhood": "Manhattan.",
            "comment": ""
        },
        {
            "title": "New Jack City",
            "year": "1991",
            "summary": "The gangster Nino (Wesley Snipes) has a gang who call themselves Cash Money Brothers.They get into the crack business and not before long they make a million dollars every week. A cop, Scotty (Ice-T), is after them. He tries to get intothe gang by letting an ex-drug addict infiltrate the gang, but the attempt fails miserably. The only thing that remains is that Scotty himselfbecomes a drug pusher.",
            "moviePoster": "/newjackcity/newjackcityposter.jpg",
            "locationInfo": {
                "address": "Grant's Tomb, West 122th Street & Riverside Drive",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "One Fine Day",
            "year": "1996",
            "summary": "Melanie Parker (Michelle Pfeiffer), an architect and mother of Sammy, and Jack Taylor (George Clooney), anewspaper columnist and father of Maggie, are both divorced. They meet one morning when overwhelmed Jack is left unexpectedly with Maggie and forgets that Melanie wasto take her to school. As a result, both children miss their school field trip and are stuck with the parents. The two adults project their negative stereotypes ofex-spouses on each other, but end up needing to rely on each other to watch the children as each must save his job. Humor is added by Sammy's propensity for lodgingobjects in his nose and Maggie's tendency to wander.",
            "moviePoster": "/onefineday/onefinedayposter.jpg",
            "locationInfo": {
                "address": "Carnegie Deli, 854 7th Avenue and West 55th Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Begin Again",
            "year": "2013",
            "summary": "Gretta (Keira Knightley) and her long-time boyfriend Dave (Adam Levine) are college sweethearts and songwriting partnerswho decamp for New York when he lands a deal with a major label. But the trappings of his new-found fame soon tempt Dave to stray, and a reeling, lovelorn Gretta is left on herown. Her world takes a turn for the better when Dan (Mark Ruffalo), a disgraced record-label exec, stumbles upon her performing on an East Village stage and is immediatelycaptivated by her raw talent. From this chance encounter emerges an enchanting portrait of a mutually transformative collaboration, set to the soundtrack of a summer in New York City.",
            "moviePoster": "/beginagain/beginagainposter.jpg",
            "locationInfo": {
                "address": "Avenue B and East 6th Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/beginagain/beginagain13.jpg",
                "/beginagain/beginagain12.jpg",
                "/beginagain/beginagain81.jpg",
                "/beginagain/beginagain82.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Here and Now",
            "year": "2018",
            "summary": "Vivienne (Sarah Jessica Parker), is an established singer/songwriter with a successful music career. On the eve of a major performance, Vivienne receives some life-altering news that causes her to reevaluate her priorities. As she crisscrosses the busy streets of New York City, she tries to balance her upcoming music tour, family, and friends. With the support of her overbearing mother, Jeanne (Jacqueline Bisset), her long-time manager, Ben, and her ex-husband, Nick (Simon Baker), Vivienne strives to make peace with the decisions and sacrifices she's made along the way.",
            "moviePoster": "/hereandnow/hereandnowposter.jpg",
            "locationInfo": {
                "address": "Riverside Drive and West 157th Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Washington Heights",
            "comment": ""
        },
        {
            "title": "Wall Street: Money Never Sleeps",
            "year": "2010",
            "summary": "In 2001, corporate raider Gordon Gecko (Michael Douglas) completes a prisonsentence for money laundering. No one is there to meet him. Jump seven years: Gecko is promoting his book, his estranged daughter Winnie is apolitical muckraker engaged to Jake Moore (Shia LaBeouf), a hot-shot Wall Street trader, and an old nemesis of Gecko's, Bretton James, devours the firm Jakeworks for. When Jake's mentor takes his life, Jake wants revenge and Gordon may be the perfect ally. With the fiscal crisis of September 2008as background, can Jake maintain Winnie's love, broker a rapprochement with her father, get his revenge, and find funds for a green-energyproject he champions; or will greed trump all?",
            "moviePoster": "/wallstreet2/wallstreet2poster.jpg",
            "locationInfo": {
                "address": "Winnie Gekko's Apartment, 41 Charlton Street and 6th Avenue",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Two Weeks Notice",
            "year": "2002",
            "summary": "Lucy Kelson (Sandra Bullock) is a Chief Counsel for the Wade Corporation, one of New York City's top commercial real estate developers.She's a brilliant lawyer with a sharp, strategic mind. She also has an ulcer and doesn't get much sleep. It's not the job that's getting to her. It's her millionaire boss,George Wade (Hugh Grant). Handsome, charming and undeniably self-absorbed, he treats her more like a nanny than a Harvard Law grad and can barely choose a tie without her help.Now, after one year of calling the shots-on everything from his clothes to his divorce settlements - Lucy Kelson is calling it quits.",
            "moviePoster": "/twoweeksnotice/twoweeksnoticeposter.jpg",
            "locationInfo": {
                "address": "Lucy's Office, 55 Water Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/twoweeksnotice/twoweeksnotice167.jpg",
                "/twoweeksnotice/twoweeksnotice166.jpg",
                "/twoweeksnotice/twoweeksnotice165.jpg",
                "/twoweeksnotice/2weeksnotice33.jpg",
                "/twoweeksnotice/twoweeksnotice220.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Doppelganger",
            "year": "1993",
            "summary": "Holly Gooding (Drew Barrymore) moves from NYC to LA after a murder, in which she is implicated. She is followed by what is apparently her evil alter- ego. She moves into a room for rent by a writer, and he begins having an affair with her, but after some strange things happen, he's not so sure if the affair is with her or her doppelganger.",
            "moviePoster": "/doppelganger/doppelgangerposter.jpg",
            "locationInfo": {
                "address": "5th Avenue and West 59th Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Teenage Mutant Ninja Turtles",
            "year": "2014",
            "summary": "Darkness has settled over New York City as Shredder and his evil Foot Clan have an iron grip on everything from the police to the politicians. The future is grim until four unlikely outcast brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must work with fearless reporter April O'Neil (Megan Fox) and her cameraman Vern Fenwick to save the city and unravel Shredder's diabolical plan.",
            "moviePoster": "/tmnt/tmntposter.jpg",
            "locationInfo": {
                "address": "5th Avenue",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/tmnt/tmnt11.jpg",
                "/tmnt/tmnt08.jpg",
                "/tmnt/tmnt07.jpg",
                "/tmnt/tmnt01.jpg",
                "/tmnt/tmnt34.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Bridge of Spies",
            "year": "2015",
            "summary": "In the cold war, a lawyer, James B. Donovan (Tom Hanks) is recruited by the CIA and involved in an intense negotiation mission to release and exchange aCIA U-2 spy-plane pilot, Francis G. Powers. The pilot was arrested alive after his plane was shot down by the Soviet Union during a mission and stays in the company of a KGB intelligence officer, Rudolf Abel (Mark Rylance), who was arrested for espionage in the US.",
            "moviePoster": "/bridgeofspies/bridgeofspiesposter.jpg",
            "locationInfo": {
                "address": "Rudolf's Workshop, 135 Plymouth Street and Anchorage Place",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/bridgeofspies/bridgeofspies04.jpg",
                "/bridgeofspies/bridgeofspies01.jpg",
                "/bridgeofspies/bridgeofspies02.jpg",
                "/bridgeofspies/bridgeofspies03.jpg",
                "/bridgeofspies/bridgeofspies29.jpg"
            ],
            "neighborhood": "Brooklyn",
            "comment": ""
        },
        {
            "title": "The Dark Tower",
            "year": "2017",
            "summary": "Roland Deschain (Idris Elba), the last Gunslinger, is locked in an eternal battle with Walter O'Dim (Matthew McConaughey), also known as the Man in Black. The Gunslinger must prevent the Man in Black from toppling the Dark Tower, the key that holds the universe together. With the fate of worlds at stake, two men collide in the ultimate battle between good and evil.",
            "moviePoster": "/thedarktower/thedarktowerposter2.jpg",
            "locationInfo": {
                "address": "Lexington Avenue",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "The Art of Getting By",
            "year": "2011",
            "summary": "Believing the quote that you are born alone, die alone and everything else is an illusion,George (Freddie Highmore) doesn't see the point of life, school, or homework. Then he meets Sally (Emma Roberts) and he now has a reason to go to schooland make friends, even if he's not ready to admit to himself or to her that he likes her. The school's principal and art teacher introduce him to an alumni,and successful artist, Dustin, who can help guide George along life's path, but other distractions start surfacing, and George might not even be able tograduate from high school.",
            "moviePoster": "/theartofgettingby/theartofgettingbyposter.jpg",
            "locationInfo": {
                "address": "East 3rd Street and 2nd Avenue",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/theartofgettingby/theartofgettingby41.jpg",
                "/theartofgettingby/theartofgettingby40.jpg",
                "/theartofgettingby/theartofgettingby39.jpg",
                "/theartofgettingby/theartofgettingby72.jpg",
                "/theartofgettingby/theartofgettingby73.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "One Fine Day",
            "year": "1996",
            "summary": "Melanie Parker (Michelle Pfeiffer), an architect and mother of Sammy, and Jack Taylor (George Clooney), anewspaper columnist and father of Maggie, are both divorced. They meet one morning when overwhelmed Jack is left unexpectedly with Maggie and forgets that Melanie wasto take her to school. As a result, both children miss their school field trip and are stuck with the parents. The two adults project their negative stereotypes ofex-spouses on each other, but end up needing to rely on each other to watch the children as each must save his job. Humor is added by Sammy's propensity for lodgingobjects in his nose and Maggie's tendency to wander.",
            "moviePoster": "/onefineday/onefinedayposter.jpg",
            "locationInfo": {
                "address": "1 Centre Street and Chambers Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "The Freshman",
            "year": "1990",
            "summary": "Clark Kellogg (Matthew Broderick) is a young man starting his first year at film school in New YorkCity. After a small time crook steals all his belongings, Clark meets Carmine \"Jimmy the Toucan\" Sabatini (Marlon Brando), an \"importer\" bearing a startlingresemblance to a certain cinematic godfather. When Sabatini makes Clark an offer he can't refuse, he finds himself caught up in a caper involvingendangered species and fine dining.",
            "moviePoster": "/thefreshman/thefreshmanposter.jpg",
            "locationInfo": {
                "address": "Washington Square North, Greenwich Village",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/thefreshman/thefreshman15.jpg",
                "/thefreshman/thefreshman14.jpg",
                "/thefreshman/thefreshman39.jpg",
                "/thefreshman/thefreshman38.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Lola Versus",
            "year": "2012",
            "summary": "Lola (Greta Gerwig) is 29 years-old and is happily engaged to her perfectman, Luke (Joel Kinnaman). But just three weeks before her big day, Luke calls it off, and Lola is forced to re-group as she cancels the wedding.While struggling to find happiness through sexual flings with her best friend, first dates with strangers, and attempts at re-connecting with herex-fiancé, Lola realizes she's going to have to find herself first before she can find love and happiness.",
            "moviePoster": "/lolaversus/lolaversusposter.jpg",
            "locationInfo": {
                "address": "Times Square",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
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
            "comment": "The 16ft piano that Tom Hanks walked on has been given to a US children's museum in \nPhiladelphia, Pennsylvania. The instrument was offered to the Please Touch Museum by a US couple who bought it after the film&apos;s release. It was built in Philadelphia by \nRemo Saraceni, who called his invention a Walking Piano. The three-octave piano went on display in January 2009."
        },
        {
            "title": "You Stupid Man",
            "year": "2002",
            "summary": "A young man named Owen (David Krumholtz), who can't get over his would-be fiancee and nowex-girlfriend, Chloe (Denise Richards), who moved to Los Angeles to become a TV star, finally falls in love with Nadine (Milla Jovovich), the girl who would've been their maidof honor. Soon after, however, his ex loses her TV show, and comes back home, looking to reunite.",
            "moviePoster": "/youstupidman/youstupidmanposter.jpg",
            "locationInfo": {
                "address": "Commerce Street and Bedford Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/youstupidman/youstupidman03.jpg",
                "/youstupidman/youstupidman02.jpg",
                "/youstupidman/youstupidman01.jpg",
                "/youstupidman/youstupidman33.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Ass Backwards",
            "year": "2013",
            "summary": "Two childhood best friends Kate (June Diane Raphael) and Chloe (Casey Wilson) who are pushing the age of 30and not quite where they thought they'd be in life. When they run into their former beauty pageant nemesis, Laurel (Alicia Silverstone), they decide to go on a road trip backhome to recapture the pageant crown which eluded them as children. On the road, they face some hard truths about themselves and each other as they encounter spring breakers,strip clubs, a women's militant group and their favorite reality star. This heightened comedic awakening leads us into an unforgettable third act finale that is the girls'homecoming and final reckoning with their past, present and future.",
            "moviePoster": "/assbackwards/assbackwardsposter.jpg",
            "locationInfo": {
                "address": "Manhattan Bridge, East River",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/assbackwards/assbackwards14.jpg",
                "/assbackwards/assbackwards13.jpg",
                "/assbackwards/assbackwards12.jpg",
                "/assbackwards/assbackwards21.jpg",
                "/assbackwards/assbackwards19.jpg"
            ],
            "neighborhood": "Lower Manhattan",
            "comment": ""
        },
        {
            "title": "Anjaana Anjaani",
            "year": "2010",
            "summary": "The story of two strangers on an odyssey of discovery -- down a path that is ridden with theexquisite pain and joy of falling in love, only they don't realize it. A series of hilarious misadventures trace their bi coastal road journey as they go aboutfulfilling their last wishes. But then life interrupts, as is its habit; and painful choices must be made. The duo part with the understanding that their daystogether were a brief interlude of insanity that had to succumb to real life. They part as they met - as strangers.",
            "moviePoster": "/anjaanaanjaani/anjaanaanjaaniposter.jpg",
            "locationInfo": {
                "address": "Morris Street and Broadway, Financial",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/anjaanaanjaani/anjaanaanjaani04.jpg",
                "/anjaanaanjaani/anjaanaanjaani03.jpg",
                "/anjaanaanjaani/anjaanaanjaani24.jpg",
                "/anjaanaanjaani/anjaanaanjaani25.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Lola Versus",
            "year": "2012",
            "summary": "Lola (Greta Gerwig) is 29 years-old and is happily engaged to her perfectman, Luke (Joel Kinnaman). But just three weeks before her big day, Luke calls it off, and Lola is forced to re-group as she cancels the wedding.While struggling to find happiness through sexual flings with her best friend, first dates with strangers, and attempts at re-connecting with herex-fiancé, Lola realizes she's going to have to find herself first before she can find love and happiness.",
            "moviePoster": "/lolaversus/lolaversusposter.jpg",
            "locationInfo": {
                "address": "East 10th Street and Stuyvesant Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/lolaversus/lolaversus30.jpg",
                "/lolaversus/lolaversus29.jpg",
                "/lolaversus/lolaversus99.jpg",
                "/lolaversus/lolaversus101.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "Lulu on the Bridge",
            "year": "1998",
            "summary": "Izzy Maurer (Harvey Keitel), a jazz saxophonist loses his capability to play when he is injured in a shooting at acafé where he was playing. He sinks into depression when everyone charges in to take care of him, including his ex-wife. However, he discovers a stonewith a telephone number attached. Returning the stone, he meets Celia Burns (Mira Sorvino), a young aspiring actress who in one of those film coincidences is listening to his music.Soon the two begin an affair which is fouled by his over-obsessiveness with her which costs them both a job at a restaurant.",
            "moviePoster": "/luluonthebridge/luluonthebridgeposter.jpg",
            "locationInfo": {
                "address": "Restaurant, 201A West 79th Street and Amsterdam Avenue",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "5 Flights Up",
            "year": "52014",
            "summary": "A husband (Morgan Freeman) and wife (Diane Keaton) spend a hectic weekend pondering the sale of the apartment they've shared for more than 40 years..",
            "moviePoster": "/5flightsup/5flightsupposter.jpg",
            "locationInfo": {
                "address": "Alex's Apartment, 327 Bedford Avenue and S 3rd Street",
                "coords": [
                    0,
                    1
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
            "neighborhood": "Brooklyn",
            "comment": ""
        },
        {
            "title": "Noel",
            "year": "2004",
            "summary": "Christmas Eve in New York, and the lonely divorced publisher, Rose Collins (Susan Sarandon), needsa miracle to improve the health of her mother, interned in a hospital with Alzheimers. She feels sorry for another patient and meets his visitor. Meanwhile,Nina Vasquez (Penélope Cruz) breaks her engagement with her beloved fiancé Mike (Paul Walker) due to his suffocating jealousy, but misses him. Mike isstalked by a stranger, bartender Artie Venzuela. The poor Jules arranges to spend Christmas Eve in the hospital, where he spent the best Christmas of his lifewhen he was a teenager. The lives of some of these characters cross with others along the night.",
            "moviePoster": "/noel/noelposter.jpg",
            "locationInfo": {
                "address": "Rose Collins' Workplace, 30 Rockefeller Plaza",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/noel/noel04.jpg",
                "/noel/noel03.jpg",
                "/noel/noel02.jpg",
                "/noel/noel01.jpg",
                "/noel/noel09.jpg"
            ],
            "neighborhood": "Manhattan",
            "comment": ""
        },
        {
            "title": "The Code",
            "year": "2009",
            "summary": "In New York, the experienced art thief, Keith Ripley (Morgan Freeman), invites the bold thief fromMiami, Gabriel Martin (Antonio Banderas), to team up with him. He plans the heist of two valuable mysterious antique Faberge eggs, located in a safe, of the wellprotected Russian jewelry Romanov. Each egg is worth twenty million dollars on the black market, and Ripley needs his cut to free himself fromhis debt to a powerful mobster, known as Nicky. The reluctant Gabriel agrees to participate, after having a one night stand with Ripley'sgoddaughter Alexandra Karolin (Radha Mitchell). Meanwhile, the persistent Lieutenant Weber, who has unsuccessfully tried to put Ripley in jail for twenty years,figures out how to anticipate the movements of the criminal in order to catch him. This film is also known as Thick As Thieves.",
            "moviePoster": "/thecode/thecodeposter.jpg",
            "locationInfo": {
                "address": "Brighton Beach Avenue & Brighton 2nd Street",
                "coords": [
                    0,
                    1
                ]
            },
            "images": [
                "/thecode/thecode24.jpg",
                "/thecode/thecode23.jpg",
                "/thecode/thecode28.jpg",
                "/thecode/thecode29.jpg"
            ],
            "neighborhood": "Brooklyn",
            "comment": ""
        }
    ]

    return { 
        locationList : locationList,
        coordList: coordList,
        shuffle,
    }
}());

export { Helper };