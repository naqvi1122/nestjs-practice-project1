import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { User } from "./user.entity";
import {Post} from './post.entity'

@Module({
    imports:[TypeOrmModule.forFeature([User,Post])],
controllers:[AuthController],
providers:[AuthService]

})
export class AuthModule{}