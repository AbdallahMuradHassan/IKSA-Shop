const mongoose = require("mongoose");
async function connectdDB(mongoURL) {
    if (!mongoURL) throw new Error('NO mongo URL  Provided');
    mongoose.set("strictQuery", true);
    mongoose.connect(mongoURL, { autoIndex: false, });
    console.log("MongoDB Connected ....")

}
module.exports = connectdDB;
