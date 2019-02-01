
require('dotenv').config();

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

require ('./config/db.config.js');

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = 3000;
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(PORT, () => console.log(`listening on port ${PORT}`));