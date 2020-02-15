
require("dotenv").config()

const axios = require('axios');

// imported keys
var keys = require("./keys.js");
// import spotify api+constructor
var Spotify = require('node-spotify-api');
// construct with personal imported keys
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
            for (var i = 0; i < response.data.length; i++) {
                v = i + 1
                console.log("Event Number: " + v)
                console.log("country: " + response.data[i].venue.country)
                console.log("Venue Name: " + response.data[i].venue.name)
                console.log("Date: " + response.data[i].datetime)
                console.log("===============================")
            }
        })
}
if (searchAction === "spotify-this") {

    spotify.search({ type: 'track', query: searchName, limit: 10 }, function (err, response) {
        if (err) { return console.log('Error occurred: ' + err) }

        data = response.tracks.items
        console.log("=====================")
        for (var i = 0; i < data.length; i++) {
            console.log("Entry: " + i)
            for (var f = 0; f < data[f].artists.length; f++) {
                console.log("Artist(s): " + data[i].artists[f].name)
            }
            console.log("Name: " + data[i].name)
            console.log("Link: " + data[i].href)
            console.log("From Album: " + data[i].album.name)
            console.log("=====================")
        }
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
