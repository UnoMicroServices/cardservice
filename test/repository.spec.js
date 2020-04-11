const repo = require('../src/repository/repository');
var chai = require("chai");
var expect = chai.expect;

describe('Repository functions', function() {
    it("Insert a new card", function(done) {
        repo.insertANewCard({type: "Simple", value: "2"},(err, result) => {
            expect(1).to.equal(result.result.n);
            done();
        })
    });
    it("Any result", function(done) {
        repo.getAllCards((err, result) => {
            expect(result).to.have.lengthOf.at.least(1);
            done();
        })
    });
    it("Insert and select it", function(done) {
        let card = {type: "Simple", value: "5", color: "blue"}
        repo.insertANewCard(card, (err, response) => {
            expect(1).to.equal(response.result.n);
            let id = response.insertedId;
            repo.getCardByID(id, (err, response) => {
                expect(id.toString()).to.equal(response._id.toString());
                expect(card.type).to.equal(response.type);
                expect(card.value).to.equal(response.value);
                expect(card.color).to.equal(response.color);
                done();                
            });
        });
    });
    it("Insert a list of cards", function(done) {
        let cards = [{type: "Simple", value: "5", color: "blue"}, {type: "Compose", value: "7", color: "red"}]
        repo.insertAListOfCards(cards, (err, response) => {
            expect(cards.length).to.equal(response.insertedCount);
            let ids = Object.values(response.insertedIds);
            repo.getCardsByIDs(ids, (err, response) => {
                expect(ids.length).to.equal(response.length);
                done();
            });
        });
    });
});