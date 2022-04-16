import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './createPost.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {}

// PartialType 인자에 타입을 상속하고 싶은 dto를 넣으면 되고, 필수 값이 아님?
