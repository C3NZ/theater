const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient

require('dotenv').config()

const app = express();

const theaterModel = require('./models/theater')
const theaterRouter = require('./controllers/theaters')

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'theater';
let connection;

//Instantiate theater route passing in our application and connection
theaterRouter(app, connection);

app.listen(3000, function(){
    MongoClient.connect(dbUrl, {useNewUrlParser: true}, function(err, db){
        console.log("successfully connected to server")
        connection = db.db(dbName);
        
        if(process.env.THEATER_CONFIGURED){
            createTheaterModel(connection);
        }
    })

})
