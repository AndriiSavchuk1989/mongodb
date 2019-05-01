const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:28017/';
const mongoClient = new MongoClient(url, {useNewUrlParser: true});

// upload data from db
mongoClient.connect(function(error, client) {
    const db = client.db('schedule_db');
    const collection = db.collection('users');

    if (error) return console.log(error);
    collection.find().toArray(function (error, result) {
        console.log(result);
        client.close();
    })
});
