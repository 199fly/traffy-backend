import { PageBlock, PageDoc } from "./types";
import { registry } from "./component-registry";

export function RenderBlock({ block, canEdit }: { block: PageBlock; canEdit: boolean }) {
  const Cmp = registry[block.type];
  if (!Cmp) return null;
  return <Cmp block={block} canEdit={canEdit} />;
}

export function RenderPage({ doc, canEdit }: { doc: PageDoc; canEdit: boolean }) {
  const blocks = doc?.components ?? [];
  return <main>{blocks.map((block) => <RenderBlock key={block.id} block={block} canEdit={canEdit} />)}</main>;
}
