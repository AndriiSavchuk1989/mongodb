const Mongoose = require('mongoose');
const Task = require('task.model');

const listSchema = new Mongoose.Schema({
    id: {
        type: Number
    },
    tasks: [{type: Task, ref: 'Task'}],
    },
    {
        collection: 'tasks'
    }
);

module.exports = Mongoose.model('Task', listSchema);
