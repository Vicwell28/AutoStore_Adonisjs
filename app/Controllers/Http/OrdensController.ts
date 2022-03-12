import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Orden from 'App/Models/Orden'

export default class OrdensController {

    public async index({ response }: HttpContextContract) {
        try{
          const orden = await Orden.all()
    
          const ordenJSON = orden.map((orden) => orden.serialize())
    
          response.status(200).json({
            message: 'Satifactorio. Se encontro todos los Orden.',
            data: ordenJSON
          })
        }
        catch(error){
          response.status(404).json({
            message : "ERROR. No se encontro ningun Orden."
          })
        }
        
      }
    
      public async create({}: HttpContextContract) {}
    
      public async store({request, response}: HttpContextContract) {
        try {
          const orden = new Orden()
    
          orden.users_id = request.input("User")
          orden.fecha = request.input("Fecha")
          orden.save()
          const ordenJSON = orden.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Creaste un Orden nuevo.',
            data: ordenJSON
          })
    
        } catch (error) {
          response.status(400).json({
            message : "ERROR. No has creado Orden nuevo."
          })
        }
      }
    
      public async show({params, response}: HttpContextContract) {
        try{
          const orden = await Orden.findOrFail(params.id)
          const ordenJSON = orden.serialize()
    
          response.status(200).json({
            message: 'Satifactorio. Se Encotnro el Orden.',
            data : ordenJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. Nos se ha encontrado Orden."
          })
        }
      }
    
      public async edit({}: HttpContextContract) {}
    
      public async update({request,params, response}: HttpContextContract) {
        try{
          const orden = await Orden.findOrFail(params.id)
          orden.users_id = request.input("User")
          orden.fecha = request.input("Fecha")
          orden.save()
          const ordenJSON = orden.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Se encontro y actualizaste uno Orden.',
            data : ordenJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. No se encontro y no se actualizo uno Orden."
          })
        }
      }
    
      public async destroy({params, response}: HttpContextContract) {
        try{
          const orden = await Orden.findOrFail(params.id)
          await orden.delete()
          
          response.status(200).json({
            message: 'Satifactorio. Has elimiado un Orden.',
            data: orden
          })
        }
        catch{
          response.status(200).json({
            message : "ERROR. No has eliminado un Orden."
          })
        }
      }

}
