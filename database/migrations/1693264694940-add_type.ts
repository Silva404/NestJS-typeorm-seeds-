import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddType1693264694940 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'coffee',
      new TableColumn({ name: 'type', type: 'varchar' }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('coffee', 'type');
  }
}
