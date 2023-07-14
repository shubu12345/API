const mongoose = require('mongoose');

const connectdb = (url) => {
    mongoose.connect(url)
    .then(() => console.log("connected to db"))
    .catch(() => console.error());
}


module.exports = connectdb;



