const MongoClient = require('mongodb').MongoClient;
const User = require('./app/user');

const url = 'mongodb://localhost:28017/';
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

mongoClient.connect(function(err, client) {
    const db = client.db('schedule_db');
    const collection = db.collection('users');

    collection.insertOne(new User({ title: 'Drew' }), function(err, res) {
        console.log(res);
        client.close();
    });
});
