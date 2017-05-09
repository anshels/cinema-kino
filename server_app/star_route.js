import express      from "express"
import { Star }    from "./db_models"
import bodyParser   from "body-parser"

// Route "/api/comment"

let router = express.Router();

router.use(bodyParser.json());

router
    .get("/:username/:movieId/", (req, res) => {
    console.log(req.params);
        Star.findOne({ movieId: req.params.movieId, username: req.params.username }, (err, star) => {
            res.json(star);
        });

    })
    .post("/", (req, res) => {
    console.log("Star", req.body);
        Star.findOneAndRemove({ movieId: req.body.movieId, username: req.body.username }, (err, star) => {
            console.log('save before');
            if (!star){
                console.log('save:');
                const newStar = new Star(req.body);
                newStar.save((err, newStar) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
            res.sendStatus(200);
        });
    });

router.all("/", (req, res) => {
    res.sendStatus(204);
});


export default router;
