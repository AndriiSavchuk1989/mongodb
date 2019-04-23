const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

let users = [{name: "User1", age: 26} , {name: "User2", age: 21}, {name: "User3", age: 25}];

mongoClient.connect(function(err, client){

    const db = client.db("scheduler_db");
    const collection = db.collection("users");

    collection.insertMany(users, function(err, results){

        console.log(results);
        client.close();
    });
});
