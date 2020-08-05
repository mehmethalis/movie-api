const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.headers['x-access-token'] || req.body.token || req.query.token

    if (token) {

        jwt.verify(token, req.app.get('api_secreet_key'), (err, decoded) => {
            if (err) {
                res.json({ status: false, message: 'failed to authenticate token' });
            } else {
                req.decode = jwt.decoded;
                next();
            }

        })
    } else {
        res.json({ status: false, message: 'no token provided' });
    }
};