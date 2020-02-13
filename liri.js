// LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

// do a readme
// [click here for a rundown](https://guides.github.com/features/mastering-markdown/), 

// * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

// * [Axios](https://www.npmjs.com/package/axios)

//   * You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

// * [Moment](https://www.npmjs.com/package/moment)

// * [DotEnv](https://www.npmjs.com/package/dotenv)


require("dotenv").config()

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// liri command line 1 inputs
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says