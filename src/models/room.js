const { Schema, model } = require('mongoose');

const roomSchema = new Schema({
    name: String
});

module.exports = model('Room', roomSchema);
