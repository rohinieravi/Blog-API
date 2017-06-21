const express = require('express');
const morgan = require('morgan');

const app = express();

const blogsRouter = require('./blogsRouter');

// log the http layer
app.use(morgan('common'));

app.use(express.static('public'));

// when requests come into `/blog-posts`,
// we'll route them to the express
// router instances we've imported. Remember,
// these router instances act as modular, mini-express apps.
app.use('/blog-posts', blogsRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
