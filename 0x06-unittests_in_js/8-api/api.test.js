const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
    it('should return correct status code', (done) => {
        request('http://localhost:7865', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it('should return correct result', (done) => {
        request('http://localhost:7865', (err, res, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
