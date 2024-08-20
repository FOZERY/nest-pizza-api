import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitializeDB1724101300049 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO "product-types"(value) VALUES ('PIZZA'), ('DRINK'), ('SNACK'), ('DESERT'), ('ROLL');
        `);

        await queryRunner.query(`
            INSERT INTO "order-types"(value) VALUES ('DINEIN'), ('TAKEAWAY'), ('DELIVERY');
        `);

        await queryRunner.query(`
            INSERT INTO "order-statuses"(value) VALUES 
            ('PENDING'), 
            ('PROCESSING'), 
            ('READY'), 
            ('IN_DELIVERY'), 
            ('DELIVERED'), 
            ('CANCELLED');
        `);

        await queryRunner.query(`
            INSERT INTO "staff-positions"(value) VALUES ('CASHIER'), ('COURIER'), ('MANAGER');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DELETE FROM "order-statuses" WHERE value IN ('PENDING', 'PROCESSING', 'READY', 'IN_DELIVERY', 'DELIVERED', 'CANCELLED');`,
        );
        await queryRunner.query(
            `DELETE FROM "order-types" WHERE value IN ('DINEIN', 'TAKEAWAY', 'DELIVERY');`,
        );
        await queryRunner.query(
            `DELETE FROM "product-types" WHERE value IN ('PIZZA', 'DRINK', 'SNACK', 'DESERT', 'ROLL');`,
        );
        await queryRunner.query(
            `DELETE FROM "staff-positions" WHERE value IN ('CASHIER', 'COURIER', 'MANAGER');`,
        );

        await queryRunner.query(
            `ALTER SEQUENCE "product-types_id_seq" RESTART WITH 1;`,
        );
        await queryRunner.query(
            `ALTER SEQUENCE "order-types_id_seq" RESTART WITH 1;`,
        );
        await queryRunner.query(
            `ALTER SEQUENCE "order-statuses_id_seq" RESTART WITH 1;`,
        );
        await queryRunner.query(
            `ALTER SEQUENCE "staff-positions_id_seq" RESTART WITH 1;`,
        );
    }
}
