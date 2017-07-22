"use strict";

const sinon = require("sinon"),
    expect = require("chai").expect;

const calculator = require("../calculator");

describe("calculator-service", function() {
    let a = 6, b = 2;
    describe("#calculate value", function() {
        it("#calculate a + b returns value", function(done) {
            calculator.calculate(a, b, '+', function(err, value) {
                expect(value).to.be.equal(8);
                done();
            }); 
        });
    });
});