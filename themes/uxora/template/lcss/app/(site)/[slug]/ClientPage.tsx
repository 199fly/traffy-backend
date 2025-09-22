"use client";
import { RenderPage } from "@/cms/core/render";
import { useEditor } from "@/cms/editor/EditorProvider";

export default function ClientPage({ canEdit }: { canEdit: boolean }) {
  const { doc } = useEditor();
  return <RenderPage doc={doc} canEdit={canEdit} />;
}
