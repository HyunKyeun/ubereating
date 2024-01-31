import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, ManyToOne, OneToMany, RelationId } from 'typeorm';
import { Category } from './category.entity';
import { User } from 'src/users/entities/user.entity';
import { Dish } from './dish.entity';
import { Order } from 'src/orders/entities/order.entity';

@InputType('RestaurantInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant extends CoreEntity {
  @Field(() => String)
  @Column()
  @IsString()
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  @IsString()
  coverImg: string;

  @Field(() => String)
  @Column()
  @IsString()
  address: string;

  @Field(() => Category, { nullable: true })
  @ManyToOne(() => Category, (category) => category.restaurants, {
    nullable: true,
    onDelete: 'SET NULL',
    eager: true,
  })
  category: Category;

  @ManyToOne(() => User, (user) => user.restaurants, { onDelete: 'CASCADE' })
  @Field(() => User)
  owner: User;

  @OneToMany(() => Order, (order) => order.restaurant, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  @Field(() => Order)
  orders: Order[];

  @RelationId((restaurant: Restaurant) => restaurant.owner)
  ownerId: number;

  @Field(() => [Dish], { nullable: true })
  @OneToMany(() => Dish, (dish) => dish.restaurant)
  menu: Dish[];

  @Field(() => Boolean)
  @Column({ default: false })
  isPromoted: boolean;

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  promotedUntil: Date;
}
