const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});
// 1st model class
mongoose.model("users", userSchema);
