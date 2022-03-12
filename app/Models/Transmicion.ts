import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Vehiculo from 'App/Models/Vehiculo'


export default class Transmicion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre_trans: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Vehiculo, {
    foreignKey: 'transmicions_id',
    localKey: 'id',
  })
  public Vehiculos: HasMany<typeof Vehiculo>
}
