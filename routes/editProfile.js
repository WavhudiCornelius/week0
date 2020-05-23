const router = require('express').Router();
let developer = require('../models/developer.model');


// a put request to update a profile in the db
router.route('/editProfile/:id').put((req, res) => {
    developer.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, doc)=>{
        // sending the updated version back to the client
        res.send(doc);
    });
});

module.exports = router;