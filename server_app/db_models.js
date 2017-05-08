/* Defines mongoDB database models so they are easily accessable from routes */

import mongoose from "mongoose"

const movieSchema = mongoose.Schema({
    Title       : String,
    Year        : String,
    Rated       : String,
    Released    : String,
    Runtime     : String,
    Genre       : String,
    Director    : String,
    Writer      : String,
    Actors      : String,
    Plot        : String,
    Language    : String,
    Country     : String,
    Awards      : String,
    Poster      : String,
    Metascore   : String,
    imdbRating  : String,
    imdbVotes   : String,
    imdbID      : String,
    Type        : String,
    Response    : String
});
const movieComentSchema = mongoose.Schema({
    movieId: String,
    user: String,
    comment: String

});
const userSchema = mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
});

const sessionSchema = mongoose.Schema({
    sessionID: String,
    username: String
})


export const Movie = mongoose.model("movie", movieSchema);
export const Comment = mongoose.model("comment", movieComentSchema);
export const User = mongoose.model("user", userSchema);
export const Session = mongoose.model("session", sessionSchema);
