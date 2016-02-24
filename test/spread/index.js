'use strict';

var expect = require('chai').expect;

describe('Spread', function() {

    it('used while calling function', function() {

        var func = function(first, second, third) {

            expect(first).to.equal(0);
            expect(second).to.equal(1);
            expect(third).to.equal(2);
        };

        func(...[0, 1, 2]);
    });

    it('used in array', function() {

        var arr = [0, 1, 2],
            res = [];

        res.push(...arr);

        expect(arr).to.be.deep.equal([0, 1, 2]);
    });

});
