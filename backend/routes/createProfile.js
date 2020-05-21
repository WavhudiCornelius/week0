const router = require('express').Router();
let developer = require('../models/developer.model');

router.route('/').get((req, res) => {
    developer.find()
        .then(developers => res.json(developers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newDeveloper = new developer({username});

    newDeveloper.save()
    .then(() => res.json('developer added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;