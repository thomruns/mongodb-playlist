const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;  // overwrite mongoose promise handler

// Connect to database before tests run
before(function(done) {
    // Connect to mongodb, create a new database called ninjatest
    // If a database already exists, use the name of database in place of ninjatest
    mongoose.connect('mongodb://localhost/ninjatest');

    //Listen for database connection, handle connection errors
    mongoose.connection.once('open', function() {
        console.log('Connection has been made to the database');
        done();
    }).on('error', function(error) {
        console.log('Connection error:', error);
    });
});


