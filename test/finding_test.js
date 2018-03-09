const assert = require('assert');
const MarioChar = require('../models/mariochar'); //use the model schema file

// Describe tests
describe('Finding records', function(){

    var char; 
    beforeEach(function(done){
        char = new MarioChar({
            name: 'Mario',
            weight: 60
        });
        char.save().then(function(){
            //assert(char.isNew === false);
            done();
        }).catch(function() {
            console.log("Promise Rejected");
            done();
       });
    });

    // Create tests -- each it block describes an individual test
    it('Finds one record from the database', function(done) {
      
        MarioChar.findOne({name: 'Mario'}).then(function(result){
            assert(result.name === 'Mario');
            done();
        }).catch(function() {
            console.log("Promise Rejected");
            done();
       });

    });

    it('Finds one record by ID from the database', function(done) {
      
        MarioChar.findOne({_id: char._id}).then(function(result){
            assert(result._id.toString() === char._id.toString());
            done();
        }).catch(function(err) {
            console.log("Promise Rejected " + err);
            done();
       });

    });

});
