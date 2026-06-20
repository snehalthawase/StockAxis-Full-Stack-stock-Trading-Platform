const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const holdingSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day:String,
})

const Holding = new mongoose.model("Holding",holdingSchema);

module.exports = Holding;