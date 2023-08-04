import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { PublicationRepository } from './repository/publication.repository';

@Injectable()
export class PublicationService {
  constructor(private readonly publicationRepository: PublicationRepository) {}

  async create(userId: number, createPublicationDto: CreatePublicationDto) {
    const publication = await this.publicationRepository.findByTitle(
      createPublicationDto.title,
    );

    if (publication) {
      throw new HttpException(
        'Publication already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.publicationRepository.create({
      ...createPublicationDto,
      userId,
    });
  }

  async findByUserId(userId: number) {
    return await this.publicationRepository.findByUserId(userId);
  }

  async update(id: number, status: boolean) {
    return await this.publicationRepository.togglePublish(id, status);
  }

  async remove(id: number) {
    return await this.publicationRepository.deleteByPostId(id);
  }
}
