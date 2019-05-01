const Mongoose = require('mongoose');
const List = require('list.model');

const boardSchema = new Mongoose.Schema({
        id: {
            type: Number
        },
        title: {
            type: String
        },
        lists: [{ type: List, ref: 'List' }]
    },
    {
        collection: 'boards'
    }
);

module.exports = Mongoose.model('Board', boardSchema);
