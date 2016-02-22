'use strict';

var expect = require('chai').expect;

describe('Literal Object', function() {

    it('specify prototype', function() {

        var person = {category: 'human'};

        var man = {__proto__: person, gender: 'male'};

        expect(man.category).to.equal('human');

    });

    it('write function without keywords', function() {

        var person = {
            category: 'human',
            speak() {
                return 'Hello World';
            }
        };

        expect(person.speak()).to.equal('Hello World');

    });

    it('short property', function() {

        var name = 'nanfeng';

        var person = {name};

        expect(person.name).to.equal('nanfeng');

    });

});
