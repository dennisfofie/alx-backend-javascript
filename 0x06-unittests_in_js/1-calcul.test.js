// testCases for calculateNumber
//
const calculateNumber = require('./1-calcul');
const assert = require('assert').strict;

describe('calculateNumber', function () {
	describe('Three parameters', function (){
		it('return 6', function () {
			assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
		});
	});
});

describe('calculateNumber', function () {
        describe('Three parameters', function (){
                it('return -4', function () {
                        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
                });
        });
});

describe('calculateNumber', function () {
        describe('Three parameters', function (){
                it('return 0.2', function () {
                        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
                });
        });
});

describe('calculateNumber', function () {
        describe('Three parameters', function (){
                it('return Error', function () {
                        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
                });
      });
});

