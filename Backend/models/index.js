const mongoose = require("mongoose");
const uri = "mongodb+srv://adminhamza:adminhamza123&@cluster0.pzcviot.mongodb.net/InventoryManagementApp?retryWrites=true&w=majority";


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Connected to MongoDB")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };