import { IsNotEmpty, IsString } from 'class-validator';

/**
 * @param _id: from frontend
 */

export class GetUserDto {
  @IsString()
  @IsNotEmpty()
  _id: string;
}
