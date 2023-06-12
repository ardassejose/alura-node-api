import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://alura:mongodb123@alura.po5jkuq.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;