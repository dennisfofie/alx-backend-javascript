// Testing the summation function
//
const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('calculateNumber', function () {
	describe('Two parameters', function () {
		it('should output 4', function() {
			assert.strictEqual(calculateNumber(1,3), 4);
		});
	});
});

describe('calculateNumber', function () {
	it('should ouput 5', function () {
		assert.strictEqual(calculateNumber(1, 3.7), 5);
	});
});

describe('calculateNumber', function () {
        it('should ouput 5', function () {
                assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        });
});

describe('calculateNumber', function () {
        it('should ouput 6', function () {
                assert.strictEqual(calculateNumber(1.5, 3.7), 6);
        });
});

describe('calculateNumber', function () {
	it('should ouput 6', function () {
		assert.strictEqual(calculateNumber(2.5, 3.4), 6);
	});
});

describe('calculateNumber', function () {
	it('should output 8', function () {
		assert.strictEqual(calculateNumber(3.5, 3.5), 8);
	});
});

