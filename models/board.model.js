const Mongoose = require('mongoose');

const boardSchema = new Mongoose.Schema({
        id: {
            type: Number
        },
        title: {
            type: String
        },
        tasks: [{type: Mongoose.Schema.Types.ObjectId, ref: 'Task'}]
    },
    {
        collection: 'boards'
    }
);

module.exports = Mongoose.model('Board', boardSchema);
