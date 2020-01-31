const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

const { jwtSecret } = require('../config/secrets');

const Users = require('../models/usersModel');

router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(newUser => {
            res.status(201).json(newUser);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        })
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = signToken(user)
                res.status(200).json({ token })
            } else {
                res.status(401).json({ message: 'Invalid credentials.'})
            } 
        })
});

function signToken(user) {
    const payload = {
        subject: user.id,
        department: user.department
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;