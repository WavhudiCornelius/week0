//this file is for handling http requests
//routes are used for that

const express = require('express');
const Devs = require('../models/developer.model'); // the developers collection
const Admins = require('../models/administrator'); // the administrators collection

var router = express.Router();

//get a list of developers from the db
router.get("/profiles", (_req, res)=>{
    Devs.find({}, (err, doc)=>{
        if (err) console.log(err);
        res.send(doc);
    });
});

// get more info on a specific developer
router.get("/profile/:id", (req, res)=>{
    Devs.findById(req.params.id, (err, doc)=>{
        if (err) console.log(err);
        res.send(doc);
    });
});

//add a new developer to the db
router.post("/createProfile", (req, res, next)=>{
    //creates and saves a developer to the db
    Devs.create(req.body).then((newDev)=>{
        res.send(newDev);//something needs to be sent
    }).catch(next);//to move to the next middleware, which is the error handler
});

// this is to handle the creation of admins
router.post("/createAdmin", (req, res, next)=>{
    //creates and saves a developer to the db
    Admins.create(req.body).then((newAdmin)=>{
        res.send(newAdmin);//something needs to be sent
    }).catch(next);//to move to the next middleware, which is the error handler
});


//update info of an existing developer in the db. 
router.put("/editProfile/:id", (req, res, next)=>{
    //the new:true option makes the request return the updated doc
    Devs.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, doc, response)=>{
        //console.log(doc);
        res.send(doc);
    });
});

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