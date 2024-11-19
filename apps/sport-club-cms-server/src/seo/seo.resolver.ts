import * as graphql from "@nestjs/graphql";
import { SeoResolverBase } from "./base/seo.resolver.base";
import { Seo } from "./base/Seo";
import { SeoService } from "./seo.service";

@graphql.Resolver(() => Seo)
export class SeoResolver extends SeoResolverBase {
  constructor(protected readonly service: SeoService) {
    super(service);
  }
}
