const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res, next) {
    const { name, surname, userName, password } = req.body;

    bcryptjs.hash(password, 8, function(err, hash) {
        const user = new User({
            name: name,
            surname: surname,
            userName: userName,
            password: hash

        });

        user.save((err, data) => {
            if (err) {
                res.json(err)
            }
            res.json(data);
        })

    });


});

module.exports = router;