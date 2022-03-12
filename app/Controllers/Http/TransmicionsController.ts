import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Transmicion from 'App/Models/Transmicion'

export default class TransmicionsController {

    public async index({ response }: HttpContextContract) {
        try{
          const transmicion = await Transmicion.all()
    
          const transmicionJSON = transmicion.map((transmicion) => transmicion.serialize())
    
          response.status(200).json({
            message: 'Satifactorio. Se encontro todos los Transmicion.',
            data: transmicionJSON
          })
        }
        catch(error){
          response.status(404).json({
            message : "ERROR. No se encontro ningun Transmicion."
          })
        }
        
      }
    
      public async create({}: HttpContextContract) {}
    
      public async store({request, response}: HttpContextContract) {
        try {
          const transmicion = new Transmicion()
    
          transmicion.nombre_trans = request.input("Nombre")
          transmicion.save()
          const transmicionJSON = transmicion.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Creaste un Transmicion nuevo.',
            data: transmicionJSON
          })
    
        } catch (error) {
          response.status(400).json({
            message : "ERROR. No has creado Transmicion nuevo."
          })
        }
      }
    
      public async show({params, response}: HttpContextContract) {
        try{
          const transmicion = await Transmicion.findOrFail(params.id)
          const transmicionJSON = transmicion.serialize()
    
          response.status(200).json({
            message: 'Satifactorio. Se Encotnro el Transmicion.',
            data : transmicionJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. Nos se ha encontrado Transmicion."
          })
        }
      }
    
      public async edit({}: HttpContextContract) {}
    
      public async update({request,params, response}: HttpContextContract) {
        try{
          const transmicion = await Transmicion.findOrFail(params.id)
          transmicion.nombre_trans = request.input("Nombre")
          transmicion.save()
          const transmicionJSON = transmicion.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Se encontro y actualizaste uno Transmicion.',
            data : transmicionJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. No se encontro y no se actualizo uno Transmicion."
          })
        }
      }
    
      public async destroy({params, response}: HttpContextContract) {
        try{
          const transmicion = await Transmicion.findOrFail(params.id)
          await transmicion.delete()
          
          response.status(200).json({
            message: 'Satifactorio. Has elimiado un Transmicion.',
            data: transmicion
          })
        }
        catch{
          response.status(200).json({
            message : "ERROR. No has eliminado un Transmicion."
          })
        }
      }

}
