import { Module } from "@nestjs/common";
import { StaticPageModuleBase } from "./base/staticPage.module.base";
import { StaticPageService } from "./staticPage.service";
import { StaticPageController } from "./staticPage.controller";
import { StaticPageResolver } from "./staticPage.resolver";

@Module({
  imports: [StaticPageModuleBase],
  controllers: [StaticPageController],
  providers: [StaticPageService, StaticPageResolver],
  exports: [StaticPageService],
})
export class StaticPageModule {}
