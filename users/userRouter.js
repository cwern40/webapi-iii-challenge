const express = require('express');

const router = express.Router();

const Users = require('./userDb')

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    Users.get()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error retrieving the users'
            })
        })
});

router.get('/:id', validateUserId, (req, res) => {
    const { id } = req.params
    
    Users.getById(id)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error retrieving user data'
            })
        })
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    const { id } = req.params;

    Users.getById(id)
        .then(post => {
            if (post) {
                req.user = post
                next();
            } else {
                res.status(404).json({
                    message: 'Invalid user id'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Error processing the request'
            })
        })

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
