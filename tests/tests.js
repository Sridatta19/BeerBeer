var should = require('should');
var assert = require('assert');

describe('Test framework', function () {
    it('should have mocha installed and running', function () {
        assert.equal(true, true);
    });
    it('should have the library installed and running for fluent testing', function () {
        true.should.eql(true);
    })

});