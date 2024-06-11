const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quote').then(() => {
    console.log("Successfully connected");
}).catch((e) => {
    console.log(e);
})
