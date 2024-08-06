import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientHasProfessionalService } from './client-has-professional.service';
import { CreateClientHasProfessionalDto } from './dto/create-client-has-professional.dto';
import { UpdateClientHasProfessionalDto } from './dto/update-client-has-professional.dto';

@Controller()
export class ClientHasProfessionalController {
  constructor(private readonly clientHasProfessionalService: ClientHasProfessionalService) {}

  @MessagePattern('createClientHasProfessional')
  create(@Payload() createClientHasProfessionalDto: CreateClientHasProfessionalDto) {
    return this.clientHasProfessionalService.create(createClientHasProfessionalDto);
  }

  @MessagePattern('findAllClientHasProfessional')
  findAll() {
    return this.clientHasProfessionalService.findAll();
  }

  @MessagePattern('findOneClientHasProfessional')
  findOne(@Payload() id: number) {
    return this.clientHasProfessionalService.findOne(id);
  }

  @MessagePattern('updateClientHasProfessional')
  update(@Payload() updateClientHasProfessionalDto: UpdateClientHasProfessionalDto) {
    return this.clientHasProfessionalService.update(updateClientHasProfessionalDto.id, updateClientHasProfessionalDto);
  }

  @MessagePattern('removeClientHasProfessional')
  remove(@Payload() id: number) {
    return this.clientHasProfessionalService.remove(id);
  }
}
