const assert = require('assert');
const MarioChar = require('../models/mariochar'); //use the model schema file

// Describe tests
describe('Finding records', function(){

    beforeEach(function(done){
        var char = new MarioChar({
            name: 'Mario',
            weight: 60
        });
        char.save().then(function(){
            //assert(char.isNew === false);
            done();
        });
    });

    // Create tests -- each it block describes an individual test
    it('Finds one record from the database', function() {
      
        MarioChar.findOne({name: 'Mario'}).then(function(result){
            assert(result.name === 'Mario');
            done();
        });

    });

});
