import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable({})
export class AuthService{

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        // @InjectRepository(Role)   if there is some other table then use this way 
        // private rolesRepository: Repository<Role>,
      ) {}
   login(){
return 'login service method '
   }

   async signup(){
    let create_user=this.usersRepository.create({
        firstName:'ahad',
        lastName:'shah',
        phone:"111122233"
    })
    await this.usersRepository.save(create_user)

return {msg:'user created '}
   }
}