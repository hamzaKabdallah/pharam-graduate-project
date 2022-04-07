import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(session({
    name: 'NESTJS_SESSION_ID',
    secret: 'SADLKFIERNVDOLKIASDTRJKLDFJGLKA',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30000
    }
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(8101);
}
bootstrap();
