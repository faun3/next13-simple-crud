import { NextRequest, NextResponse } from "next/server";
import { ITopic } from "@/models/Topic";
import { connect } from "@/utils/db";
import Topic from "@/models/Topic";

export async function POST(req: Request) {
  const { title, desc } = await req.json();
  await connect();
  Topic.create({ title, desc });
  return NextResponse.json({ message: "topic created" }, { status: 201 });
}
