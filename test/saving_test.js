const assert = require('assert');
const MarioChar = require('../models/mariochar'); //use the model schema file

// Describe tests
describe('saving records', function(done){
    // Create tests -- each it block describes an individual test
    it('saves a record to the database', function() {
        var char = new MarioChar({
            name: 'Mario',
            weight: 60
        });
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });

});