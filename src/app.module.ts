import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.env${process.env.ARCHIVO_ENV}`,
    isGlobal: true,
    validate: (config: Record<string, any>) => {
      if (!config.PORT) {
        throw new Error('PORT is required');
      }
      if (config.PORT == "6000") {
        throw new Error('PORT must be different from 6000');
      }
      return {
        PORT: parseInt(config.PORT),
        USUARIO: config.USUARIO,
        CLAVE: config.CLAVE,
        AMBIENTE: config.AMBIENTE,
        npm_package_name: config.npm_package_name,
        npm_package_version: config.npm_package_version,
        npm_package_dependencies_rxjs: config.npm_package_dependencies_rxjs,
        npm_package_author_name: config.npm_package_author_name,
        npm_package_author_email: config.npm_package_author_email
      };
    },

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
