import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class UserLoginDto {
  @ApiModelProperty()
  @IsNotEmpty()
  public username: string;

  @ApiModelProperty()
  @IsNotEmpty()
  public password: string;
}
