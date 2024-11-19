import { StaticPageWhereInput } from "./StaticPageWhereInput";
import { StaticPageOrderByInput } from "./StaticPageOrderByInput";

export type StaticPageFindManyArgs = {
  where?: StaticPageWhereInput;
  orderBy?: Array<StaticPageOrderByInput>;
  skip?: number;
  take?: number;
};
