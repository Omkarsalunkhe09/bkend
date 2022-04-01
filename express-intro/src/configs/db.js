const mongoose = require("mongoose");

// step 1 :- connect to mongodb
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://ok1234:ok1234@cluster0.hvjws.mongodb.net/bckend?retryWrites=true&w=majority"
  );
};

module.exports = connect;
