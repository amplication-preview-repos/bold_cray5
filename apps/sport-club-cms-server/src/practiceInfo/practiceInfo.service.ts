import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PracticeInfoServiceBase } from "./base/practiceInfo.service.base";

@Injectable()
export class PracticeInfoService extends PracticeInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
