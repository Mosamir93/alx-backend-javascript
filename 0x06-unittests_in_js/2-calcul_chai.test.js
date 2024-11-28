const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it ('should return the sum of two rounded numbers', () => {
            expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
            expect(calculateNumber('SUM', 1.1, 3.7)).to.equal(5);
            expect(calculateNumber('SUM', 1, -3.7)).to.equal(-3);
            expect(calculateNumber('SUM', -1, -3.7)).to.equal(-5);
            expect(calculateNumber('SUM', 0, 0)).to.equal(0);
        });
    });
    describe('SUBTRACT', () => {
        it ('should return the subtraction of two rounded numbers', () => {
            expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
            expect(calculateNumber('SUBTRACT', 3.7, 1.1)).to.equal(3);
            expect(calculateNumber('SUBTRACT', -1, 3.7)).to.equal(-5);
            expect(calculateNumber('SUBTRACT', -1, -3.7)).to.equal(3);
            expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
        });
    });
    describe('DIVIDE', () => {
        it ('should return the division of two rounded numbers', () => {
            expect(calculateNumber('DIVIDE', 3.7, 2)).to.equal(2);
            expect(calculateNumber('DIVIDE', 8.8, 3.1)).to.equal(3);
        });
    });
    describe('DIVIDE', () => {
        it ('should return "Error" when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 9, 0)).to.equal('Error');
        });
    });
});
