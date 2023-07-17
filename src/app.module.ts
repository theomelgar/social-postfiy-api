import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [UsersModule, PrismaModule, AuthModule, PublicationModule],
})
export class AppModule {}
