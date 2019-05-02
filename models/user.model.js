const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
        _id: {
            type: Mongoose.Types.ObjectId
        },
        name: {
            type: String
        },
        surname: {
            type: String
        },
        email: {
            type: String
        }
    },
    {
    collection: 'users'
    }
);

module.exports = Mongoose.model('User', userSchema);
