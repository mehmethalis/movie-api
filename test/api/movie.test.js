const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app');
const { token } = require('morgan');

chai.use(chaiHttp);

/*
describe('Movies directs tests', () => {
    let token;
    before(() => {
        chai.request(server).post('/authenticate').send({ userName: 'ozan', password: '12345' }).end((err, res) => {
            token = res.body.token;
            console.log('TOKEN : ' + token + '\n');
        });
    });

    it('(GET/) it should get all movies', (done) => {
        chai.request(server).get('/api/movies').set('x-access-token', token).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();

        });

    });


});



describe('(POST/) Movie', () => {
    let token;
    before((done) => {
        chai.request(server).post('/authenticate').send({ userName: 'ozan', password: '12345' }).end((err, res) => {
            token = res.body.token;
            console.log('TOKEN : ' + token + '\n');
            done();
        });
    });
    it('it should post a movie', (done) => {
        let movie1 = {
            director_id: '5f2854f38b925d0b5038dc43',
            title: 'udem',
            imdb: 8,
            category: 'comedy',
            country: 'usa',
            year: 1950
        };

        chai.request(server).post('/api/movies').set('x-access-token', token).send(movie1).end((err, res) => {

            if (err) {
                console.log(err);
            }
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('status');
            done();
        });
    });
});

describe('(GET/:movie_id) Movie', () => {
    let token;
    before((done) => {
        chai.request(server).post('/authenticate').send({ userName: 'ozan', password: '12345' }).end((err, res) => {
            token = res.body.token;
            console.log('TOKEN : ' + token + '\n');
            done();
        });
    });
    it('it should get a movie with movie_id', (done) => {

        const movie_id = '5f2855e189a3780f1c20e285';
        chai.request(server).get('/api/movies/' + movie_id).set('x-access-token', token).end((err, res) => {

            if (err) {
                console.log(err);
            }
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
    });
});


*/