const mongoose = require('mongoose');

module.exports = () => {

    mongoose.connect("mongodb+srv://firstUser:db1234@movieapi.9dhha.mongodb.net/movieAPI?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('db connected...');
    }).catch((err) => {
        console.log('db connnection failed : ' + err);
    })
};