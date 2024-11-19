import { Seo as TSeo } from "../api/seo/Seo";

export const SEO_TITLE_FIELD = "id";

export const SeoTitle = (record: TSeo): string => {
  return record.id?.toString() || String(record.id);
};
