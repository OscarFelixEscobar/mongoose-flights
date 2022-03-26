const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/flights')



const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connect to MongoDB at ${db.host}:${db.port}`)
});