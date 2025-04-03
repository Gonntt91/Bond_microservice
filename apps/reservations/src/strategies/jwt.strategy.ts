import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokenPayload } from '../interfaces/token-payload.interface';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) =>
          request?.cookies?.Authentication ||
          request?.Authentication ||
          request?.headers.Authentication,
      ]),
      secretOrKey: configService.get('JWT_PUBLIC_KEY'), // use public key for verification
      algorithms: ['RS256'],
      ignoreExpiration: false,
    });
  }

  async validate(payload: TokenPayload) {
    if (!payload.roles || !payload.roles.includes('Admin')) {
      throw new UnauthorizedException('You do not have the required role.');
    }
    return payload;
  }

}
