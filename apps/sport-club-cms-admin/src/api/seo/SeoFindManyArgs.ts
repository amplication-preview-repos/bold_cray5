import { SeoWhereInput } from "./SeoWhereInput";
import { SeoOrderByInput } from "./SeoOrderByInput";

export type SeoFindManyArgs = {
  where?: SeoWhereInput;
  orderBy?: Array<SeoOrderByInput>;
  skip?: number;
  take?: number;
};
