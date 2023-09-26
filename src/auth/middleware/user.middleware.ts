
import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken'
@Injectable()
export class UserMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (!req.headers) {
            throw new HttpException('Missing request headers', 400);
          }
      
          const authorizationHeader = req.headers['authorization'];
          if (!authorizationHeader) {
            throw new HttpException('Missing Authorization header', 401);
          }
          console.log('jwtttt',authorizationHeader)
        //   let decoded=jwt.verify(authorizationHeader,'jfjsbbbsdbjsbd',)
        //   console.log('decodeeddd',decoded)
      try {
        let decoded=jwt.verify(authorizationHeader,'jfjsbbbsdbjsbd')
        console.log('decodeeddd',decoded)
        next();
      } catch (error) {
        return{msg:error}
      }
         
        //   const token = authorizationHeader.split(' ')[1];
        //   if (!token) {
        //     throw new HttpException('Missing JWT token', 401);
        //   }
      
          // Validate the JWT token here
      
          // If the token is valid, continue with the middleware logic
        
      
    }
  }
  