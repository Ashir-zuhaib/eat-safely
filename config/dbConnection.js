const mongoose = require("mongoose");
const db = process.env.MONGODB_URI;
const dbConnect = async () => {
  try {
    await mongoose.connect(db);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = dbConnect;
