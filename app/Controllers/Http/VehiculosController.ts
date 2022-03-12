import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vehiculo from 'App/Models/Vehiculo'

export default class VehiculosController {

    public async index({ response }: HttpContextContract) {
        try{
          const vehiculo = await Vehiculo.
          query()
          .preload('Modelo', (modeloQuery) => {
            modeloQuery.preload('Marca')
            })
          .preload('Transmicion')
          .preload('Combustible')
          .preload('Tipo')
          .preload('Color')
    
          const vehiculoJSON = vehiculo.map((vehiculo) => vehiculo.serialize())
    
          response.status(200).json({
            message: 'Satifactorio. Se encontro todos los Vehiculo.',
            data: vehiculoJSON
          })
        }
        catch(error){
          response.status(404).json({
            message : "ERROR. No se encontro ningun Vehiculo."
          })
        }
        
      }
    
      public async create({}: HttpContextContract) {}
    
      public async store({request, response}: HttpContextContract) {
        try {
          const vehiculo = new Vehiculo()
    
          vehiculo.modelos_id = request.input("Modelo")
          vehiculo.tipos_id = request.input("Tipo")
          vehiculo.colors_id = request.input("Color")
          vehiculo.transmicions_id = request.input("Transmicion")
          vehiculo.combustibles_id = request.input("Combustible")
          vehiculo.precio = request.input("Precio")
          vehiculo.kilometraje = request.input("Kilometraje")
          //vehiculo.Ano = request.input("Ano")
          vehiculo.puertas = request.input("Puertas")
          vehiculo.save()
          const vehiculoJSON = vehiculo.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Creaste un Vehiculo nuevo.',
            data: vehiculoJSON
          })
    
        } catch (error) {
          response.status(400).json({
            message : "ERROR. No has creado Vehiculo nuevo."
          })
        }
      }
    
      public async show({params, response}: HttpContextContract) {
        try{
          const vehiculo = await Vehiculo.findOrFail(params.id)
          const vehiculoJSON = vehiculo.serialize()
    
          response.status(200).json({
            message: 'Satifactorio. Se Encotnro el Vehiculo.',
            data : vehiculoJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. Nos se ha encontrado Vehiculo."
          })
        }
      }
    
      public async edit({}: HttpContextContract) {}
    
      public async update({request,params, response}: HttpContextContract) {
        try{
          const vehiculo = await Vehiculo.findOrFail(params.id)
          vehiculo.modelos_id = request.input("Modelo")
          vehiculo.tipos_id = request.input("Tipo")
          vehiculo.colors_id = request.input("Color")
          vehiculo.transmicions_id = request.input("Transmicion")
          vehiculo.combustibles_id = request.input("Combustible")
          vehiculo.precio = request.input("Precio")
          vehiculo.kilometraje = request.input("Kilometraje")
          //vehiculo.Ano = request.input("Ano")
          vehiculo.puertas = request.input("Puertas")
          vehiculo.save()
          
          const vehiculoJSON = vehiculo.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Se encontro y actualizaste uno Vehiculo.',
            data : vehiculoJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. No se encontro y no se actualizo uno Vehiculo."
          })
        }
      }
    
      public async destroy({params, response}: HttpContextContract) {
        try{
          const vehiculo = await Vehiculo.findOrFail(params.id)
          await vehiculo.delete()
          
          response.status(200).json({
            message: 'Satifactorio. Has elimiado un Vehiculo.',
            data: vehiculo
          })
        }
        catch{
          response.status(200).json({
            message : "ERROR. No has eliminado un Vehiculo."
          })
        }
      }

}
