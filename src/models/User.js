const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'first_name is required'],
      trim: true,
    },
    last_name: {
      type: String,
      required: [true, 'last_name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.modeconst mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const coqu
const connectDB = async () => {
  trs   try {
    const conn = await{
    cons    console.log(`MongoDB connected: ${conn.connection.host}`);n   } catch (error) {
    console.error(`MongoDB connection erres    console.error({     process.exit(1);
  }
};

module.exports = connectDB;
