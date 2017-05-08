import express      from "express"

const loginAccess = (req, res, next) => {
    if (!req.cookies["username"]) {
        res.redirect('/login');
    } else {
        next();
    }

}




export default loginAccess;
