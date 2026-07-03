import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreatePurchasesTable extends BaseSchema {
  protected tableName = 'purchases'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('comprador_github_login').notNullable()

      table
        .integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('items')
        .onDelete('RESTRICT')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
