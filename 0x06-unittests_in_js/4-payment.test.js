const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber', () => {
        const calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const spy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);
        expect(calculateStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;

        calculateStub.restore();
        spy.restore();
    });
});
