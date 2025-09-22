import { NextResponse } from "next/server";

const D_URL = process.env.DIRECTUS_URL!;
const TOKEN = process.env.DIRECTUS_SERVICE_TOKEN!;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const limit = url.searchParams.get("limit") || "12";
  const q = url.searchParams.get("q") || "";
  const r = await fetch(
    `${D_URL}/files?limit=${limit}&search=${encodeURIComponent(q)}&sort=-uploaded_on`,
    {
      headers: { Authorization: `Bearer ${TOKEN}` },
      cache: "no-store",
    }
  );
  return NextResponse.json(await r.json());
}
