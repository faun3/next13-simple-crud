import mongoose from "mongoose";

export const connect = () => {
  try {
    if (!process.env.MONGO) {
      throw new Error("no mongo key in .env");
    }
    mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("something bad just happened");
  }
};
