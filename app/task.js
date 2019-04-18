const Mongoose = require('mongoose');

const User = require('./user');

const taskSchema = new Mongoose.Schema({
        id: {
            type: ObjectId
        },
        title: {
            type: String
        },
        order: {
            type: Number
        },
        description: {
            type: String
        },
        assignee: {
            type: User
        }
    },
    {
        collection: 'tasks'
    }
);

module.exports = Mongoose.model('Tasks', taskSchema)
