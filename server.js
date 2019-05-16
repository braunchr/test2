
var express = require("express");
var app = express();

// prepare the server for database handling
var mongoose = require("mongoose"); 

mongoose.connect('mongodb://newuser1:' + process.env.MONGO_ATLAS_PWD +'@testdb-shard-00-00-id5j4.mongodb.net:27017,testdb-shard-00-01-id5j4.mongodb.net:27017,testdb-shard-00-02-id5j4.mongodb.net:27017/test?ssl=true&replicaSet=TestDB-shard-0&authSource=admin')
.then(res => {console.log('Successful connection' + res)})
.catch(err => {console.log('Could not connect to the database - probably pwd not set ' + err)});


// add the various routes stored in the routes directory

var pariRoute = require('./routes/pariRoute'); 
app.use('/parimutuel', pariRoute); //first argument is the filter, the second the handler


app.use(express.static('.'));


app.listen(3000, function () {
    console.log("listening on port 3000");
});
