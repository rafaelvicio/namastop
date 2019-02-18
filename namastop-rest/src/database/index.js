const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://namastop:namastop@cluster0-htw5k.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true }
);

module.exports = mongoose;
