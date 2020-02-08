const router = require('express').Router();

const Users = require('./usersModel');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
    Users.find()
      .then(users => {
          res.status(200).json(users)
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({ message: 'Error getting users' })
      })
})

router.delete('/delete/:id', (req, res) => {
    Users.remove(req.params.id)
        .then(user => {
            res.status(200).json({ user })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'User does not exist' })
        })
})

module.exports = router;