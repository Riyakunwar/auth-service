import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service'
import {User} from './user.entity'
import { AppController } from './app.controller';
import {AuthCont}

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'userdb'}),
    MongooseModule.forFeature([{ name: 'user', schema: User }])
  ],
  controllers: [AppController],
  providers: [AppService,AuthService]
})
export class AppModule {}

