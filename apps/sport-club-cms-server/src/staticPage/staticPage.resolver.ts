import * as graphql from "@nestjs/graphql";
import { StaticPageResolverBase } from "./base/staticPage.resolver.base";
import { StaticPage } from "./base/StaticPage";
import { StaticPageService } from "./staticPage.service";

@graphql.Resolver(() => StaticPage)
export class StaticPageResolver extends StaticPageResolverBase {
  constructor(protected readonly service: StaticPageService) {
    super(service);
  }
}
