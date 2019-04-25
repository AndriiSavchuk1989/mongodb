const User = require('../models/user.model');

exports.test = function (request, response) {
    response.send('Hello from user controller');
};
