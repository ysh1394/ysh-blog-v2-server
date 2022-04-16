import { EntityRepository, Repository } from 'typeorm';
import { Posts } from '../entities/posts.entity';

@EntityRepository(Posts)
export class PostsRepository extends Repository<Posts> {}
