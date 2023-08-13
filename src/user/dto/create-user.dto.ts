import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    default: "admin"
  })
  name: string;
  
  @ApiProperty({
    default: "admin"
  })
  password: string;
}
