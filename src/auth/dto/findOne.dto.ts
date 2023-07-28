import { IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  readonly userId: string;
}
