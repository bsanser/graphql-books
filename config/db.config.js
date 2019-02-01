
const mongoose = require('mongoose');
const DB_NAME = 'graphql-books-barb';
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const MONGODB_URI = `mongodb://${process.env.DB_USER}:Mla123barb@ds111422.mlab.com:11422/${DB_NAME}`;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.info(`Connected to the database: ${DB_NAME}`))
  .catch(error => console.error('Database connection error:', error));