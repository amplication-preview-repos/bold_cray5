import { PracticeInfoWhereInput } from "./PracticeInfoWhereInput";
import { PracticeInfoOrderByInput } from "./PracticeInfoOrderByInput";

export type PracticeInfoFindManyArgs = {
  where?: PracticeInfoWhereInput;
  orderBy?: Array<PracticeInfoOrderByInput>;
  skip?: number;
  take?: number;
};
