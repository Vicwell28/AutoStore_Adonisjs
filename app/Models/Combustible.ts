import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Vehiculo from "App/Models/Vehiculo"

export default class Combustible extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre_combustible: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Vehiculo, {
    foreignKey: 'combustibles_id',
    localKey: 'id',
  })
  public Vehiculos: HasMany<typeof Vehiculo>
}
