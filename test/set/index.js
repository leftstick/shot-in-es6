'use strict';

var expect = require('chai').expect;

describe('Set', function() {

    it('unique', function() {
        var cities = new Set(['Shanghai', 'Beijing', 'Guangzhou']);

        expect(cities.size).to.be.equal(3);

        cities.add('Shanghai');

        expect(cities.size).to.be.equal(3);
    });

    it('contains', function() {
        var cities = new Set(['Shanghai', 'Beijing', 'Guangzhou']);

        expect(cities.has('Shanghai')).to.be.equal(true);

    });

    it('delete', function() {
        var cities = new Set(['Shanghai', 'Beijing', 'Guangzhou']);

        cities.delete('Beijing');

        expect(cities.has('Beijing')).to.be.equal(false);
        expect(cities.size).to.be.equal(2);

    });

    it('clear', function() {
        var cities = new Set(['Shanghai', 'Beijing', 'Guangzhou']);

        cities.clear();

        expect(cities.size).to.be.equal(0);

    });

});
