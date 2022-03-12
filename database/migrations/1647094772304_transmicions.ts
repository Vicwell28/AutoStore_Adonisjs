import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Transmicions extends BaseSchema {
  protected tableName = 'transmicions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre_trans', 50).notNullable()
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
