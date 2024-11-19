import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PracticeInfoService } from "./practiceInfo.service";
import { PracticeInfoControllerBase } from "./base/practiceInfo.controller.base";

@swagger.ApiTags("practiceInfos")
@common.Controller("practiceInfos")
export class PracticeInfoController extends PracticeInfoControllerBase {
  constructor(protected readonly service: PracticeInfoService) {
    super(service);
  }
}
