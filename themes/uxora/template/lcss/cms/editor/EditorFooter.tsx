"use client";
import { useEffect, useState } from "react";
import { activateEdit, deactivateEdit, lsFlag } from "./keys";
import { SaveMenu } from "./SaveMenu";

export default function EditorFooter({
  siteId,
  pageId,
  serverDoc,
}: {
  siteId: string;
  pageId: string;
  serverDoc: any;
}) {
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    setEditing(localStorage.getItem(lsFlag(siteId, pageId)) === "1");
  }, [siteId, pageId]);

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-black/80 text-white flex items-center justify-center gap-3 py-2">
      {!editing ? (
        <button
          className="px-3 py-1 rounded bg-white/10 hover:bg-white/20"
          onClick={() => {
            activateEdit(siteId, pageId, serverDoc);
            setEditing(true);
          }}
        >
          Start Editing
        </button>
      ) : (
        <>
          <SaveMenu siteId={siteId} pageId={pageId} />
          <button
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20"
            onClick={() => {
              deactivateEdit(siteId, pageId);
              setEditing(false);
              location.reload();
            }}
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
}
