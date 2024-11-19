import { StaticPage as TStaticPage } from "../api/staticPage/StaticPage";

export const STATICPAGE_TITLE_FIELD = "id";

export const StaticPageTitle = (record: TStaticPage): string => {
  return record.id?.toString() || String(record.id);
};
