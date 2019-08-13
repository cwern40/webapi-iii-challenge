const express = require('express');

const PostsRouter = require('./posts/postRouter')

const server = express();

server.use(express.json())
server.use('/api/posts', PostsRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(req)
};

module.exports = server;
