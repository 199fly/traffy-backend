import { NextResponse } from "next/server";

const D_URL = process.env.DIRECTUS_URL!;
const TOKEN = process.env.DIRECTUS_SERVICE_TOKEN!;

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file") as File | null;
  if (!file) {
    return NextResponse.json({ error: "no file" }, { status: 400 });
  }

  const fd = new FormData();
  fd.append("file", file);
  const up = await fetch(`${D_URL}/files`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}` },
    body: fd,
  });
  if (!up.ok) {
    return NextResponse.json({ error: await up.text() }, { status: 400 });
  }
  const data = await up.json();
  return NextResponse.json({ ok: true, fileId: data.data?.id });
}
