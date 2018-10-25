const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const couchesController = require('./couchesController');
const session = require('express-session')
require('dotenv').config()

const app = express()
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then (database => {
    app.set('db', database);
}).catch(error => {
    console.log('error with massive', error)
})

app.get('/api/couches', couchesController.getCouches)
app.post('/api/couches', couchesController.postCouches)

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})