import { Module } from '@nestjs/common';

import { EnvironmentModule } from '@/environment/environment.module';
import { ResendModule } from '@/resend/resend.module';

@Module({
  imports: [EnvironmentModule, ResendModule],
})
export class AppModule {}
