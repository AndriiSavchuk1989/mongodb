const Mongoose = require('mongoose');

const boardSchema = new Mongoose.Schema({
    id: {
        type: Mongoose.SchemaTypes.ObjectId
    },
    title: {
        type: String
    }
},
    {
        collection: 'board'
    }
);

module.exports = Mongoose.model('Board', boardSchema)
