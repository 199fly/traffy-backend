import { NextResponse } from "next/server";

const D_URL = process.env.DIRECTUS_URL!;
const TOKEN = process.env.DIRECTUS_SERVICE_TOKEN!;

export async function POST(req: Request) {
  const { pageId, versionName, document } = await req.json();
  if (!versionName?.trim()) {
    return NextResponse.json({ error: "Version name required" }, { status: 400 });
  }

  const create = await fetch(`${D_URL}/items/page_versions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({ page: pageId, name: versionName.trim(), document }),
  });
  if (!create.ok) {
    return NextResponse.json({ error: await create.text() }, { status: 400 });
  }
  const ver = await create.json();

  await fetch(`${D_URL}/items/pages/${encodeURIComponent(pageId)}`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({ current_version: ver.data.id, document }),
  });

  return NextResponse.json({ ok: true });
}
