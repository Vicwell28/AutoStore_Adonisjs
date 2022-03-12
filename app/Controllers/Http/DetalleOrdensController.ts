import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DetalleOrden from 'App/Models/DetalleOrden'

export default class DetalleOrdensController {

    public async index({ response }: HttpContextContract) {
        try{
          const detalleorden = await DetalleOrden.all()
    
          const detalleordenJSON = detalleorden.map((detalleorden) => detalleorden.serialize())
    
          response.status(200).json({
            message: 'Satifactorio. Se encontro todos los DetalleOrden.',
            data: detalleordenJSON
          })
        }
        catch(error){
          response.status(404).json({
            message : "ERROR. No se encontro ningun DetalleOrden."
          })
        }
        
      }
    
      public async create({}: HttpContextContract) {}
    
      public async store({request, response}: HttpContextContract) {
        try {
          const detalleorden = new DetalleOrden()
    
          detalleorden.vehiculos_id = request.input("Vehiculo")
          detalleorden.ordens_id = request.input("Orden")
          detalleorden.precio = request.input("Precio")
          detalleorden.save()
          const detalleordenJSON = detalleorden.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Creaste un DetalleOrden nuevo.',
            data: detalleordenJSON
          })
    
        } catch (error) {
          response.status(400).json({
            message : "ERROR. No has creado DetalleOrden nuevo."
          })
        }
      }
    
      public async show({params, response}: HttpContextContract) {
        try{
          const detalleorden = await DetalleOrden.findOrFail(params.id)
          const detalleordenJSON = detalleorden.serialize()
    
          response.status(200).json({
            message: 'Satifactorio. Se Encotnro el DetalleOrden.',
            data : detalleordenJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. Nos se ha encontrado DetalleOrden."
          })
        }
      }
    
      public async edit({}: HttpContextContract) {}
    
      public async update({request,params, response}: HttpContextContract) {
        try{
          const detalleorden = await DetalleOrden.findOrFail(params.id)
          detalleorden.vehiculos_id = request.input("Vehiculo")
          detalleorden.ordens_id = request.input("Orden")
          detalleorden.precio = request.input("Precio")
          detalleorden.save()
          const detalleordenJSON = detalleorden.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Se encontro y actualizaste uno DetalleOrden.',
            data : detalleordenJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. No se encontro y no se actualizo uno DetalleOrden."
          })
        }
      }
    
      public async destroy({params, response}: HttpContextContract) {
        try{
          const detalleorden = await DetalleOrden.findOrFail(params.id)
          await detalleorden.delete()
          
          response.status(200).json({
            message: 'Satifactorio. Has elimiado un DetalleOrden.',
            data: detalleorden
          })
        }
        catch{
          response.status(200).json({
            message : "ERROR. No has eliminado un DetalleOrden."
          })
        }
      }

}
