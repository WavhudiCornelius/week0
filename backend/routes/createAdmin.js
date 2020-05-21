const router = require('express').Router();
const Admins = require('../models/administrator'); // the administrators collection

// this is to handle the creation of admins
router.post("/createAdmin", (req, res, next)=>{
    //creates and saves a developer to the db
    Admins.create(req.body).then((newAdmin)=>{
        res.send(newAdmin);//something needs to be sent
    }).catch(next); //to move to the next middleware, which is the error handler
});

module.exports = router;