import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1725741557442 implements MigrationInterface {
    name = ' $npmConfigName1725741557442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order-statuses" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_2e0543a54b560d8cbb7aa2dda73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order-types" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_26e700d92065c390490fa3a63ec" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "permissions" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "staff-roles" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_90f9efdc18b9dd121fd6f19da00" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "staff-positions" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_f464155d0739c34a2a9ff792b17" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "staff" ("id" SERIAL NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "patronymic" character varying, "info" character varying, "phone_number" character varying(11) NOT NULL, "role_id" integer NOT NULL, "restaurant_id" integer NOT NULL, "staff_position_id" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e4ee98bb552756c180aec1e854a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product-types" ("id" SERIAL NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_eb44de44440120817495f227751" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders-products" ("order_id" integer NOT NULL, "product_id" integer NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "PK_5bc731f5b395dbb3098d232fa58" PRIMARY KEY ("order_id", "product_id"))`);
        await queryRunner.query(`CREATE TABLE "inventory" ("restaurantId" integer NOT NULL, "ingredientId" integer NOT NULL, "quantity" numeric(10,2) NOT NULL, "restaurant_id" integer NOT NULL, "ingredient_id" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a5f2abb23049ead6d3b3a07d63a" PRIMARY KEY ("restaurantId", "ingredientId"))`);
        await queryRunner.query(`CREATE TABLE "ingredients" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "unit" character varying NOT NULL, CONSTRAINT "PK_9240185c8a5507251c9f15e0649" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product-ingredients" ("ingredient_id" integer NOT NULL, "product_id" integer NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "PK_7737cb7d07a3b975db9392c9d65" PRIMARY KEY ("ingredient_id", "product_id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "price" integer NOT NULL, "name" character varying NOT NULL, "description" character varying, "imageUrl" character varying, "isInSlider" boolean NOT NULL DEFAULT 'false', "product_type_id" integer NOT NULL, "restaurant_id" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "restaurants-products" ("product_id" integer NOT NULL, "restaurant_id" integer NOT NULL, "availability" boolean NOT NULL, "custom_price" integer NOT NULL, CONSTRAINT "PK_7942741f0a8aa1c84b5aaee574c" PRIMARY KEY ("product_id", "restaurant_id"))`);
        await queryRunner.query(`CREATE TABLE "restaurants" ("id" SERIAL NOT NULL, "opening_time" TIMESTAMP NOT NULL, "closing_time" TIMESTAMP NOT NULL, "phone_number" character varying(11) NOT NULL, "address_id" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e2133a72eb1cc8f588f7b503e68" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "order_time" TIMESTAMP NOT NULL, "order_price" integer NOT NULL, "order_status_id" integer NOT NULL, "order_type_id" integer NOT NULL, "delivery_requested_time" TIMESTAMP, "delivery_actual_time" TIMESTAMP, "delivery_price" integer, "restaurant_id" integer NOT NULL, "delivery_address_id" integer NOT NULL, "user_id" integer NOT NULL, "cashier_id" integer NOT NULL, "courier_id" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "country" character varying NOT NULL, "region" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "houseNumber" character varying NOT NULL, "postalCode" character varying NOT NULL, "apartment" character varying, "block" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "phone_number" character varying(11) NOT NULL, "firstName" character varying NOT NULL, "email" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_17d1817f241f10a3dbafb169fd2" UNIQUE ("phone_number"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "staff_roles_permissions" ("role_id" integer NOT NULL, "permission_id" integer NOT NULL, CONSTRAINT "PK_956bf998b0861e99ed029d92f8e" PRIMARY KEY ("role_id", "permission_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8d08cd25f19a936326ce5061d7" ON "staff_roles_permissions" ("role_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_f6851008bd960037153b5b1da8" ON "staff_roles_permissions" ("permission_id") `);
        await queryRunner.query(`CREATE TABLE "users_addresses" ("user_id" integer NOT NULL, "address_id" integer NOT NULL, CONSTRAINT "PK_6fdf8905a58ed0f936d7e17e6e6" PRIMARY KEY ("user_id", "address_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a6de63ed9c7d202b9cadae024d" ON "users_addresses" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_74de4f43d79bc7d7cb5c20d770" ON "users_addresses" ("address_id") `);
        await queryRunner.query(`ALTER TABLE "staff" ADD CONSTRAINT "FK_c3fe01125c99573751fe5e55666" FOREIGN KEY ("role_id") REFERENCES "staff-roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "staff" ADD CONSTRAINT "FK_1b1658ba3bb205874b325403b08" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "staff" ADD CONSTRAINT "FK_dd3873962f9119c2b3547cc8a4e" FOREIGN KEY ("staff_position_id") REFERENCES "staff-positions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders-products" ADD CONSTRAINT "FK_bd6b89ff63c6d8f53e9298e19b4" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders-products" ADD CONSTRAINT "FK_79da3137a8166b451a22e161bab" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inventory" ADD CONSTRAINT "FK_4e6dd2ec2594fa34d8a57a6c629" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inventory" ADD CONSTRAINT "FK_251b59fa2f5cd79b316ec5e9d89" FOREIGN KEY ("ingredientId") REFERENCES "ingredients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product-ingredients" ADD CONSTRAINT "FK_91739353a34f36b7f04b9b61d8a" FOREIGN KEY ("ingredient_id") REFERENCES "ingredients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product-ingredients" ADD CONSTRAINT "FK_627d1798357db1eaf508eb6320a" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_9adb63f24f86528856373f0ab9a" FOREIGN KEY ("product_type_id") REFERENCES "product-types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "restaurants-products" ADD CONSTRAINT "FK_88d31847613cdc14f362fe985b8" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "restaurants-products" ADD CONSTRAINT "FK_0eac3c49a77803b9f8efe0e9237" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "restaurants" ADD CONSTRAINT "FK_35a195ed4ea3859440488d12bae" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_f51b75ebdfdef60d264f982a60f" FOREIGN KEY ("order_status_id") REFERENCES "order-statuses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_c6832dfcc30ef89c575d903c73b" FOREIGN KEY ("order_type_id") REFERENCES "order-types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_85fdda5fcce2f397ef8f117a2c6" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_822c5ebe47e43ebe715f68968c4" FOREIGN KEY ("delivery_address_id") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_a922b820eeef29ac1c6800e826a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_f6a81e17c5548c6e49f260c9dad" FOREIGN KEY ("cashier_id") REFERENCES "staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_0e0e0b6db50dc05c12031bce4c3" FOREIGN KEY ("courier_id") REFERENCES "staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "staff_roles_permissions" ADD CONSTRAINT "FK_8d08cd25f19a936326ce5061d77" FOREIGN KEY ("role_id") REFERENCES "staff-roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "staff_roles_permissions" ADD CONSTRAINT "FK_f6851008bd960037153b5b1da82" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_addresses" ADD CONSTRAINT "FK_a6de63ed9c7d202b9cadae024df" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_addresses" ADD CONSTRAINT "FK_74de4f43d79bc7d7cb5c20d7705" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_addresses" DROP CONSTRAINT "FK_74de4f43d79bc7d7cb5c20d7705"`);
        await queryRunner.query(`ALTER TABLE "users_addresses" DROP CONSTRAINT "FK_a6de63ed9c7d202b9cadae024df"`);
        await queryRunner.query(`ALTER TABLE "staff_roles_permissions" DROP CONSTRAINT "FK_f6851008bd960037153b5b1da82"`);
        await queryRunner.query(`ALTER TABLE "staff_roles_permissions" DROP CONSTRAINT "FK_8d08cd25f19a936326ce5061d77"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_0e0e0b6db50dc05c12031bce4c3"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_f6a81e17c5548c6e49f260c9dad"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_a922b820eeef29ac1c6800e826a"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_822c5ebe47e43ebe715f68968c4"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_85fdda5fcce2f397ef8f117a2c6"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_c6832dfcc30ef89c575d903c73b"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_f51b75ebdfdef60d264f982a60f"`);
        await queryRunner.query(`ALTER TABLE "restaurants" DROP CONSTRAINT "FK_35a195ed4ea3859440488d12bae"`);
        await queryRunner.query(`ALTER TABLE "restaurants-products" DROP CONSTRAINT "FK_0eac3c49a77803b9f8efe0e9237"`);
        await queryRunner.query(`ALTER TABLE "restaurants-products" DROP CONSTRAINT "FK_88d31847613cdc14f362fe985b8"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_9adb63f24f86528856373f0ab9a"`);
        await queryRunner.query(`ALTER TABLE "product-ingredients" DROP CONSTRAINT "FK_627d1798357db1eaf508eb6320a"`);
        await queryRunner.query(`ALTER TABLE "product-ingredients" DROP CONSTRAINT "FK_91739353a34f36b7f04b9b61d8a"`);
        await queryRunner.query(`ALTER TABLE "inventory" DROP CONSTRAINT "FK_251b59fa2f5cd79b316ec5e9d89"`);
        await queryRunner.query(`ALTER TABLE "inventory" DROP CONSTRAINT "FK_4e6dd2ec2594fa34d8a57a6c629"`);
        await queryRunner.query(`ALTER TABLE "orders-products" DROP CONSTRAINT "FK_79da3137a8166b451a22e161bab"`);
        await queryRunner.query(`ALTER TABLE "orders-products" DROP CONSTRAINT "FK_bd6b89ff63c6d8f53e9298e19b4"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP CONSTRAINT "FK_dd3873962f9119c2b3547cc8a4e"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP CONSTRAINT "FK_1b1658ba3bb205874b325403b08"`);
        await queryRunner.query(`ALTER TABLE "staff" DROP CONSTRAINT "FK_c3fe01125c99573751fe5e55666"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_74de4f43d79bc7d7cb5c20d770"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a6de63ed9c7d202b9cadae024d"`);
        await queryRunner.query(`DROP TABLE "users_addresses"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f6851008bd960037153b5b1da8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8d08cd25f19a936326ce5061d7"`);
        await queryRunner.query(`DROP TABLE "staff_roles_permissions"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "restaurants"`);
        await queryRunner.query(`DROP TABLE "restaurants-products"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "product-ingredients"`);
        await queryRunner.query(`DROP TABLE "ingredients"`);
        await queryRunner.query(`DROP TABLE "inventory"`);
        await queryRunner.query(`DROP TABLE "orders-products"`);
        await queryRunner.query(`DROP TABLE "product-types"`);
        await queryRunner.query(`DROP TABLE "staff"`);
        await queryRunner.query(`DROP TABLE "staff-positions"`);
        await queryRunner.query(`DROP TABLE "staff-roles"`);
        await queryRunner.query(`DROP TABLE "permissions"`);
        await queryRunner.query(`DROP TABLE "order-types"`);
        await queryRunner.query(`DROP TABLE "order-statuses"`);
    }

}
