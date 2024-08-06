import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkInvitationDto } from './create-work-invitation.dto';

export class UpdateWorkInvitationDto extends PartialType(CreateWorkInvitationDto) {
  id: number;
}
