import { IsNumber, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly userPw: string;
}

export class findUserDTO {
  @IsString()
  readonly userId: string;
}

export class updateUserDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly userId: string;

  @IsString()
  readonly userPw: string;
}
