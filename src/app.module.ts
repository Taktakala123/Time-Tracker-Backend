import { Module } from '@nestjs/common';
import { TimeLogService } from './time-log/time-log.service';
import { TimeLogModule } from './time-log/time-log.module';
import { PrismaService } from './prisma.service';


@Module({
  imports: [TimeLogModule],
  controllers: [],
  providers: [TimeLogService,PrismaService],
})
export class AppModule {}
