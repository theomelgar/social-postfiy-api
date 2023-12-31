import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { AuthGuard } from 'src/modules/auth/authGuard/auth.guard';
import { UserRequest } from 'src/modules/auth/decorators/user.decorator';
import { User } from '@prisma/client';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(
    @Body() createPublicationDto: CreatePublicationDto,
    @UserRequest() user: User,
  ) {
    const { id } = user;
    return this.publicationService.create(id, createPublicationDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  getUserPublications(@UserRequest() user: User) {
    const { id } = user;
    return this.publicationService.findByUserId(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePublicationDto: UpdatePublicationDto,
  ) {
    const postId = Number(id);
    return this.publicationService.update(
      postId,
      updatePublicationDto.published,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publicationService.remove(+id);
  }
}
