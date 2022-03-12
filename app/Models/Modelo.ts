import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Vehiculo from "App/Models/Vehiculo"
import Marca from "App/Models/Marca"

export default class Modelo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre_modelo: string

  @column()
  public marcas_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Marca, {
    foreignKey: 'marcas_id'
  })
  public Marca: BelongsTo<typeof Marca>

  @hasMany(() => Vehiculo, {
    foreignKey: 'modelos_id',
    localKey: 'id',
  })

  public vehiculo: HasMany<typeof Vehiculo>
}
