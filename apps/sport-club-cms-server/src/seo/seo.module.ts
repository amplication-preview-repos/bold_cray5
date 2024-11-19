import { Module } from "@nestjs/common";
import { SeoModuleBase } from "./base/seo.module.base";
import { SeoService } from "./seo.service";
import { SeoController } from "./seo.controller";
import { SeoResolver } from "./seo.resolver";

@Module({
  imports: [SeoModuleBase],
  controllers: [SeoController],
  providers: [SeoService, SeoResolver],
  exports: [SeoService],
})
export class SeoModule {}
