const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.MONGO_URI
console.log(uri)


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Connected to MongoDB")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };