import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662991568531 implements MigrationInterface {
    name = 'default1662991568531'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD \`description\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP COLUMN \`description\``);
    }

}
