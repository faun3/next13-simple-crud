import { connect } from "@/utils/db";
import Topic, { ITopic } from "@/models/Topic";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connect();
    const foundTopic: ITopic | null = await Topic.findById(params.id);
    if (!foundTopic) {
      return NextResponse.json({ message: "topic not found" }, { status: 500 });
    }
    return NextResponse.json(foundTopic, { status: 200 });
  } catch (err) {
    return new NextResponse("db error", { status: 500 });
  }
}
