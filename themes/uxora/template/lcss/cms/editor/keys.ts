export const lsKey = (site: string, page: string) => `cms:draft:${site}:${page}`;
export const lsFlag = (site: string, page: string) => `cms:editing:${site}:${page}`;
export const activateEdit = (site: string, page: string, doc: any) => {
  localStorage.setItem(lsKey(site, page), JSON.stringify(doc));
  localStorage.setItem(lsFlag(site, page), "1");
};
export const deactivateEdit = (site: string, page: string) => {
  localStorage.removeItem(lsKey(site, page));
  localStorage.removeItem(lsFlag(site, page));
};
export const isEditing = (site: string, page: string) => localStorage.getItem(lsFlag(site, page)) === "1";
