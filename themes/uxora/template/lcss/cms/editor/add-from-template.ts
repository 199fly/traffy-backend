import type { PageBlock } from "@/cms/core/types";

type Template = {
  type: string;
  template?: {
    props?: Record<string, any>;
    editable?: any;
    meta?: Record<string, any>;
  };
};

const randomId = () => `blk_${Math.random().toString(36).slice(2, 10)}`;

export function createBlockFromTemplate(template: Template): PageBlock {
  const blueprint = template.template || {};
  return {
    id: randomId(),
    type: template.type,
    props: blueprint.props ?? {},
    editable: blueprint.editable,
    meta: blueprint.meta,
  };
}
