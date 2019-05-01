const Mongoose = require('mongoose');

const taskSchema = new Mongoose.Schema({
        id: {
            type: Number
        },
        title: {
            type: String
        },
    },
    {
        collection: 'tasks'
    }
);

module.exports = Mongoose.model('Task', taskSchema);
