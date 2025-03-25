// import { IsString, IsOptional } from 'class-validator';

export class CompanyDto {

  _id: string;

  // @IsString()
  companyCode: string;

  // @IsString()
  companyName: string;

  // @IsString()
  // @IsOptional()
  address?: string;
}