const mongoose = require("mongoose")

const URI = "mongodb://localhost:27017/pagebook"

const StartMongoServer = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true
        })
    } catch (e) {
        console.log(e);
        throw e;
    }
}

module.exports = StartMongoServer