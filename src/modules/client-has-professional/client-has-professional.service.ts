import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateClientHasProfessionalDto, UpdateClientHasProfessionalDto } from './dto';
import { client_has_professional, Prisma, PrismaClient } from '@prisma/client';
import { RpcException } from '@nestjs/microservices';
import { ClientIds } from 'src/common/interface/client-ids.interface';

@Injectable()
export class ClientHasProfessionalService extends PrismaClient implements OnModuleInit {

    private readonly logger = new Logger('ClientHasProfessionalService');

    async onModuleInit() {
        await this.$connect();
        this.logger.log('Connected to the database');
    }

    async findOneByUnique(params: {
        whereUniqueInput: Prisma.client_has_professionalWhereUniqueInput,
        select?: Prisma.client_has_professionalSelect
    }): Promise<client_has_professional> {

        const {whereUniqueInput: where, select} = params

        try {
            
            return await this.client_has_professional.findUniqueOrThrow({ where, select })

        } catch (error) {
            throw new RpcException({
                status: 400,
                message: error.message
            });
        }
    }
}
