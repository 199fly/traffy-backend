import { NextResponse } from "next/server";

const D_URL = process.env.DIRECTUS_URL!;
const TOKEN = process.env.DIRECTUS_SERVICE_TOKEN!;

export async function POST(req: Request) {
  const { pageId, document } = await req.json();

  const cur = await fetch(`${D_URL}/items/pages/${encodeURIComponent(pageId)}?fields=document_version`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    cache: "no-store",
  });
  const curVer = cur.ok ? (await cur.json()).data?.document_version ?? 1 : 1;

  const up = await fetch(`${D_URL}/items/pages/${encodeURIComponent(pageId)}`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({ document, document_version: { $increment: 1 } }),
  });
  if (!up.ok) {
    return NextResponse.json({ error: await up.text() }, { status: 400 });
  }

  return NextResponse.json({ ok: true, previous_version: curVer, new_version: curVer + 1 });
}
