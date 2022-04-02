const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://ok1234:ok1234@cluster0.hvjws.mongodb.net/pops?retryWrites=true&w=majority"
  );
};

module.exports = connect;
