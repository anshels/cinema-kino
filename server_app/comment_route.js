import express      from "express"
import { Comment }    from "./db_models"
import bodyParser   from "body-parser"

// Route "/api/comment"

let router = express.Router();

router.use(bodyParser.json());

router.all("/", (req, res) => {
    res.sendStatus(204);
});

router.route("/:movieId")
    .get((req, res) => {
    Comment.find({ movieId: req.params.movieId }, (err, commentList) => {
        res.json(commentList);
    });

})
    .post((req, res) => {
    console.log("Comment submitted", req.body);

    //saves new comment
    let newComment = new Comment(req.body);
    newComment.save((err, newComment) => {
        if (err) {
            console.log(err);
        }
    });
    res.sendStatus(200);
});



export default router;
