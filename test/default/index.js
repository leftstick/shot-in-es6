'use strict';

var expect = require('chai').expect;

describe('Default Parameter', function() {

    it('simple value', function() {

        var sum = function(augend, addend = 10) {
            expect(augend + addend).to.be.equal(20);
        };

        sum(10);
    });

    it('with falsy value', function() {

        var sum = function(augend, addend = 10) {
            expect(augend + addend).to.be.equal(10);
        };

        sum(10, 0);
    });

    it('use other parameter in arguments', function() {

        var say = function(words, to = words === 'World' ? 'everyone' : 'nobody') {
            expect(`Hello ${words} to ${to}`).to.equal('Hello World to everyone');
        };

        say('World');
    });

    it('undefined means nothing passed', function() {

        var say = function(words = 'World') {
            expect(`Hello ${words}`).to.equal('Hello World');
        };

        say(undefined);
    });

    it('null will be passed', function() {

        var say = function(words = 'World') {
            expect(words).to.equal(null);
        };

        say(null);
    });

});
