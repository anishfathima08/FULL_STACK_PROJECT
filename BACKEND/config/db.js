const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config() 

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('DB is Connected') )
        .catch(() => console.log('DB not is Connected') )
}

module.exports = connectDB