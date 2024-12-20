const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber', () => {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 200);
        sinon.assert.calledOnceWithExactly(spy, 'SUM', 100, 200);
        spy.restore();
    });
});
