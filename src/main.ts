import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // dotenv.config({ path: ".env.production" });
  const puerto = process.env.PUERTO;
  // console.log('PUERTO:', puerto);

  const app = await NestFactory.create(AppModule);
  const configService : ConfigService = app.get(ConfigService);
  /*
  console.log('PORT:', process.env.PORT);
  console.log('USUARIO:', process.env.USUARIO);
  console.log('CLAVE:', process.env.CLAVE);
  console.log('AMBIENTE:', process.env.AMBIENTE);
  console.log(process.env.npm_package_name);
  console.log(process.env.npm_package_version);
  console.log(process.env.npm_package_dependencies_rxjs)
  console.log(process.env.npm_package_author_name)
  console.log(process.env.npm_package_author_email)
  */
  console.log('PORT:', configService.get("PORT"));
  console.log('USUARIO:', configService.get("USUARIO"));
  console.log('CLAVE:', configService.get("CLAVE"));
  console.log('AMBIENTE:', configService.get("AMBIENTE"));
  const name = configService.get("npm_package_name");
  const description = configService.get("npm_package_description");
  const version = configService.get("npm_package_version");
  const authorName = configService.get("npm_package_author_name");
  const authorUrl = configService.get("npm_package_author_url");
  const authorEmail = configService.get("npm_package_author_email");
  const license = configService.get("npm_package_license");


  const config = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    .setContact(authorName, authorUrl, authorEmail)
    .setLicense(license, "")
    .addTag('Ejemplos')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [ AppModule ]
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
