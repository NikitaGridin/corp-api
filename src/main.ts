import * as session from 'express-session';
import * as passport from 'passport';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'keyword',
      resave: false,
      saveUninitialized: false,
    }),
  );
  
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000'],
  });
  
  const config = new DocumentBuilder()
  .setTitle('Corp Api')
  .setDescription('api documentation')
  .setVersion('1.0')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(5000);
}
bootstrap();