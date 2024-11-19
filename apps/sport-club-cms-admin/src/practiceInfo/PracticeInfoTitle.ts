import { PracticeInfo as TPracticeInfo } from "../api/practiceInfo/PracticeInfo";

export const PRACTICEINFO_TITLE_FIELD = "id";

export const PracticeInfoTitle = (record: TPracticeInfo): string => {
  return record.id?.toString() || String(record.id);
};
