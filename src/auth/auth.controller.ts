import { Controller, Post, Req ,Res ,Body ,UsePipes,ValidationPipe, Get, Put, Param, ParseIntPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserDto } from "./authdto/user.dto";
import { get } from "http";

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}
@Post('/login')
    login(@Body() data:any){
        
        return this.authService.login(data)
    }

@Post('/register')
@UsePipes(new ValidationPipe({ transform: true }))
    signup(@Body() userDto: UserDto ){
        return this.authService.signup(userDto);
    }


@Get('/all_user')
    allUserList(){
        return this.authService.allUserList()

    }

    @Put('/update_user')
    updateUser(@Body() data:any){
        
        return this.authService.updateUser(data)
    }
@Post('delete_user/:id')
    deleteUser(@Param('id', ParseIntPipe) id: number){
        return this.authService.deleteUser(id)
    }
    @Post('/create_post')
    createPost(@Body() data:any){
return this.authService.createPost(data)
    }
}

