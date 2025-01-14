import { Module } from '@nestjs/common';
import { WishModule } from './wish/wish.module';

@Module({
  imports: [WishModule],
})
export class AppModule {}