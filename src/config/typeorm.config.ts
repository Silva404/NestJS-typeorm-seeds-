import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Coffee } from '../coffee';
import { DataSource, DataSourceOptions } from 'typeorm';

import { SeederOptions } from 'typeorm-extension';
import MainSeeder from '../../database/seeds/main-seed';
config();

const configService = new ConfigService();

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  url: configService.getOrThrow('DATABASE_URL'),
  entities: [Coffee],
  migrations: ['../../database/migrations/**'],
  migrationsRun: true,
  seeds: [MainSeeder],
};

export default new DataSource(options);
