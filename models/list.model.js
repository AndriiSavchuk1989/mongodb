const Mongoose = require('mongoose');

const listSchema = new Mongoose.Schema({
    id: {
        type: Number
    },
    tasks: [{type: Mongoose.Schema.Types.ObjectId, ref: 'Task'}],
    },
    {
        collection: 'tasks'
    }
);

module.exports = Mongoose.model('List', listSchema);
