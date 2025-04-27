const mongoose = require('mongoose') 

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Server running on ${mongoose.connection.host}`)
    } catch (error) {
        console.log("Error -> ", error);
    }
}

module.exports = connectDB;