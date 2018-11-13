const Theater = require('../models/theater');

module.exports = function (app) {

    app.get('/theaters', (req, res) => {
        res.json(Theater);
    });


}