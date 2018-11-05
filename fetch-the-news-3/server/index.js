const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const controller = require('./controller');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then (database => {
  app.set('db', database);
}).catch(error => {
  console.log('error with massive', error)
})

app.get('/api/TrivSet', controller.getTrivSet)

  // console.log(controller.getTrivSet)
  // console.log('invoked',controller.getTrivSet())
  // console.log('controller request finished')
// app.post('/api/TrivSet', controller.postTrivTrivSet)
// app.put('/api/TrivSet/:id', controller.putTrivSet)
// app.delete('/api/TrivSet/:id', controller.deleteTrivSet)

const PORT = 4000 || process.env.CONNECTION_STRING;
app.listen(PORT, ()=> console.log(`Server listening on port PORT`))