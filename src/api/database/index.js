const mongoose = require('mongoose');
const config = require('../config/config');

const url = config.bd_string;

mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

module.exports = mongoose;