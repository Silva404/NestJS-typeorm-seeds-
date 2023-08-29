import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Coffee {
  @PrimaryColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column('text')
  type: string;
}
