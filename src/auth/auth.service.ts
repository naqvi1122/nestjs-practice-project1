import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'
import { Post } from "./post.entity";
@Injectable({})
export class AuthService{

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @InjectRepository(Post)  
         private postRepository: Repository<Post>,
      ) {}
   async login(req){
    console.log('reqqqqq,',req)
    let user =await this.usersRepository.findOne({where:{id:req.id}})
    let payload={
        id:user.id,
        first_name:user.firstName
    }
    console.log('userrrr,',user)
    if(user){
        const token=jwt.sign(payload,'jfjsbbbsdbjsbd')
        console.log('tokeennnnn',token)
return{user:user,token:token}

    }else{
        return{msg:"user is not found "}
    }

   }

   async signup(UserDto){
    console.log('reqqqq',UserDto.firstName)
    // let create_user=this.usersRepository.create({
    //     firstName:'ahad',
    //     lastName:'shah',
    //     phone:"111122233"
    // })
    let hashPassword=await bcrypt.hash(UserDto.password,10)
    // console.log('userdatais ',req)
    let newUser={
        firstName:UserDto.firstName,
        lastName:UserDto.lastName,
        phone:UserDto.phone,
        password:hashPassword
    }
    
     await this.usersRepository.save(newUser)

return {msg:'user created '}
   }


   async allUserList(){
    let allUser=await this.usersRepository.find({relations: ['posts.comment.user']})
    return{users:allUser}

   }

   async updateUser(data){
    console.log('datatatta',data)
    let user=await this.usersRepository.findOne({where:{id:data.id}})

    console.log('getspecfic user',user)
    if(user){
    
        user. firstName=data.firstName||user.firstName,
        user.lastName=data.lastName||user.lastName,
        user.phone=data.phone||user.phone
    
    await this.usersRepository.save(user)
    return{msg:"user information update"}
}else{
    return{msg:'user not found '}
}

   }

  async deleteUser(id){
 
    await this.usersRepository.delete(id);
    return{msg:"user is deleteddd"}
   }
   async createPost(data){

    
return{msg:"post data is created"}
   }
}




 