'use strict';

var expect = require('chai').expect;

describe('For-of', function() {

    it('go through array', function() {

        var arr = [1, 2, 3];
        var res = [];

        for (var item of arr) {
            res.push(item);
        }

        expect(res).to.be.deep.equal(arr);

    });

    it('go through string', function() {

        var str = 'hello';
        var res = [];

        for (var item of str) {
            res.push(item);
        }

        expect(res).to.be.deep.equal(['h', 'e', 'l', 'l', 'o']);

    });

    it('go through Map', function() {

        var map = new Map();
        map.set('name', 'Shanghai');
        map.set('area', 6340.5);
        map.set('population', 2426);

        var keys = [],
            values = [];

        for (var [key, value] of map) {
            keys.push(key);
            values.push(value);
        }

        expect(keys).to.be.deep.equal(['name', 'area', 'population']);
        expect(values).to.be.deep.equal(['Shanghai', 6340.5, 2426]);

    });

});
