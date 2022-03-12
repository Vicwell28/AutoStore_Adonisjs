import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ImgVehiculos extends BaseSchema {
  protected tableName = 'img_vehiculos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('vehiculos_id').unsigned().references('id').inTable('vehiculos')
      table.text('nombre', 'longtext')
      table.datetime('created_at', { useTz: true })
      table.datetime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
