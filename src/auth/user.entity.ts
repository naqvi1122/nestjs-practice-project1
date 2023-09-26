import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from './post.entity';
import { Comment } from './comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:'first_name'})
  firstName: string;

  @Column({name:'last_name',nullable:false})
  lastName: string;

  @Column()
  phone: string;
  @Column({nullable:false})
  password: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  
}