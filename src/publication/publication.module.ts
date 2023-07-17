import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { PrismaUsersRepository } from 'src/users/repository/implementations/prismaUsers.repository'; 
import { UsersRepository } from 'src/users/repository/user.repository';
import { UsersService } from '../users/users.service';
import { PrismaPublicationRepository } from './repository/implementations/prismaPublication.repository';
import { PublicationRepository } from './repository/publication.repository';

@Module({
  imports: [JwtModule.register({ secret: process.env.JWT_SECRET })],
  controllers: [PublicationController],
  providers: [
    PublicationService,
    AuthService,
    UsersService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    PublicationService,
    {
      provide: PublicationRepository,
      useClass: PrismaPublicationRepository,
    },
  ],
})
export class PublicationModule {}