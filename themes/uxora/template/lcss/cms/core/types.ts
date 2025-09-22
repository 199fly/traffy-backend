export type EditableField = { path: string; type: "text" | "textarea" | "url" | "image" };
export type PageBlock = {
  id: string;
  type: string;
  props: any;
  editable?: EditableField[];
  meta?: Record<string, any>;
};
export type PageDoc = {
  id: string;
  version: number;
  components: PageBlock[];
  pageVars?: any;
  settings?: any;
};
