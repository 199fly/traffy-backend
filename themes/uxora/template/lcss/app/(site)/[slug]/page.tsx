import { EditorProvider } from "@/cms/editor/EditorProvider";
import EditorFooter from "@/cms/editor/EditorFooter";
import type { PageDoc } from "@/cms/core/types";
import ClientPage from "./ClientPage";

async function fetchPageDoc(pageId: string): Promise<PageDoc> {
  const res = await fetch(
    `${process.env.DIRECTUS_URL}/items/pages/${pageId}?fields=document,document_version`,
    {
      headers: { Authorization: `Bearer ${process.env.DIRECTUS_SERVICE_TOKEN}` },
      cache: "no-store",
    }
  );
  const data = await res.json();
  const doc = data?.data?.document as PageDoc;
  return { ...doc, version: data?.data?.document_version ?? doc?.version ?? 1 };
}

export default async function Page({ params }: { params: { slug?: string } }) {
  const siteId = "site_current";
  const pageId = params.slug ? `pg_${params.slug}` : "pg_home";
  const serverDoc = await fetchPageDoc(pageId);
  const canEdit = true;

  return (
    <EditorProvider siteId={siteId} pageId={pageId} serverDoc={serverDoc}>
      <ClientPage canEdit={canEdit} />
      <EditorFooter siteId={siteId} pageId={pageId} serverDoc={serverDoc} />
    </EditorProvider>
  );
}
