const router = require('express').Router();
const developer = require('../models/developer.model');

//add a new developer to the db
router.route("/createProfile").post((req, res)=>{
    //creates and saves a developer to the db
    developer.create(req.body)
    .then((newDev)=>{
        res.send(newDev);//something needs to be sent
    }).catch(err => res.status(400).json('Error: ' + err));//to move to the next middleware, which is the error handler
});

module.exports = router;