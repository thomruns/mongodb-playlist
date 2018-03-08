const mongoose = require('mongoose'); // require mongoos
const schema = mongoose.Schema;  // mongoose Schema constructor function

// Create schema and model
//   Create the schema
const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

//   Create a new model based on that schema, in the collection mariochar
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

// Set up what this module exports
module.exports = MarioChar;