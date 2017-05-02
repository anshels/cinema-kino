import express     from "express";
import crypto      from "crypto";
import { User, Session }    from "./db_models";
import bodyParser  from "body-parser";
import sessionLib  from "./session"


// Route "/api/movies"

let router = express.Router();

router.use(bodyParser.json());

router.route("/")
    .post((req, res) => {
    User.find({username: req.body.username}, (err, users) => {

        if(err || users.length !==1) {
            console.log("Failed Login")
            res.sendStatus(401);
        } else {
            let user = users[0];
            // compute hash from pasword
            let computedHash = crypto
            .createHash('sha256')
            .update(`${req.body.password}${user.salt}`)
            .digest("hex");

            if (computedHash === user.hash) {
                let session = sessionLib.create(user.username);
                res.cookie("sessionID", session.sessionID, {path: '/'});
                res.cookie("username", user.username, {path: '/'});
                res.sendStatus(200);
                console.log("LOGGED in")
        } else {
            console.log("[AUTH] Login failed, password wrong!");
            res.sendStatus(401);
        }
    }

    })

})

router.route("/register")
    .post((req, res) => {

        User.find({ username: req.body.username}, (err, users) =>{
            //check if user exists already
            if (users.length < 0){
                res.sendStatus(409);
            }else {
                console.log("REGISTER Ok");
                // password storage
                let salt = crypto.randomBytes(256).toString('hex');
                let computeHash = crypto.createHash('sha256').update(`${req.body.password}${salt}`).digest("hex");

                //create user obj
                let newUser = new User({
                    username: req.body.username,
                    hash: computeHash,
                    salt: salt
                });

                newUser.save((err, newUser) =>{
                    if (err) {
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                    }
                });

            }
        })
})
router.route("/logout")
    .post((req, res) => {
    res.clearCookie("sessionID");
    res.clearCookie("username");
     console.log("logout");
    sessionLib.wipe(req.body.username);
    res.sendStatus(200);
})

export default router;
