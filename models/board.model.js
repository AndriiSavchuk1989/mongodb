const Mongoose = require('mongoose');

const boardSchema = new Mongoose.Schema({
        id: {
            type: Number
        },
        title: {
            type: String
        }
    },
    {
        collection: 'boards'
    }
);

module.exports = Mongoose.model('Board', boardSchema);

