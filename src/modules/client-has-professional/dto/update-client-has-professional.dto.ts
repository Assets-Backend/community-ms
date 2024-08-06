import { PartialType } from '@nestjs/mapped-types';
import { CreateClientHasProfessionalDto } from './create-client-has-professional.dto';

export class UpdateClientHasProfessionalDto extends PartialType(CreateClientHasProfessionalDto) {
  id: number;
}
