import { Injectable } from '@nestjs/common';
import { CreateWorkInvitationDto } from './dto/create-work-invitation.dto';
import { UpdateWorkInvitationDto } from './dto/update-work-invitation.dto';

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
