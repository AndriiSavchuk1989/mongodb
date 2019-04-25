const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/user.route');
const app = express();

app.use('/users', user);

let port = 27017;

app.listen(port, function() {
    console.log(`Server running on ${port} port`);
});
