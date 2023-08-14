import { connect } from "@/utils/db";
import Topic, { ITopic } from "@/models/Topic";
import { NextResponse } from "next/server";
import { HydratedDocument } from "mongoose";

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

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connect();
    const { title, desc } = await req.json();

    const foundTopic: HydratedDocument<ITopic> | null = await Topic.findById(
      params.id
    );

    if (!foundTopic) {
      return NextResponse.json({ message: "topic not found" }, { status: 500 });
    }

    foundTopic.desc = desc;
    foundTopic.title = title;

    await foundTopic.save();

    return NextResponse.json({ message: { title, desc } }, { status: 200 });
  } catch (err) {
    return new NextResponse("db error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connect();

    const foundTopic: HydratedDocument<ITopic> | null =
      await Topic.findByIdAndRemove(params.id);

    if (!foundTopic) {
      return NextResponse.json({ message: "topic not found" }, { status: 500 });
    }

    return NextResponse.json(foundTopic, { status: 200 });
  } catch (err) {
    return new NextResponse("db error", { status: 500 });
  }
}
