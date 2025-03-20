import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { bondsService } from './bonds.service';
import { bondsController } from './bonds.controller';
import {
  DatabaseModule,
  LoggerModule,
  AUTH_SERVICE,
  PAYMENTS_SERVICE,
  HealthModule,
} from '@app/common';
import { bondsRepository } from './bonds.repository';
import {
  BondDocument,
  bondschema,
} from './models/bonds.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: BondDocument.name, schema: bondschema },
    ]),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
        AUTH_HOST: Joi.string().required(),
        PAYMENTS_HOST: Joi.string().required(),
        AUTH_PORT: Joi.number().required(),
        PAYMENTS_PORT: Joi.number().required(),
      }),
    }),
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('AUTH_HOST'),
            port: configService.get('AUTH_PORT'),
          },
        }),
        inject: [ConfigService],
      },
      {
        name: PAYMENTS_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('PAYMENTS_HOST'),
            port: configService.get('PAYMENTS_PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
    HealthModule,
    WalletModule,
  ],
  controllers: [bondsController],
  providers: [bondsService, bondsRepository],
})
export class bondsModule {}
