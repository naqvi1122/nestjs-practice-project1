
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Comment } from './comment.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:'title'})
  title: string;

  @Column({name:'description',nullable:false})
  description: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
  @OneToMany(() => Comment, (comment) => comment.post_id)
  comment: Comment[];

}