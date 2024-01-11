import { Module } from '@nestjs/common';
import { RestaurantResovler } from './restaurants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsService } from './restaurants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [RestaurantResovler, RestaurantsService],
})
export class RestaurantsModule {}
