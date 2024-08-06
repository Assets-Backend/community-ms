import { Injectable } from '@nestjs/common';
import { CreateClientHasProfessionalDto } from './dto/create-client-has-professional.dto';
import { UpdateClientHasProfessionalDto } from './dto/update-client-has-professional.dto';

@Injectable()
export class ClientHasProfessionalService {
  create(createClientHasProfessionalDto: CreateClientHasProfessionalDto) {
    return 'This action adds a new clientHasProfessional';
  }

  findAll() {
    return `This action returns all clientHasProfessional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientHasProfessional`;
  }

  update(id: number, updateClientHasProfessionalDto: UpdateClientHasProfessionalDto) {
    return `This action updates a #${id} clientHasProfessional`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientHasProfessional`;
  }
}
