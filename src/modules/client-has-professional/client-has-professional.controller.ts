import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientHasProfessionalService } from './client-has-professional.service';
import { CreateClientHasProfessionalDto, UpdateClientHasProfessionalDto } from './dto';
import { client_has_professional } from '@prisma/client';

@Controller()
export class ClientHasProfessionalController {

    constructor(private readonly clientHasProfessionalService: ClientHasProfessionalService) {}

    @MessagePattern('community.find.professional')
    create(
        @Payload('relation') relation: { client_fk: number, professional_fk: number },
    ): Promise<client_has_professional> {

        return this.clientHasProfessionalService.findOneByUnique({
            whereUniqueInput: { client_fk_professional_fk: relation }
        })
    }

}
