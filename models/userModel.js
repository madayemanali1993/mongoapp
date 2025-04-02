const {
    Schema,
    model
  } = require("mongoose");
  
  const MySchema = new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50
    },
    password: {
      type: String,
      required: true,
      maxlength: 20
    },
    email: {
      type: String,
      required: true,
      maxlength: 50
    },
    phone: {
      type: String,
      required: true,
      maxlength: 50
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const UserModel = model("test", MySchema)
  module.exports = UserModel