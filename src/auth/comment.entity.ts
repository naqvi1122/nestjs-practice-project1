
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Post } from './post.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:'comment'})
  comment: string;

  @ManyToOne(() => Post, (post) => post.id)
  post_id: Post;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

}