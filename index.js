const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

const passportLocal = require('./config/passport-local-strategy');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


// use express router
app.use('/', require('./routes'));

try {
    mongoose.connect("mongodb+srv://rahat6713:1819rahat@cluster0.iee0y.mongodb.net/Habit-Tracker-App?authSource=admin&replicaSet=atlas-ivk86y-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
        { useNewUrlParser: true });
    console.log(`MongoDB Connection Successful`);
} catch (error) {
    console.log(error);
}

//server is on
app.listen(3000, console.log('application is in running state!'));
