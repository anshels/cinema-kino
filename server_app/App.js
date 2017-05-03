import express          from 'express'
import mongoose         from 'mongoose'
import path             from 'path'
import cookieParser     from 'cookie-parser'

import movies_route     from "./movies_route"
import comment_route    from "./comment_route"
import login_route      from "./login_route"
import cookie_route      from "./cookie_route"


mongoose.connect("mongodb://localhost");

let db = mongoose.connection;

console.log("Connectiong to database");
console.log(mongoose.connection.readyState);
db.on('error', console.error.bind(console, 'Server failed to connect to DB!:'));
db.once('open', function() {
    let app     = express();
    let port    = 8080;

    // logger

    app.use((req, res, next) => {
        console.log(`[${req.method}] ${req.url}`);
        next();
    });

    app.get("/login", (req, res) =>{
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/index_bundle.js", (req, res) =>{
        res.sendFile(path.join(__dirname, "../public/index_bundle.js"));
    });
    app.get("/login", (req, res) =>{
        res.sendFile(path.join(__dirname, "../public/index.css"));
    });
    //Parses cokie in an object
    app.use(cookieParser());

    app.use("/api/login", login_route);

    // Secure part
    app.use(cookie_route);

    app.use(express.static("public"));

    app.use("/api/movies", movies_route);
    app.use("/api/comment", comment_route);

    // Rest API routes
    // Register react app paths, so they can be visited directly too
    app.get(["/movies-details*", "/login*", "/home*", "/all-movies*" ], (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    console.log(`ExpressJS server started on port ${port}`);
    app.listen(8080);

});
