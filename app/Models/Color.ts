import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Vehiculo from "App/Models/Vehiculo"

export default class Color extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre_color: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Vehiculo, {
    foreignKey: 'colors_id',
    localKey: 'id',
  })
  public vehiculo: HasMany<typeof Vehiculo>
}
