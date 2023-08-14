import mongoose, { Schema } from "mongoose";

interface ITopic {
  title: string;
  desc: string;
}

const topicSchema = new Schema<ITopic>(
  {
    title: String,
    desc: String,
  },
  { timestamps: true }
);

export type { ITopic };

export default mongoose.models.Topic ||
  mongoose.model<ITopic>("Topic", topicSchema);
