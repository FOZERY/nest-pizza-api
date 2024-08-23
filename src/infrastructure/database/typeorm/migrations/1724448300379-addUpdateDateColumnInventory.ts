import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUpdateDateColumnInventory1724448300379 implements MigrationInterface {
    name = 'AddUpdateDateColumnInventory1724448300379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "inventory" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "inventory" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "isInSlider" SET DEFAULT 'false'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "isInSlider" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "inventory" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "inventory" DROP COLUMN "createdAt"`);
    }

}
