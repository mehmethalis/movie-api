const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../app');

chai.use(chaiHttp);


describe('Movies directs tests', () => {
    let token;
    before((done) => {
        chai.request(server).post('/authenticate').send({ userName: 'ozan', password: '12345' }).end((err, res) => {
            token = res.body.token;
            console.log('TOKEN : ' + token + '\n');
            done();
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