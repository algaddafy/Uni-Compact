import { Module } from '@nestjs/common';
import { AnnouncementsService } from './announcement.service';
import { AnnouncementsController } from './announcement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Announcement } from './entities/announcement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Announcement])],
  controllers: [AnnouncementsController],
  providers: [AnnouncementsService]
})
export class AnnouncementsModule {}
