'use strict';

var expect = require('chai').expect;

describe('Testing arrowfunction', function() {

    it('arrowfunction', function() {

        var arr = ['1', '2', '3'];

        var numeric = arr.map(v => Number(v));

        expect(numeric).to.deep.equal([1, 2, 3]);
    });

});
