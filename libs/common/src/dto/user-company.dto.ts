import { IsString, IsOptional, IsMongoId } from 'class-validator';

import { Types } from "mongoose";

export class UserCompanyDto {

  @IsMongoId()
  userId: string;

  @IsMongoId()
  companyId: Types.ObjectId;

  role: string[];
}