const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

//middleware to serve static files (html, css, images)
//this has to come first
// app.use(express.static("../profile-creator/public"));

//taking care of all deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//const uri = process.env.ATLAS_URI;
//mongoose.connect(uri);
mongoose.connect("mongodb+srv://hackingSpider:supernova@devjam2020-arlgz.mongodb.net/test?retryWrites=true&w=majority");

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// the /api is to make sure all requests are preceded with /api/<whatever>
app.use('/api', require("./routes/api"));

// const profiles = require('./routes/profiles');
// app.use('/profiles', profiles);
// app.use('/createProfile', require('./routes/createProfile'));
// app.use('/createAdmin', require('./routes/createAdmin'));
// app.use('/editProfile', require('./routes/editProfile'));
// app.use('/auth', require('./routes/auth'));

//error handling middleware
//next is here in case we need to call the next middleware
app.use((err, req, res, next)=>{
    res.status(422).send(err.message);
});

// serving the static files when in production
if (process.env.NODE_ENV !== "production"){ //change this back to ===
    // serve static files from the folder bellow, which is created once everything is built
    app.use(express.static("client/build"));

    // this will basically just handle all remaining requests, not handled by the routes
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});