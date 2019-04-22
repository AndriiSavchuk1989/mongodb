const Mongoose = require('mongoose');

const User = require('./user');

const taskSchema = Mongoose.Schema({
    _id: {type: Mongoose.Schema.Types.ObjectId},
    title: {type: String},
    order: {type: Date},
    description: {type: String},
    assignee: {type: User},
},
    {
        collection: 'tasks'
    }
);

module.exports = Mongoose.model('Task', taskSchema);
