'use strict';

var expect = require('chai').expect;

describe('Rest', function() {

    it('in arguments', function() {

        var func = function(...names) {

            expect(names[0]).to.equal(0);
            expect(names[1]).to.equal(1);
            expect(names[2]).to.equal(2);
        };

        func(0, 1, 2);
    });

    it('partly in arguments', function() {

        var func = function(first, ...names) {

            expect(first).to.equal(0);
            expect(names[0]).to.equal(1);
            expect(names[1]).to.equal(2);
        };

        func(0, 1, 2);
    });

});
