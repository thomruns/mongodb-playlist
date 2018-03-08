const mocha = require('mocha');  // delete this line and re-test without it
const assert = require('assert');

// Describe tests
describe('some demo tests', function(){
    // Create tests -- each it block describes an individual test
    it('adds two numbers together', function() {
        //predict the desired result of this test
        assert(2 + 3 === 5);  //should evaluate to true
    });

});