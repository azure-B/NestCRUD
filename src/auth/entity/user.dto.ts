import { IsNumber, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly userPw: string;
}
