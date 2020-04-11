const mongodb = require('../src/config/mongodb');
var chai = require("chai");
var expect = chai.expect;

describe('MongoDB test Connection', function() {
    it("Have to create a sucesfull connection", function(done) {
        mongodb.connect((err, conn) => {            
            expect(null).to.equal(err);
            done();
        });
    });
    it("Have to desconnect.", function(done) {
        let response = mongodb.disconnect();
        expect(true).to.equal(response);
        done();
    });
});