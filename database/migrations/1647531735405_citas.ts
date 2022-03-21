import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Citas extends BaseSchema {
  protected tableName = 'citas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('users_id').unsigned().references('id').inTable('users')
      table.integer('vehiculos_id').unsigned().references('id').inTable('vehiculos')
      table.date('fecha_cita').notNullable()
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
