const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it ('should return the sum of two rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
            assert.strictEqual(calculateNumber('SUM', 1.1, 3.7), 5);
            assert.strictEqual(calculateNumber('SUM', 1, -3.7), -3);
            assert.strictEqual(calculateNumber('SUM', -1, -3.7), -5);
            assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
        });
    });
    describe('SUBTRACT', () => {
        it ('should return the subtraction of two rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
            assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.1), 3);
            assert.strictEqual(calculateNumber('SUBTRACT', -1, 3.7), -5);
            assert.strictEqual(calculateNumber('SUBTRACT', -1, -3.7), 3);
            assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
        });
    });
    describe('DIVIDE', () => {
        it ('should return the division of two rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 3.7, 2), 2);
            assert.strictEqual(calculateNumber('DIVIDE', 8.8, 3.1), 3);
        });
    });
    describe('DIVIDE', () => {
        it ('should return "Error" when dividing by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 9, 0), 'Error');
        });
    });
});
