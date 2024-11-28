const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { describe, it } = require('mocha');

describe('calculatorNumber', () => {
    it('should round both numbers and return their sum', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
    it('should handle negative numbers', () => {
        assert.strictEqual(calculateNumber(-1, 0), -1);
        assert.strictEqual(calculateNumber(0, 0), 0);
        assert.strictEqual(calculateNumber(-1, -3.7), -5);
        assert.strictEqual(calculateNumber(-1, 3.7), 3);
    });
});
