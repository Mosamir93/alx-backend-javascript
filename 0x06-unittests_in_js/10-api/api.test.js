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

describe('Cart page', () => {
    it('should return correct status code and result', (done) => {
        request('http://localhost:7865/cart/12', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });
    it('should return correct status code', (done) => {
        request('http://localhost:7865/cart/hello', (err, res, body) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});

describe('available_payments page', () => {
    it('should return correct payment methods', (done) => {
        request('http://localhost:7865/available_payments', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(JSON.parse(body)).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                  }    
            });
            done();
        });
    });
});

describe('login page', () => {
    it('should return correct welcome message', (done) => {
        const options = {
            url: 'http://localhost:7865/login',
            method: 'POST',
            json: { userName: 'Betty' },
        };

        request(options, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});
