const router = require('express').Router();
const Admins = require('../models/administrator'); // the administrators collection

// authorizing the admin user
router.post("/auth", (req, res)=>{
    Admins.findOne({username: req.body.username}, (err, user)=>{
        var userDetails; // this will be sent to the client
        if(user){ // if a user with that username was found in the Admins collection
            // if the password of the retrieved user is the same as the one posted on the frontend
            if (req.body.password === user.password){
                userDetails = {
                    username: user.username, 
                    name: user.name,
                    level: user.level,
                    successfullLogin: true
                }
            }    
            else {
                userDetails = {
                    username: user.username, 
                    successfullLogin: false
                }
            }
        }
        // if the user is not found in the Admins collection
        else{
            userDetails = {
                username: null, 
                successfullLogin: false
            }
        }
        // notice that the password is not sesnt to the client
        res.json(userDetails);
        //res.send(JSON.stringify(userDetails));  
    });



});



module.exports = router;