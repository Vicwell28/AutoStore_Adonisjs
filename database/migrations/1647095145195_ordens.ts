import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ordens extends BaseSchema {
  protected tableName = 'ordens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('users_id').unsigned().references('id').inTable('users')
      table.date('fecha')
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
