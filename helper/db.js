const mongoose = require('mongoose');

module.exports = () => {

    mongoose.connect("mongodb://firstUser:db1234@movieapi-shard-00-00.9dhha.mongodb.net:27017,movieapi-shard-00-01.9dhha.mongodb.net:27017,movieapi-shard-00-02.9dhha.mongodb.net:27017/movieAPI?ssl=true&replicaSet=atlas-12wne5-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('db connected...');
    }).catch((err) => {
        console.log('db connnection failed : ' + err);
    })
};