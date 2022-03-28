import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Vehiculo from './Vehiculo'

export default class Cita extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  users_id : number

  @column()
  vehiculos_id : number

  @column.dateTime({
    // serialize: (value) => value.toFormat('dd LLL yyyy')
  })
  fecha_cita : DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'users_id',
  })
  public User: BelongsTo<typeof User>

  @belongsTo(() => Vehiculo, {
    foreignKey: 'vehiculos_id',
  })
  public Vehiculo: BelongsTo<typeof Vehiculo>
}
