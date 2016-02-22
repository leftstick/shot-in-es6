'use strict';

var expect = require('chai').expect;

describe('Template Strings', function() {

    it('string concatenation', function() {

        var name = 'Shanghai';
        var feeling = 'love';

        var words = `I am working in ${name}, and i ${feeling} it here`;

        expect(words).to.equal('I am working in Shanghai, and i love it here');
    });

});
