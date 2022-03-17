import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CarritoCompra from 'App/Models/CarritoCompra'

export default class CarritoComprasController {

    public async index({ response }: HttpContextContract) {
        try{
          const carritocompra = await CarritoCompra
          .query()
          .preload("Vehiculo", (modeloQuery) => {
            modeloQuery
            .preload('Modelo', (modeloQuery) => {
              modeloQuery.preload('Marca')
              })
            .preload('Transmicion')
            .preload('Combustible')
            .preload('Tipo')
            .preload('Color')
          })
          .preload("User")

          const carritocompraJSON = carritocompra.map((carritocompra) => carritocompra.serialize())
    
          response.status(200).json({
            status : true,
            message: 'Satifactorio. Se encontro todos los CarritoCompra.',
            data: carritocompraJSON
          })
        }
        catch(error){
          response.status(404).json({
            status : false,
            message : "ERROR. No se encontro ningun CarritoCompra."
          })
        }
        
      }
    
      public async create({}: HttpContextContract) {}
    
      public async store({request, response}: HttpContextContract) {
        try {
          const carritocompra = new CarritoCompra()
    
          carritocompra.vehiculos_id = request.input("Vehiculo")
          carritocompra.users_id = request.input("User")
    
          carritocompra.save()
          const carritocompraJSON = carritocompra.serialize()
          
          response.status(200).json({
            status : true,
            message: 'Satifactorio. Creaste un CarritoCompra nuevo.',
            data: carritocompraJSON
          })
    
        } catch (error) {
          response.status(400).json({
            status : false,
            message : "ERROR. No has creado CarritoCompra nuevo."
          })
        }
      }
    
      public async show({params, response}: HttpContextContract) {
        try{
          const carritocompra = await CarritoCompra
          .query()
          .where("users_id", params.id)
          .preload("Vehiculo", (modeloQuery) => {
            modeloQuery
            .preload('Modelo', (modeloQuery) => {
              modeloQuery.preload('Marca')
              })
            .preload('Transmicion')
            .preload('Combustible')
            .preload('Tipo')
            .preload('Color')
          })
          .preload("User")

    
          response.status(200).json({
            status : true,
            message: 'Satifactorio. Se Encotnro el CarritoCompra.',
            data : carritocompra
          })
        }
        catch(error){
          response.status(400).json({
            status : false,
            message : "ERROR. Nos se ha encontrado CarritoCompra."
          })
        }
      }
    
      public async edit({}: HttpContextContract) {}
    
      public async update({request,params, response}: HttpContextContract) {
        try{
          const carritocompra = await CarritoCompra.findOrFail(params.id)
          carritocompra.vehiculos_id = request.input("Vehiculo");
          carritocompra.users_id = request.input("User"); 
          carritocompra.save()
          const carritocompraJSON = carritocompra.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Se encontro y actualizaste uno CarritoCompra.',
            data : carritocompraJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. No se encontro y no se actualizo uno CarritoCompra."
          })
        }
      }
    
      public async destroy({params, response}: HttpContextContract) {
        try{
          const carritocompra = await CarritoCompra.findOrFail(params.id)
          await carritocompra.delete()
          
          response.status(200).json({
            message: 'Satifactorio. Has elimiado un CarritoCompra.',
            data: carritocompra
          })
        }
        catch{
          response.status(200).json({
            message : "ERROR. No has eliminado un CarritoCompra."
          })
        }
      }

}
