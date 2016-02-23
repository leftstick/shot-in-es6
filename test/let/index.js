'use strict';

var expect = require('chai').expect;

describe('Let', function() {

    it('non-shared variable', function(done) {

        var arr = [];
        for (let i = 0; i < 5; i++) {
            setTimeout(function() {
                arr.push(i);
            });
        }

        setTimeout(function() {
            expect(arr).to.be.deep.equal([0, 1, 2, 3, 4]);
            done();
        }, 10);
    });

    it('block-scoped variable', function() {

        var a = 'Beijing';

        if (true) {
            let a = 'Shanghai';
            expect(a).to.be.equal('Shanghai');
        }

        expect(a).to.be.equal('Beijing');
    });

});
