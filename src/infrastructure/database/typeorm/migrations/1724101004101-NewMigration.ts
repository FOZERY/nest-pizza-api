import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1724101004101 implements MigrationInterface {
    name = 'NewMigration1724101004101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "staff-positions" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_f464155d0739c34a2a9ff792b17" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders-products" ("orderId" integer NOT NULL, "productId" integer NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "PK_7fdc2710a0e27a933f5176d5247" PRIMARY KEY ("orderId", "productId"))`);
        await queryRunner.query(`CREATE TABLE "product-types" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_eb44de44440120817495f227751" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "price" integer NOT NULL, "name" character varying NOT NULL, "description" character varying, "imageUrl" character varying, "isInSlider" boolean NOT NULL DEFAULT 'false', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "productTypeId" integer, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "restaurants-products" ("productId" integer NOT NULL, "restaurantId" integer NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "PK_f80383efc7caeba286fd4eb4813" PRIMARY KEY ("productId", "restaurantId"))`);
        await queryRunner.query(`CREATE TABLE "restaurants" ("id" SERIAL NOT NULL, "opening_time" TIMESTAMP NOT NULL, "closing_time" TIMESTAMP NOT NULL, "phone_number" character varying(11) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "addressId" integer, CONSTRAINT "PK_e2133a72eb1cc8f588f7b503e68" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "staff" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "patronymic" character varying, "info" character varying, "phone_number" character varying(11) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "restaurantId" integer, "positionId" integer, CONSTRAINT "PK_e4ee98bb552756c180aec1e854a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order-statuses" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_2e0543a54b560d8cbb7aa2dda73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order-types" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_26e700d92065c390490fa3a63ec" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "order_time" TIMESTAMP NOT NULL, "order_price" integer NOT NULL, "delivery_requested_time" TIMESTAMP, "delivery_actual_time" TIMESTAMP, "delivery_price" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "orderStatusId" integer, "orderTypeId" integer, "deliveryAddressId" integer, "userId" integer, "cashierId" integer, "courierId" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "country" character varying NOT NULL, "region" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "houseNumber" character varying NOT NULL, "postalCode" character varying NOT NULL, "apartment" character varying, "block" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "phone_number" character varying(11) NOT NULL, "firstName" character varying NOT NULL, "email" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_17d1817f241f10a3dbafb169fd2" UNIQUE ("phone_number"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users_addresses_addresses" ("usersId" integer NOT NULL, "addressesId" integer NOT NULL, CONSTRAINT "PK_5b86d57df71ccc8290d8a8e3b10" PRIMARY KEY ("usersId", "addressesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e64aa444ebcd1a999fca5c6d75" ON "users_addresses_addresses" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f4a14656154013ccd7d6bc0202" ON "users_addresses_addresses" ("addressesId") `);
        await queryRunner.query(`ALTER TABLE "orders-products" ADD CONSTRAINT "FK_7f8a54cf1af741f8693d546b8f8" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders-products" ADD CONSTRAINT "FK_c060a6c300044cf395ea75cc08a" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_fed065ae1a8b80a37a9230da1fa" FOREIGN KEY ("productTypeId") REFERENCES "product-types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "restaurants-products" ADD CONSTRAINT "FK_b21296902817bed6354ac8f446d" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "restaurants-products" ADD CONSTRAINT "FK_bbc28330594c034f5fe3daff109" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "restaurants" ADD CONSTRAINT "FK_6ed5e37a5a3021bd177acb48ca5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "staff" ADD CONSTRAINT "FK_e527a7970f7104e29a44ae34abf" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "staff" ADD CONSTRAINT "FK_f74be2df1d854b814f3e8ad753f" FOREIGN KEY ("positionId") REFERENCES "staff-positions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_20b3eb7c96605f814cc86a916be" FOREIGN KEY ("orderStatusId") REFERENCES "order-statuses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_49e6685323ac8bbf1dab8965341" FOREIGN KEY ("orderTypeId") REFERENCES "order-types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_749e5d7152b6cde429099a99530" FOREIGN KEY ("deliveryAddressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_1073eb310020ca81d70fc8578a4" FOREIGN KEY ("cashierId") REFERENCES "staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_76eaffec5e36a04bbf3bf549146" FOREIGN KEY ("courierId") REFERENCES "staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_addresses_addresses" ADD CONSTRAINT "FK_e64aa444ebcd1a999fca5c6d75d" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_addresses_addresses" ADD CONSTRAINT "FK_f4a14656154013ccd7d6bc02029" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_addresses_addresses" DROP CONSTRAINT "FK_f4a14656154013ccd7d6bc02029"`);
        await queryRunner.query(`ALTER TABLE "users_addresses_addresses" DROP CONSTRAINT "FK_e64aa444ebcd1a999fca5c6d75d"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_76eaffec5e36a04bbf3bf549146"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_1073eb310020ca81d70fc8578a4"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_749e5d7152b6cde429099a99530"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_49e6685323ac8bbf1dab8965341"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_20b3eb7c96605f814cc86a916be"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP CONSTRAINT "FK_f74be2df1d854b814f3e8ad753f"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP CONSTRAINT "FK_e527a7970f7104e29a44ae34abf"`);
        await queryRunner.query(`ALTER TABLE "restaurants" DROP CONSTRAINT "FK_6ed5e37a5a3021bd177acb48ca5"`);
        await queryRunner.query(`ALTER TABLE "restaurants-products" DROP CONSTRAINT "FK_bbc28330594c034f5fe3daff109"`);
        await queryRunner.query(`ALTER TABLE "restaurants-products" DROP CONSTRAINT "FK_b21296902817bed6354ac8f446d"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_fed065ae1a8b80a37a9230da1fa"`);
        await queryRunner.query(`ALTER TABLE "orders-products" DROP CONSTRAINT "FK_c060a6c300044cf395ea75cc08a"`);
        await queryRunner.query(`ALTER TABLE "orders-products" DROP CONSTRAINT "FK_7f8a54cf1af741f8693d546b8f8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f4a14656154013ccd7d6bc0202"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e64aa444ebcd1a999fca5c6d75"`);
        await queryRunner.query(`DROP TABLE "users_addresses_addresses"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "order-types"`);
        await queryRunner.query(`DROP TABLE "order-statuses"`);
        await queryRunner.query(`DROP TABLE "staff"`);
        await queryRunner.query(`DROP TABLE "restaurants"`);
        await queryRunner.query(`DROP TABLE "restaurants-products"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "product-types"`);
        await queryRunner.query(`DROP TABLE "orders-products"`);
        await queryRunner.query(`DROP TABLE "staff-positions"`);
    }

}
