import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Color from "App/Models/Color"
import Combustible from "App/Models/Combustible"
import Modelo from "App/Models/Modelo"
import Tipo from "App/Models/Tipo"
import Transmicion from "App/Models/Transmicion"
import imgVehiculo from "App/Models/ImgVehiculo"
import DetalleOrden from "App/Models/DetalleOrden"
import CarritoCompra from "App/Models/CarritoCompra"
import Estado from 'App/Models/Estado'


export default class Vehiculo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public modelos_id:number

  @column()
  public tipos_id:number

  @column()
  public colors_id:number

  @column()
  public transmicions_id:number

  @column()
  public combustibles_id:number

  @column()
  public estado_id:number

  @column()
  public precio:number

  @column()
  public kilometraje:number

  @column.dateTime({ autoCreate: true })
  public Ano:DateTime

  @column()
  public puertas:number


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  //BELONGS TO
  
  @belongsTo(() => Color, {
    foreignKey: 'colors_id',
  })
  public Color: BelongsTo<typeof Color>
  
  @belongsTo(() => Tipo, {
    foreignKey: 'tipos_id',
  })
  public Tipo: BelongsTo<typeof Tipo>

  @belongsTo(() => Combustible, {
    foreignKey: 'combustibles_id',
  })
  public Combustible: BelongsTo<typeof Combustible>

  @belongsTo(() => Modelo, {
    foreignKey: 'modelos_id',
  })
  public Modelo: BelongsTo<typeof Modelo>

  @belongsTo(() => Transmicion, {
    foreignKey: 'transmicions_id',
  })
  public Transmicion: BelongsTo<typeof Transmicion>

  @belongsTo(() => Estado, {
    foreignKey: 'estado_id',
  })
  public Estado: BelongsTo<typeof Estado>

  //HAS MANY

  @hasMany(() => imgVehiculo, {
    foreignKey: 'vehiculos_id',
    localKey: 'id',
  })
  public imgVehiculo: HasMany<typeof imgVehiculo>

  @hasMany(() => CarritoCompra, {
    foreignKey: 'vehiculos_id',
    localKey: 'id',
  })
  public CarritoCompra: HasMany<typeof CarritoCompra>

  @hasMany(() => DetalleOrden, {
    foreignKey: 'vehiculos_id',
    localKey: 'id',
  })
  public DetalleOrden: HasMany<typeof DetalleOrden>
}
