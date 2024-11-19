import { Module } from "@nestjs/common";
import { PracticeInfoModuleBase } from "./base/practiceInfo.module.base";
import { PracticeInfoService } from "./practiceInfo.service";
import { PracticeInfoController } from "./practiceInfo.controller";
import { PracticeInfoResolver } from "./practiceInfo.resolver";

@Module({
  imports: [PracticeInfoModuleBase],
  controllers: [PracticeInfoController],
  providers: [PracticeInfoService, PracticeInfoResolver],
  exports: [PracticeInfoService],
})
export class PracticeInfoModule {}
