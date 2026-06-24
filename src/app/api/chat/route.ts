import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    prompt: body.prompt,
    response: "Proxa AI response",
    receiptId: "PRX-001"
  });
}
