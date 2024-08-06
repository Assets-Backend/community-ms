import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WorkInvitationService } from './work-invitation.service';
import { CreateWorkInvitationDto, UpdateWorkInvitationDto } from './dto';

@Controller()
export class WorkInvitationController {
  constructor(private readonly workInvitationService: WorkInvitationService) {}

  @MessagePattern('createWorkInvitation')
  create(@Payload() createWorkInvitationDto: CreateWorkInvitationDto) {
    return this.workInvitationService.create(createWorkInvitationDto);
  }

  @MessagePattern('findAllWorkInvitation')
  findAll() {
    return this.workInvitationService.findAll();
  }

  @MessagePattern('findOneWorkInvitation')
  findOne(@Payload() id: number) {
    return this.workInvitationService.findOne(id);
  }

  @MessagePattern('updateWorkInvitation')
  update(@Payload() updateWorkInvitationDto: UpdateWorkInvitationDto) {
    return this.workInvitationService.update(updateWorkInvitationDto.id, updateWorkInvitationDto);
  }

  @MessagePattern('removeWorkInvitation')
  remove(@Payload() id: number) {
    return this.workInvitationService.remove(id);
  }
}
