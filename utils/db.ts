import mongoose from "mongoose";

export const connect = async () => {
  try {
    if (!process.env.MONGO) {
      throw new Error("no mongo key in .env");
    }
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("something bad just happened");
  }
};
