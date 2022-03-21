import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Apartados extends BaseSchema {
  protected tableName = 'apartados'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('users_id').unsigned().references('id').inTable('users')
      table.integer('vehiculos_id').unsigned().references('id').inTable('vehiculos')
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
