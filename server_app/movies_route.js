import express      from "express"
import { Movie }    from "./db_models"

// Route "/api/movies"

let router = express.Router();

router
    .get("/", (req, res) => {
        Movie.find((err, movies) => {
            res.json(movies);
        });
    }).get("/:id", (req, res) =>{
        Movie.findById(req.params.id,(err, movie) => {
            res.json(movie);
        });
    });

export default router;
