import { NextResponse } from "next/server";
import { connect } from "@/utils/db";
import Topic from "@/models/Topic";

export async function POST(req: Request) {
  const { title, desc } = await req.json();
  await connect();
  await Topic.create({ title, desc });
  return NextResponse.json({ message: "topic created" }, { status: 201 });
}
