import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'raja.db.elephantsql.com',
    port: 5432,
    username: 'cmdbbtbi',
    password: 'wG8m7trOngY7VAgZtET1dqtJjQJNi-FE',
    database: 'cmdbbtbi',
    entities: ['src/**/**.entity{.ts,.js}'],
    synchronize: true
};