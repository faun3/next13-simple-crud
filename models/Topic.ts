import mongoose, { Schema } from "mongoose";

interface ITopic {
  title: string;
  desc: string;
}

const topicSchema = new Schema({
  title: String,
  desc: String,
});

export type { ITopic };

export default mongoose.models.Topic || mongoose.model("Topic", topicSchema);
