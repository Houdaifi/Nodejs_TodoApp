const mongoose = require('mongoose');

const connectDB = async (db_url) => {
    return await mongoose.connect(db_url, {useNewUrlParser: true, useUnifiedTopology: true});
}

module.exports = connectDB;