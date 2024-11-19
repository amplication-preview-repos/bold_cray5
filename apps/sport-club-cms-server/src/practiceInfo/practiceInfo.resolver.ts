import * as graphql from "@nestjs/graphql";
import { PracticeInfoResolverBase } from "./base/practiceInfo.resolver.base";
import { PracticeInfo } from "./base/PracticeInfo";
import { PracticeInfoService } from "./practiceInfo.service";

@graphql.Resolver(() => PracticeInfo)
export class PracticeInfoResolver extends PracticeInfoResolverBase {
  constructor(protected readonly service: PracticeInfoService) {
    super(service);
  }
}
