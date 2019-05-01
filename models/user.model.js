const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
        _id: {
            type: Mongoose.Types.ObjectId
        },
        title: {
            type: String
        }
    },
    {
    collection: 'users'
}
);

module.exports = Mongoose.model('User', userSchema);
