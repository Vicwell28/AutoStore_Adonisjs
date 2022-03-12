import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Vehiculo from "App/Models/Vehiculo"
import Orden from "App/Models/Orden"

export default class DetalleOrden extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ordens_id: number

  @column()
  public vehiculos_id: number

  @column()
  public precio:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Vehiculo, {
    foreignKey: 'vehiculos_id',
  })
  public Vehiculos: BelongsTo<typeof Vehiculo>

  @belongsTo(() => Orden, {
    foreignKey: 'ordens_id',
  })
  public Orden: BelongsTo<typeof Orden>
}
