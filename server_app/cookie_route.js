import express      from "express"

// checks if user is loged in and have username cookie
const loginAccess = (req, res, next) => {
    if (!req.cookies["username"]) {
        res.redirect('/login');
    } else {
        next();
    }

}
export default loginAccess;
