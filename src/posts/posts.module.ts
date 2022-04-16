import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsRepository } from './repository/posts.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PostsRepository])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class MoviesModule {}
