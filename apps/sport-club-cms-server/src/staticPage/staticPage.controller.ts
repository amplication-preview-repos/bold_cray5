import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StaticPageService } from "./staticPage.service";
import { StaticPageControllerBase } from "./base/staticPage.controller.base";

@swagger.ApiTags("staticPages")
@common.Controller("staticPages")
export class StaticPageController extends StaticPageControllerBase {
  constructor(protected readonly service: StaticPageService) {
    super(service);
  }
}
