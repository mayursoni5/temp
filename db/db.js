require("dotenv").config(); // Load environment variables from .env file
const mongoose = require("mongoose");

// Get the MongoDB URI from the environment variable
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    // console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set to current date and time
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
