import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeStaffEntity1724447953238 implements MigrationInterface {
    name = 'ChangeStaffEntity1724447953238'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "staff" ADD "login" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "staff" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "isInSlider" SET DEFAULT 'false'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "isInSlider" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "staff" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP COLUMN "login"`);
    }

}
