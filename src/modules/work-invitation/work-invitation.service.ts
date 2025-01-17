import { Injectable } from '@nestjs/common';
import { CreateWorkInvitationDto, UpdateWorkInvitationDto } from './dto';

@Injectable()
export class WorkInvitationService {
  create(createWorkInvitationDto: CreateWorkInvitationDto) {
    return 'This action adds a new workInvitation';
  }

  findAll() {
    return `This action returns all workInvitation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workInvitation`;
  }

  update(id: number, updateWorkInvitationDto: UpdateWorkInvitationDto) {
    return `This action updates a #${id} workInvitation`;
  }

  remove(id: number) {
    return `This action removes a #${id} workInvitation`;
  }
}
