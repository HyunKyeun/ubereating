import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderService } from './orders.service';

import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { OrderResolver } from './orders.resolver';
import { OrderItem } from './entities/order-item.entity';
import { Dish } from 'src/restaurants/entities/dish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Restaurant, Dish, OrderItem])],
  providers: [OrderService, OrderResolver],
})
export class OrdersModule {}
