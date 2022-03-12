import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Vehiculo from './Vehiculo'

export default class CarritoCompra extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public vehiculos_id: number

  @column()
  public users_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Vehiculo, {
    foreignKey: 'vehiculo_id',
  })
  public Vehiculo: BelongsTo<typeof Vehiculo>

  @belongsTo(() => User, {
    foreignKey : 'user_id'
  })
  public User : BelongsTo<typeof User>
}
