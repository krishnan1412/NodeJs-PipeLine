const mongoose = require("mongoose");

// Define MongoDB connection URI manually
const MONGO_URI = "mongodb://ubuntu:ubuntu@13.232.68.252:27017/kavi";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
