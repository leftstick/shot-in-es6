'use strict';

var expect = require('chai').expect;

describe('Destructuring', function() {

    it('primitive assignment', function() {

        var [a, b, c] = [1, 2, 3];

        expect(a).to.equal(1);
        expect(b).to.equal(2);
        expect(c).to.equal(3);

    });

    it('object assignment', function() {

        var func = function() {
            return 'world';
        };

        var [a, b, c] = [{name: 'howard'}, [1, 3], func];

        expect(a).to.deep.equal({name: 'howard'});
        expect(b).to.deep.equal([1, 3]);
        expect(c).to.equal(func);

    });

});
