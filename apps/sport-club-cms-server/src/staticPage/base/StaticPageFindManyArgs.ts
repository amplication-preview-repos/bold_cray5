/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StaticPageWhereInput } from "./StaticPageWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { StaticPageOrderByInput } from "./StaticPageOrderByInput";

@ArgsType()
class StaticPageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => StaticPageWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => StaticPageWhereInput, { nullable: true })
  @Type(() => StaticPageWhereInput)
  where?: StaticPageWhereInput;

  @ApiProperty({
    required: false,
    type: [StaticPageOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [StaticPageOrderByInput], { nullable: true })
  @Type(() => StaticPageOrderByInput)
  orderBy?: Array<StaticPageOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { StaticPageFindManyArgs as StaticPageFindManyArgs };
