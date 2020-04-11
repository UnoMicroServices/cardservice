const mongodb = require("../config/mongodb");

function getAllCards(callback) {
    mongodb.connect((err,db) => {
        db.collection("cards").find().toArray(callback);
    });
}

function getCardByID(id, callback) {
    mongodb.connect((err, db) => {
        db.collection("cards").findOne({_id: require("mongodb").ObjectID(id)}, callback);
    });
}

function getCardsByIDs(ids, callback) {
    let parsedIds = ids.map(id => { return require("mongodb").ObjectID(id)});
    mongodb.connect((err, db) => {
        db.collection("cards").find({_id: {$in: parsedIds}}).toArray(callback);
    });
}

function insertANewCard(card, callback) {
    mongodb.connect((err,db) => {
        db.collection("cards").insertOne(card,callback);
    }); 
}

function insertAListOfCards(cards, callback) {
    mongodb.connect((err, db) => {
        db.collection("cards").insertMany(cards, callback);
    });
}

module.exports = { getAllCards, getCardByID, getCardsByIDs, insertANewCard, insertAListOfCards }