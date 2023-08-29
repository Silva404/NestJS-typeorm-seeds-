import * as Faker from 'faker';
import { Coffee } from 'src/coffee';
import { setSeederFactory } from 'typeorm-extension';

setSeederFactory(Coffee, (faker: typeof Faker) => {
  const name = faker.name.firstName();
  const description = faker.description();

  const coffee = new Coffee();
  coffee.name = name;
  coffee.description = description;
  return coffee;
});
