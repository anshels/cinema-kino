import express      from "express"

const loginAccess = (req, res, next) => {
    if (!req.cookies["username"]) {
        console.log("Cookies are not  here");
        res.redirect('/login');
    } else {
        console.log("Yes, Cookies are here");
        next();
    }

}




export default loginAccess;
