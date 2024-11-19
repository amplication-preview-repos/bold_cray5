import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SeoServiceBase } from "./base/seo.service.base";

@Injectable()
export class SeoService extends SeoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
