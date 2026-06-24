import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    attestation: true,
    chip: "AMD SEV-SNP",
    signature: "0xA81F..."
  });
}
