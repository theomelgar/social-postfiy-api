import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePublicationDto } from './dto/create-publication.dto';
import { UpdatePublicationDto } from './dto/update-publication.dto';
import { PublicationRepository } from './repository/publication.repository';

@Injectable()
export class PublicationService {
  constructor (private readonly publicationRepository: PublicationRepository){}

  async create(userId:number, createPublicationDto: CreatePublicationDto) {
    const publication = await this.publicationRepository.findByTitle(createPublicationDto.title);

    if (publication) {
      throw new HttpException('Publication already exists', HttpStatus.BAD_REQUEST);
    }

    await this.publicationRepository.create({
      ...createPublicationDto,
      userId,
    });  }

  async findByUserId(userId:number) {
    return await this.publicationRepository.findByUserId(userId)
  }

  update(id: number, updatePublicationDto: UpdatePublicationDto) {
    return `This action updates a #${id} publication`;
  }

  remove(id: number) {
    return `This action removes a #${id} publication`;
  }
}
