import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { PublicationModule } from './modules/publication/publication.module';

@Module({
  imports: [UsersModule, PrismaModule, AuthModule, PublicationModule],
})
export class AppModule {}
