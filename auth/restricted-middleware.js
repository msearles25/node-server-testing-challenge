const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ message: 'Not authorized' })
            } else {
                req.user = { house: decodedToken.department}
                next();
            }
        })
    } else {
        res.status(401).json({ message: 'No can do' })
    }
}