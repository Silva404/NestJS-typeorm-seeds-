import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Coffee } from '../../src/coffee';
import { faker } from '@faker-js/faker';

export default class CoffeeSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const repository = dataSource.getRepository(Coffee);
    const coffees = Array(6)
      .fill(0)
      .map(() => ({
        id: faker.number.int({ min: 9, max: 10000 }),
        name: faker.person.firstName(),
        description: faker.lorem.words(250),
        type: faker.company.name(),
      }));
    const user = repository.create(coffees);
    await repository.save(user);
  }
}
