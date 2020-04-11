module.exports = (app, repository) => {
    app.get('/cards', (req, res, next) => {
        repository.getAllCards((err, cards) => {
            if(err) return next(err);
            res.json(cards);
        });
    });

    app.post('/cards', (req, res, next) => {
        let card = req.body;
        repository.insertANewCard(card, (err, resp) => {
            if(err) return next(err);
            //res.status(201).set('Location', )
            res.json(resp);
        });
    });
}