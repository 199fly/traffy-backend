"use client";
import { useState } from "react";
import { lsKey, deactivateEdit } from "./keys";

export function SaveMenu({ siteId, pageId }: { siteId: string; pageId: string }) {
  const [mode, setMode] = useState<"new" | "overwrite">("new");
  const [name, setName] = useState("");
  const canSave = mode === "overwrite" || name.trim().length > 0;

  async function save() {
    const raw = localStorage.getItem(lsKey(siteId, pageId));
    if (!raw) return;
    const document = JSON.parse(raw);
    const endpoint = mode === "new" ? "/api/page/version" : "/api/page/overwrite";
    const body: any = { pageId, document };
    if (mode === "new") body.versionName = name.trim();
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      alert("Save failed");
      return;
    }
    deactivateEdit(siteId, pageId);
    location.reload();
  }

  return (
    <div className="flex items-center gap-2">
      <select className="bg-white/10 rounded px-2 py-1" value={mode} onChange={(event) => setMode(event.target.value as any)}>
        <option value="new">Save as New Version</option>
        <option value="overwrite">Overwrite Current</option>
      </select>
      {mode === "new" && (
        <input
          className="bg-white/10 rounded px-2 py-1"
          placeholder="Version name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      )}
      <button
        className={`px-3 py-1 rounded ${canSave ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 cursor-not-allowed"}`}
        disabled={!canSave}
        onClick={save}
      >
        Save
      </button>
    </div>
  );
}
