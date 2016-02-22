'use strict';

var expect = require('chai').expect;

describe('Destructuring', function() {

    it('array assignment', function() {

        var [a, b, c] = [1, 2, 3];

        expect(a).to.equal(1);
        expect(b).to.equal(2);
        expect(c).to.equal(3);

    });

    it('object assignment', function() {

        var {name: userName, gender: userGender} = {
            name: 'nanfeng',
            gender: 'male'
        };

        expect(userName).to.equal('nanfeng');
        expect(userGender).to.equal('male');

    });

    it('in function parameters as array', function() {

        var func = function([a, b, c]) {
            expect(a).to.equal(1);
            expect(b).to.equal(2);
            expect(c).to.equal(3);
        };

        func([1, 2, 3]);

    });

    it('in function parameters as object', function() {

        var func = function({name: myName}) {
            expect(myName).to.equal('nanfeng');
        };

        func({name: 'nanfeng'});

    });

});
