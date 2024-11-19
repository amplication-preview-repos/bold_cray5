import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SeoService } from "./seo.service";
import { SeoControllerBase } from "./base/seo.controller.base";

@swagger.ApiTags("seos")
@common.Controller("seos")
export class SeoController extends SeoControllerBase {
  constructor(protected readonly service: SeoService) {
    super(service);
  }
}
