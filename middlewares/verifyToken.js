const jwt = require('jsonwebtoken')
require('dotenv').config();

const verifyToken = (req, res, next) => {

    let token = req.headers.authorization;
    if (token === undefined)
        res.send({ message: "Unauthorized request." })
    try {
        jwt.verify(token, process.env.portNumber)
        next();
    }
    catch (err) {
        next(err);
    }


}

module.exports = verifyToken;