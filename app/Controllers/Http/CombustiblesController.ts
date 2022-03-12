import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Combustible from 'App/Models/Combustible'

export default class CombustiblesController {

    public async index({ response }: HttpContextContract) {
        try{
          const combustible = await Combustible.all()
    
          const combustibleJSON = combustible.map((combustible) => combustible.serialize())
    
          response.status(200).json({
            message: 'Satifactorio. Se encontro todos los Combustible.',
            data: combustibleJSON
          })
        }
        catch(error){
          response.status(404).json({
            message : "ERROR. No se encontro ningun Combustible."
          })
        }
        
      }
    
      public async create({}: HttpContextContract) {}
    
      public async store({request, response}: HttpContextContract) {
        try {
          const combustible = new Combustible()
    
          combustible.nombre_combustible = request.input("Nombre")
          combustible.save()
          const combustibleJSON = combustible.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Creaste un Combustible nuevo.',
            data: combustibleJSON
          })
    
        } catch (error) {
          response.status(400).json({
            message : "ERROR. No has creado Combustible nuevo."
          })
        }
      }
    
      public async show({params, response}: HttpContextContract) {
        try{
          const combustible = await Combustible.findOrFail(params.id)
          const combustibleJSON = combustible.serialize()
    
          response.status(200).json({
            message: 'Satifactorio. Se Encotnro el Combustible.',
            data : combustibleJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. Nos se ha encontrado Combustible."
          })
        }
      }
    
      public async edit({}: HttpContextContract) {}
    
      public async update({request,params, response}: HttpContextContract) {
        try{
          const combustible = await Combustible.findOrFail(params.id)
          combustible.nombre_combustible = request.input("Nombre");
          combustible.save()
          const combustibleJSON = combustible.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Se encontro y actualizaste uno Combustible.',
            data : combustibleJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. No se encontro y no se actualizo uno Combustible."
          })
        }
      }
    
      public async destroy({params, response}: HttpContextContract) {
        try{
          const combustible = await Combustible.findOrFail(params.id)
          await combustible.delete()
          
          response.status(200).json({
            message: 'Satifactorio. Has elimiado un Combustible.',
            data: combustible
          })
        }
        catch{
          response.status(200).json({
            message : "ERROR. No has eliminado un Combustible."
          })
        }
      }

}
