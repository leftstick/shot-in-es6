'use strict';

var expect = require('chai').expect;

describe('Arrow Function', function() {

    after(function() {
        delete this.base;
    });

    it('shorter return', function() {

        var arr = ['1', '2', '3'];

        var numerics = arr.map(v => Number(v));

        expect(numerics).to.deep.equal([1, 2, 3]);
    });

    it('with block', function() {

        var arr = ['1', '2', '3'];

        var numerics = arr.map(v => {
            var n = Number(v);
            return n * 2;
        });

        expect(numerics).to.deep.equal([2, 4, 6]);
    });

    it('with this', function(done) {

        var arr = ['1', '2', '3'];
        this.base = 3;

        setTimeout(() => {
            var numerics = arr.map(v => Number(v) * this.base);

            expect(numerics).to.deep.equal([3, 6, 9]);

            done();
        });
    });

});
