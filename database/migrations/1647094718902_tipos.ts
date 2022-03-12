import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tipos extends BaseSchema {
  protected tableName = 'tipos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre_tipo', 50).notNullable()
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
