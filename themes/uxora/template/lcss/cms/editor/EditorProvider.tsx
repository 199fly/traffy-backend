"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { lsKey, lsFlag } from "./keys";
import type { PageBlock, PageDoc } from "@/cms/core/types";

function setAt(obj: any, path: string, val: any) {
  const parts = path.split(".");
  const next = Array.isArray(obj) ? [...obj] : { ...obj };
  let cur: any = next;
  for (let i = 0; i < parts.length - 1; i++) {
    const k = parts[i];
    cur[k] = cur[k] ?? {};
    cur[k] = Array.isArray(cur[k]) ? [...cur[k]] : { ...cur[k] };
    cur = cur[k];
  }
  cur[parts.at(-1)!] = val;
  return next;
}

type Ctx = {
  editing: boolean;
  doc: PageDoc;
  setField: (blockId: string, path: string, value: any) => void;
  addComponent: (block: PageBlock, index?: number) => void;
  removeComponent: (blockId: string) => void;
  moveComponent: (blockId: string, toIndex: number) => void;
};
const C = createContext<Ctx | null>(null);
export const useEditor = () => {
  const ctx = useContext(C);
  if (!ctx) throw new Error("useEditor outside");
  return ctx;
};

export function EditorProvider({ siteId, pageId, serverDoc, children }: {
  siteId: string;
  pageId: string;
  serverDoc: PageDoc;
  children: React.ReactNode;
}) {
  const key = useMemo(() => lsKey(siteId, pageId), [siteId, pageId]);
  const flag = useMemo(() => lsFlag(siteId, pageId), [siteId, pageId]);
  const [editing, setEditing] = useState(false);
  const [doc, setDoc] = useState<PageDoc>(serverDoc);

  useEffect(() => {
    const active = localStorage.getItem(flag) === "1";
    setEditing(active);
    if (active) {
      const raw = localStorage.getItem(key);
      if (raw) {
        try {
          setDoc(JSON.parse(raw));
        } catch {
          setDoc(serverDoc);
        }
      } else {
        localStorage.setItem(key, JSON.stringify(serverDoc));
        setDoc(serverDoc);
      }
    } else {
      setDoc(serverDoc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag, key, serverDoc.version]);

  function persist(next: PageDoc) {
    setDoc(next);
    if (editing) localStorage.setItem(key, JSON.stringify(next));
  }

  const api: Ctx = {
    editing,
    doc,
    setField: (blockId, path, value) => {
      if (!editing) return;
      const index = doc.components.findIndex((b) => b.id === blockId);
      if (index < 0) return;
      const updatedBlock: PageBlock = {
        ...doc.components[index],
        props: setAt(doc.components[index].props || {}, path.replace(/^props\./, ""), value),
      };
      const nextDoc: PageDoc = {
        ...doc,
        components: doc.components.map((block, idx) => (idx === index ? updatedBlock : block)),
      };
      persist(nextDoc);
    },
    addComponent: (block, index) => {
      if (!editing) return;
      const components = [...doc.components];
      if (typeof index === "number") components.splice(index, 0, block);
      else components.push(block);
      persist({ ...doc, components });
    },
    removeComponent: (blockId) => {
      if (!editing) return;
      persist({ ...doc, components: doc.components.filter((b) => b.id !== blockId) });
    },
    moveComponent: (blockId, toIndex) => {
      if (!editing) return;
      const components = [...doc.components];
      const from = components.findIndex((b) => b.id === blockId);
      if (from < 0) return;
      const [item] = components.splice(from, 1);
      components.splice(Math.max(0, Math.min(toIndex, components.length)), 0, item);
      persist({ ...doc, components });
    },
  };

  return <C.Provider value={api}>{children}</C.Provider>;
}
