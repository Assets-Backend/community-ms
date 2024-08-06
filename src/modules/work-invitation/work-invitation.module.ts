import { Module } from '@nestjs/common';
import { WorkInvitationService } from './work-invitation.service';
import { WorkInvitationController } from './work-invitation.controller';

@Module({
  controllers: [WorkInvitationController],
  providers: [WorkInvitationService],
})
export class WorkInvitationModule {}
