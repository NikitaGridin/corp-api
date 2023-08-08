import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    default: "123"
  })
  name: string;
  
  @ApiProperty({
    default: "123"
  })
  password: string;
}
