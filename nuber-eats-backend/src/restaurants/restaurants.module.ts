import { Module } from '@nestjs/common';
import { RestaurantResovler } from './restaurants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsService } from './restaurants.service';
import { Category } from './entities/catergory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, Category])],
  providers: [RestaurantResovler, RestaurantsService],
})
export class RestaurantsModule {}
