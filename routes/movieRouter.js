const express = require('express');
const router = express.Router();

//Models
const Movie = require('../models/Movie');
router.get('/', (req, res, next) => {
    Movie.aggregate([

        { $lookup: { from: 'directors', localField: 'director_id', foreignField: '_id', as: 'director' } }, {
            $unwind: { path: '$movie', preserveNullAndEmptyArrays: true }
        }

    ]).then((err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(data);
    })

});

// top 10 list
router.get('/top10', (req, res, next) => {
    Movie.find({}, (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(data);
    }).limit(10).sort({ imdb: -1 });

});


router.get('/:movie_id', (req, res, next) => {
    Movie.findById(req.params.movie_id, (err, data) => {

        if (err) {
            res.json(err);
        }
        res.json(data);

    });
});


router.put('/:movie_id', (req, res, next) => {
    Movie.findByIdAndUpdate(req.params.movie_id, req.body, { new: true }, (err, data) => {

        if (err) {
            res.json(err);
        }
        res.json(data);

    });
});

router.delete('/:movie_id', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.movie_id, (err, data) => {

        if (err) {
            res.json(err);
        }
        res.json({ status: 1 });

    });
});


router.post('/', (req, res, next) => {
    const { title, category, country, year, imdb, director_id } = req.body;
    const movie = new Movie({
        director_id: director_id,
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

//beetwen
router.get('/between/:start_year/:end_year', (req, res, next) => {
    const { start_year, end_year } = req.params;
    Movie.find({
            year: { "$gte": parseInt(start_year), "$lte": parseInt(end_year) }
        },
        (err, data) => {

            if (err) {
                res.json(err);
            }
            res.json(data);
        })

});


module.exports = router;