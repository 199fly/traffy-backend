"use client";
import { useState } from "react";
import { useEditor } from "./EditorProvider";
import { assetUrl } from "@/cms/core/asset-url";

export default function ImageEditable({
  blockId,
  path,
  fileId,
  alt,
  transformKey,
}: {
  blockId: string;
  path: string;
  fileId?: string;
  alt?: string;
  transformKey?: string;
}) {
  const { editing, setField } = useEditor();
  const [fid, setFid] = useState(fileId);
  const [caption, setCaption] = useState(alt || "");
  const [open, setOpen] = useState(false);

  if (!editing) return <img src={assetUrl(fid, transformKey)} alt={caption} />;

  async function upload(file: File) {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("collection", "pages");
    const res = await fetch("/api/inline-image", { method: "POST", body: fd });
    const data = await res.json();
    if (data?.fileId) {
      setFid(data.fileId);
      setField(blockId, path, { file: data.fileId, alt: caption });
      setOpen(false);
    }
  }

  return (
    <div className="relative group">
      <img
        src={assetUrl(fid, transformKey)}
        alt={caption}
        className="cursor-pointer"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className="absolute z-50 right-0 top-0 bg-white/95 shadow-xl rounded p-3 w-80">
          <div className="text-sm font-medium mb-2">Image</div>
          <input type="file" accept="image/*" onChange={(event) => event.target.files?.[0] && upload(event.target.files[0])} />
          <div className="mt-2">
            <label className="text-xs">Alt text</label>
            <input
              className="w-full border rounded px-2 py-1"
              value={caption}
              onChange={(event) => setCaption(event.target.value)}
              onBlur={() => setField(blockId, path, { file: fid, alt: caption })}
            />
          </div>
          <div className="flex justify-end mt-2">
            <button className="text-sm" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
