const express = require('express');

const router = express.Router();

const Posts = require('./postDb')

router.get('/', (req, res) => {
    Posts.get()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => {
            console.log('Get all posts error', err)
            res.status(500).json({
                message: 'Error retrieving the posts'
            })
        })
});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {

};

function validateUserId(req, res, next) {
    const { id } = req.params;

    Posts.getById(id)
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

module.exports = router;