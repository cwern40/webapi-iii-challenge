const express = require('express');

const PostsRouter = require('./posts/postRouter')

const server = express();
server.use(logger);

server.use(express.json())
server.use('/api/posts', PostsRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  req.requestTime = new Date()

  console.log(`Method: ${req.method}, URL: ${req.url}, Time: ${req.requestTime}`)
  next()
};

module.exports = server;
