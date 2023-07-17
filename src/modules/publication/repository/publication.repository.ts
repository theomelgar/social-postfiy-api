import { Prisma, Publication } from '@prisma/client';

export abstract class PublicationRepository {
  abstract create(
    data: Prisma.PublicationUncheckedCreateInput,
  ): Promise<Publication>;
  abstract findByTitle(title: string): Promise<Publication>;
  abstract findByUserId(userId: number): Promise<Publication[]>;
  abstract togglePublish(publicationId: number, status: boolean): Promise<Publication>;
}