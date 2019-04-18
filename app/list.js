const Mongoose = require('mongoose');

const listSchema = new Mongoose.Schema({
        id: {
            type: ObjectId
        },
        title: {
            type: String
        },
        order: {
            type: Number
        }
},
    {
        collection: 'lists'
    }
);

module.exports = Mongoose.model('Lists', listSchema)
