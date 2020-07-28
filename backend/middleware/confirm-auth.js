const jwt = require("jsonwebtoken");


//THIS CAN BE PLACED ON ANY ROUTE TO VERIFY TOKENS AND ALLOW ACCESS TO ROUTES
module.exports = (res, req, next) => {
    try{
        const bearer = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(bearer, process.env.JWT_KEY);
        req.userData = decoded
        next();
    }catch (error) {
        return res.status(401).json({
            message: "Auth Failed"
        });
    }
};