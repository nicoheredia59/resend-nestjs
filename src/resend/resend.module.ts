import { Module } from '@nestjs/common';

import { ResendController } from './resend.controller';
import { ResendService } from './resend.service';

@Module({
  controllers: [ResendController],
  providers: [ResendService],
})
export class ResendModule {}
