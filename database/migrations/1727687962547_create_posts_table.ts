import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected tableName = "posts";

  async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments("id").notNullable();
      table.string("title").notNullable();
      table.string("content").notNullable();

      table.timestamp("created_at");
      table.timestamp("updated_at");
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
