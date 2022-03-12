import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Modelo from "App/Models/Modelo"


export default class Marca extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre_marca: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Modelo, {
    foreignKey: 'marcas_id',
    localKey: 'id',
  })
  public Modelos: HasMany<typeof Modelo>
}
