const mongoose = require('mongoose');

module.exports.init = async () => {
    await mongoose.connect(process.env.MONGODB_URL || "");
}

