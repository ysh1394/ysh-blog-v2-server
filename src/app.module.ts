// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeORMConfig } from './configs/typeorm.config';
import { MoviesModule } from './posts/posts.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), MoviesModule],
  controllers: [AppController], // express 에서 route 같은 기능만 넣음
  providers: [AppService], // service는 비즈니스 로직
})
export class AppModule {}
