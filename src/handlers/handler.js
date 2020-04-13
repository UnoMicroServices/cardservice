const repository = require("../repository/repository");

exports.getAllCards = (req,res,next) => {
    repository.getAllCards((err, cards) => {
        if(err) return next(err);
        res.json(cards);
    });
}

// exports.getCardById = (req,res,next) => {
//     repository.getCardByID((err, cards) => {
//         if(err) return next(err);
//         res.json(cards);
//     });
// }

exports.insertANewCard = (req,res,next) => {
    let card = req.body;
    repository.insertANewCard(card, (err, resp) => {
        if(err) return next(err);
        //res.status(201).set('Location', )
        res.json(resp);
    });
}

exports.insertAListOfCards = (req,res,next) => {
    let cards = req.body;
    repository.insertAListOfCards(cards, (err, resp) => {
        if(err) return next(err);
        //res.status(201).set('Location', )
        res.json(resp);
    });
}