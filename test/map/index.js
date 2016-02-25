'use strict';

var expect = require('chai').expect;

describe('Map', function() {

    it('override', function() {

        var cities = new Map([['name', 'Shanghai'], ['area', 6340.5]]);

        expect(cities.get('area')).to.be.equal(6340.5);

        cities.set('area', 5000);

        expect(cities.get('area')).to.be.equal(5000);

        expect(cities.size).to.be.equal(2);
    });

    it('contains', function() {
        var cities = new Map([['name', 'Shanghai'], ['area', 6340.5]]);

        expect(cities.has('name')).to.be.equal(true);

    });

    it('delete', function() {
        var cities = new Map([['name', 'Shanghai'], ['area', 6340.5]]);

        cities.delete('area');

        expect(cities.has('area')).to.be.equal(false);
        expect(cities.size).to.be.equal(1);

    });

    it('clear', function() {
        var cities = new Map([['name', 'Shanghai'], ['area', 6340.5]]);

        cities.clear();

        expect(cities.size).to.be.equal(0);

    });

});
