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

module.exports = router;