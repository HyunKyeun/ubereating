import { Module } from '@nestjs/common';
import { RestaurantResovler } from './restaurants.resolver';

@Module({
  providers: [RestaurantResovler],
})
export class RestaurantsModule {}
