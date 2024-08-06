import { Module } from '@nestjs/common';
import { ClientHasProfessionalModule, WorkInvitationModule } from './modules';

@Module({
  imports: [ClientHasProfessionalModule, WorkInvitationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
