const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    id: {
        type: Mongoose.SchemaTypes.ObjectId
    },
    title: {
        type: String
    }
},
    {
        collection: 'users'
    }
);

module.exports = Mongoose.model('Users', userSchema)
