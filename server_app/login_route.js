import express     from "express";
import crypto      from "crypto";
import { User, Session }    from "./db_models";
import bodyParser  from "body-parser";
import sessionLib  from "./session"


// Route "/api/login"

let router = express.Router();

router.use(bodyParser.json());
// checks if login is correct
router.route("/")
    .post((req, res) => {
    User.find({username: req.body.username}, (err, users) => {
        console.log(req.body);
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
            console.log(user.username);
            if (computedHash === user.hash) {
                let session = sessionLib.create(user.username);
                res.cookie("sessionID", session.sessionID, {path: '/'});
                res.cookie("username", user.username, {path: '/'});
                res.sendStatus(200);
                console.log("LOGGED in", req.body.password)
        } else {
            console.log("[AUTH] Login failed, password wrong!");
            res.sendStatus(401);
        }
    }

    })

})
// creates new user
router.route("/register")
    .post((req, res) => {

        User.find({ username: req.body.username}, (err, users) =>{
            //check if user exists already
            console.log(users.length);
            if (users.length > 1){
                res.sendStatus(409);
            } else if(users.username === req.body.username){
                res.sendStatus(410);
            } else {
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
// deletes username and sessionId cookies
router.route("/logout")
    .post((req, res) => {
    res.clearCookie("sessionID");
    res.clearCookie("username");
     console.log("logout");
    sessionLib.wipe(req.body.username);
    res.sendStatus(200);
})

export default router;
