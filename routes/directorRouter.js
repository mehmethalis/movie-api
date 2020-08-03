const express = require('express');
const mongoose = require('mongoose');
const { model } = require('../models/Movie');
const router = express.Router();
//Models
const Director = require('../models/Director');

router.post('/', (req, res, next) => {
    const director = new Director(req.body);
    director.save((err, data) => {
        if (err) {
            res.json(err);
        }
        res.json({ status: 1 });
    });

});

router.get('/', (req, res, next) => {

    Director.aggregate([
        { $lookup: { from: 'movies', localField: '_id', foreignField: 'director_id', as: 'movie' } }, {
            $unwind: { path: '$movie', preserveNullAndEmptyArrays: true },
        }
    ]).then((err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(data);
    })

});

router.get('/:director_id', (req, res, next) => {
    Director.aggregate([
        { $match: { '_id': mongoose.Types.ObjectId(req.params.director_id) } },
        { $lookup: { from: 'movies', localField: '_id', foreignField: 'director_id', as: 'movie' } }, {
            $unwind: { path: '$movie', preserveNullAndEmptyArrays: true },
        }
    ]).then((err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(data);
    })

});

module.exports = router;