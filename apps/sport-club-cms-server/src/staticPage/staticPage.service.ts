import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StaticPageServiceBase } from "./base/staticPage.service.base";

@Injectable()
export class StaticPageService extends StaticPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
