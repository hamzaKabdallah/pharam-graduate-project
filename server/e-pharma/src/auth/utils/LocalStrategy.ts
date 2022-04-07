
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
      super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: true,
          secretOrKey: 'klsdhjfkhwakjnsdkjhal',
        });
    }
    
    async validate(payload: any) {
      console.log('local log');
      return payload;
    //   request.user = user; same idea
    // return { userId: payload.sub, email: payload.email, userType: payload.userType };
  }
}
