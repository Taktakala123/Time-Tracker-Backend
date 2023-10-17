import { ApiProperty } from "@nestjs/swagger";

export class CreateTimeDto {
    @ApiProperty({ required: true })
    id : number;
    @ApiProperty({ required: true })
    StartTime : Date;

    @ApiProperty({ required: false })
    EndTime : Date;

    @ApiProperty({ required: false })
    duration: string;
  }