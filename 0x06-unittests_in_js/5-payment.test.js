const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
        let spy;

        beforeEach(() => {
            spy = sinon.spy(console, 'log');
        });

        afterEach(() => {
            spy.restore();
        });
        it('should log the correct total for 100 and 20', () => {
            sendPaymentRequestToApi(100, 20);
            expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
    });
    it('should log the correct total for 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);
        expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
    });
});
