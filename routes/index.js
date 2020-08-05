const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res, next) {
    const { name, surname, userName, password } = req.body;

    bcrypt.hash(password, 8, function(err, hash) {
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

router.post('/authenticate', (req, res, next) => {
    const { userName, password } = req.body;
    User.findOne({ userName: userName }, (err, user) => {
        if (err) {
            throw err;
        }
        if (!user) {
            res.json({ status: false, message: 'user not found' })
        } else {

            async function checkUser(username, password) {
                //... fetch user from a db etc.

                const match = await bcrypt.compare(password, user.password);

                if (match) {
                    const playload = { userName };
                    const token = jwt.sign(playload, req.app.get('api_secreet_key'), { expiresIn: 720 });

                    res.json({ status: true, token: token });
                } else {
                    res.json({ status: false, message: 'wrong password' });
                }

                //...
            }
            checkUser(userName, password);

        }

    });

});

module.exports = router;