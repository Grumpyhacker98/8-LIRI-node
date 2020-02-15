// LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

// do a readme
// [click here for a rundown](https://guides.github.com/features/mastering-markdown/), 

// * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

// * [Axios](https://www.npmjs.com/package/axios)

//   * You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

// * [Moment](https://www.npmjs.com/package/moment)

// * [DotEnv](https://www.npmjs.com/package/dotenv)


require("dotenv").config()

const axios = require('axios');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var searchAction = String(process.argv[2])
var searchName = String(process.argv[3])

var bandKey = "https://rest.bandsintown.com/artists/" + searchName + "/events?app_id=codingbootcamp"
var omdbKey = "http://www.omdbapi.com/?t=" + searchName + "&y=&plot=short&apikey=trilogy"

if (searchAction === "concert-this") {
    axios.get(bandKey)
        .then(function (response, error) {
            if (error) {
                console.log(error)
            }
            console.log("===============================")
            for(var i=0;i<response.data.length;i++){
                v = i + 1
                console.log("Event Number: "+v)
                console.log("country: "+response.data[i].venue.country)
                console.log("Venue Name: "+response.data[i].name)
                console.log("Date: "+response.data[i].datetime)
                console.log("===============================")
            }
        })
}
if (searchAction === "spotify-this") {
    spotify.search({ type: searchName, query: 'All the Small Things' }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });
}
if (searchAction === "movie-this") {
    axios.get(omdbKey)
        .then(function (response, error) {
            if (error) {
                console.log(error)
            }
            console.log("Title: " + response.data.Title)
            console.log("Year: " + response.data.Year)
            console.log("Ratings: " + response.data.Ratings)
            console.log("Country: " + response.data.Country)
            console.log("Language: " + response.data.Language)
            console.log("Plot: " + response.data.Plot)
            console.log("Actors: " + response.data.Actors)
        })
}
if (searchAction === "do-what-it-says") {
    console.log("test1")
}

// liri command line 1 inputs
    // concert-this <artist/band name here>
        // search bandsintownAPI give venue name location date
    // spotify-this-song song
        // search spotifyAPI and give artists name album previous link
    // movie-this

    // do-what-it-says
        // run command from RandomSource.txt

// nodeSpotify


// axios



