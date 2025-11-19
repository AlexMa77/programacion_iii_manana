import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicsModule } from './basics/basics.module';

@Module({
  imports: [
    BasicsModule,

    // 🔥 Conexión a PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',  
      password: '12345',  
      database: 'blogdb',       
      autoLoadEntities: true,
      synchronize: true,        
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
