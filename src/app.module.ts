import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// @가 붙는 키워드는 데코레이터라고 한다.
// 데코레이터는 해당 클래스나 함수가 어떤 역할을 하는지에 대해
// Nest.js 에 알려주는 역할을 한다.
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
