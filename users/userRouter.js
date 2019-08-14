const express = require('express');

const router = express.Router();

const Users = require('./userDb')

router.post('/', validateUser, (req, res) => {
    Users.insert(req.body)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error creating user'
            })
        })
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

router.delete('/:id', validateUserId, (req, res) => {
    Users.remove(req.params.id)
        .then(remove => {
            res.status(200).json({
                message: 'User has been removed'
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error deleting User'
            })
        })

});

router.put('/:id', validateUserId, (req, res) => {
    Users.update(req.params.id)
        .then(update => {
            res.status(200).json(update)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: 'Error updating user'
            })
        })
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
    if (!req.body || !Object.keys(req.body).length > 0) {
        res.status(400).json({
            message: 'Missing user data'
        })
    } else if (!req.body.name) {
        res.status(400).json({
            message: 'Missing required name field'
        })
    } else {
        next()
    }
};

function validatePost(req, res, next) {

};

module.exports = router;
