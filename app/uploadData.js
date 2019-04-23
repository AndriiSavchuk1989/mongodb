const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const mongoClient = new MongoClient(url, {useNewUrlParser: true});

// upload data from db
mongoClient.connect(function(error, client) {
    const db = client.db('schedulerdb');
    const collection = db.collection('boards');

    if (error) return console.log(error);
    collection.find().toArray(function (error, result) {
        console.log(result);
        client.close();
    })
});
