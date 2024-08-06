import { Module } from '@nestjs/common';
import { ClientHasProfessionalService } from './client-has-professional.service';
import { ClientHasProfessionalController } from './client-has-professional.controller';

@Module({
  controllers: [ClientHasProfessionalController],
  providers: [ClientHasProfessionalService],
})
export class ClientHasProfessionalModule {}
