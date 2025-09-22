"use client";
import { useState } from "react";
import { useEditor } from "./EditorProvider";

export function Editable({
  blockId,
  path,
  value,
  type = "text",
  placeholder,
}: {
  blockId: string;
  path: string;
  value: any;
  type?: "text" | "textarea" | "url";
  placeholder?: string;
}) {
  const { editing, setField } = useEditor();
  const [initial] = useState(value ?? "");
  if (!editing) return <>{value}</>;

  const Input = type === "textarea" ? "textarea" : "input";
  return (
    <span className="relative group">
      <Input
        defaultValue={initial}
        placeholder={placeholder}
        onBlur={(event: any) => setField(blockId, path, event.target.value)}
        className="bg-transparent outline-none border-b border-dashed border-transparent group-hover:border-blue-500"
      />
      <span className="absolute -top-3 right-0 text-xs text-blue-500 opacity-0 group-hover:opacity-100">✎</span>
    </span>
  );
}
