import { NextResponse } from "next/server";
import { connect } from "@/utils/db";
import Topic, { ITopic } from "@/models/Topic";
import { HydratedDocument } from "mongoose";

// make a new topic
export async function POST(req: Request) {
  const { title, desc } = await req.json();
  await connect();
  await Topic.create({ title, desc });
  return NextResponse.json({ message: "topic created" }, { status: 201 });
}

// get all topic
export async function GET(req: Request) {
  try {
    await connect();
    const foundDocuments: HydratedDocument<ITopic>[] = await Topic.find();
    return NextResponse.json(foundDocuments, { status: 200 });
  } catch (err) {
    return new NextResponse("db error", { status: 500 });
  }
}
