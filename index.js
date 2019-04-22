const MongoClient = require('mongodb').MongoClient;
const User = require('./app/user');

const url = 'mongodb://localhost:27017/';
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

mongoClient.connect(function(err, client) {
    const db = client.db('tempdb');
    const collection = db.collection('users');

    collection.insertOne(new User({ title: 'Andrew' }), function(err, res) {
        console.log(res);
        client.close();
    });
});
