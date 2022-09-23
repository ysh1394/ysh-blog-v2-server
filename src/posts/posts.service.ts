import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/createPost.dto';
import { UpdatePostDto } from './dto/updatePost.dto';
import { Posts } from './entities/posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private posts: Repository<Posts>,
  ) {}

  async getAll(): Promise<Posts[]> {
    return this.posts.find();
  }

  async search(query: object): Promise<Posts[]> {
    const allData = await this.getAll();
    // const filter = await allData.
    console.log('year >>>', query);

    return allData;
  }

  async getOne(id: number | any): Promise<Posts> {
    const detailData = await this.posts.findOne(id);
    if (!detailData) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return detailData;
  }

  async create(data: CreatePostDto): Promise<Posts> {
    const allData = await this.getAll();
    console.log(
      '🚀 ~ file: posts.service.ts ~ line 37 ~ PostsService ~ create ~ allData',
      data,
    );
    const newData = await this.posts.create({
      id: allData.length + 1,
      ...data,
    });
    await this.posts.save(newData);
    return newData;
  }

  async deleteOne(id: number): Promise<string> {
    try {
      const data = await this.getOne(id);
      await this.posts.remove(data);
      return `remove id ${id}`;
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  async update(id: number, updateData: UpdatePostDto): Promise<string> {
    try {
      await this.posts.update(id, { ...updateData });
      return `update id ${id}`;
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
}
