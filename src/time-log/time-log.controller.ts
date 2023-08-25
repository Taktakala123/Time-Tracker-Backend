import { Controller,Get,Post,Put,Param } from '@nestjs/common';
import { TimeLogService } from './time-log.service';

@Controller('time-log')
export class TimeLogController {
    constructor(private readonly timeLogService: TimeLogService) {}

  @Get()
  async findAll() {
    return this.timeLogService.findAll();
  }

  @Post('start')
  async startNewTimeLog() {
    return this.timeLogService.startNew();
  }


  @Put('stop/:id')
  async stopTimeLog(@Param('id') id: number) {
    return this.timeLogService.stopTimeLog(id);
  }

}
