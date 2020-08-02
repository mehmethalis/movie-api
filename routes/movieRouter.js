const express = require('express');
const router = express.Router();

//Models
const Movie = require('../models/Movie');

router.post('/', (req, res, next) => {
    const { title, category, country, year, imdb } = req.body;
    const movie = new Movie({
        title: title,
        imdb: imdb,
        category: category,
        country: country,
        year: year

    });
    movie.save((err, data) => {
        if (err) {
            res.json(err);
        }
        res.json({ status: 1 });
    })
});

module.exports = router;