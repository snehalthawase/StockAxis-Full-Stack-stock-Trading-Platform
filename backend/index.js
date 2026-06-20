const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const url= process.env.MONGO_URL;
const bcrypt = require('bcrypt');

const  Holding  = require('./model/Holding_Schema');
const Position = require('./model/position_Schema');
const Order = require('./model/order_Schema');
const User = require("./model/UserModel");

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(url);
}


app.get("/allHolding",async (req,res)=>{
  let allHolding = await Holding.find({});
  res.json(allHolding);
})

app.get("/allPosition",async (req,res)=>{
  let allPosition = await Position.find({});
  res.json(allPosition);
})

app.post("/newOrder",(req,res)=>{
 
  let newChat = new Order({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode:req.body.mode
  })

  newChat.save();;
  res.send("data saved");

});

app.post("/signUp", async(req,res)=>{
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
  let newUser = new User({
  username: req.body.username,
  password: req.body.password
  })
  newUser.save();
  res.send(newUser);

})

app.listen(port,()=>{
    console.log("App is running");
})