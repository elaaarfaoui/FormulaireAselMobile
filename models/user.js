const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  MF: {
    type: String,
    // required: true,
  },
  pointSaleName: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  gouvernerat: {
    type: String,
    required: true,
  },
  MSISDN: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("pointVente", UserSchema);