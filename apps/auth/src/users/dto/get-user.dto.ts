import { IsNotEmpty, IsString } from 'class-validator';

/**
 * @param _id: from frontend/ client/ other service
 */

export class GetUserDto {
  @IsString()
  @IsNotEmpty()
  _id: string;
}
