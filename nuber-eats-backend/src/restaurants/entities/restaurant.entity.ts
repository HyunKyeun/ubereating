import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';
import { Category } from './category.entity';
import { User } from 'src/users/entities/user.entity';

@InputType('RestaurantInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant extends CoreEntity {
  @Field(() => String)
  @Column()
  @IsString()
  name: string;

  @Field(() => String)
  @Column()
  @IsString()
  coverImg: string;

  @Field(() => String)
  @Column()
  @IsString()
  address: string;

  @ManyToOne(() => Category, (category) => category.restaurants, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @Field(() => Category)
  category: Category;

  @ManyToOne(() => User, (user) => user.restaurants, { onDelete: 'CASCADE' })
  @Field(() => User)
  owner: User;

  @RelationId((restaurant: Restaurant) => restaurant.owner)
  ownerId: number;
}
