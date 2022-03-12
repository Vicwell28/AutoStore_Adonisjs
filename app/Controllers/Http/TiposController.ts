import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tipo from 'App/Models/Tipo'

export default class TiposController {

    public async index({ response }: HttpContextContract) {
        try{
          const tipo = await Tipo.all()
    
          const tipoJSON = tipo.map((tipo) => tipo.serialize())
    
          response.status(200).json({
            message: 'Satifactorio. Se encontro todos los Tipo.',
            data: tipoJSON
          })
        }
        catch(error){
          response.status(404).json({
            message : "ERROR. No se encontro ningun Tipo."
          })
        }
        
      }
    
      public async create({}: HttpContextContract) {}
    
      public async store({request, response}: HttpContextContract) {
        try {
          const tipo = new Tipo()
    
          tipo.nombre_tipo = request.input("Nombre")
          tipo.save()
          const tipoJSON = tipo.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Creaste un Tipo nuevo.',
            data: tipoJSON
          })
    
        } catch (error) {
          response.status(400).json({
            message : "ERROR. No has creado Tipo nuevo."
          })
        }
      }
    
      public async show({params, response}: HttpContextContract) {
        try{
          const tipo = await Tipo.findOrFail(params.id)
          const tipoJSON = tipo.serialize()
    
          response.status(200).json({
            message: 'Satifactorio. Se Encotnro el Tipo.',
            data : tipoJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. Nos se ha encontrado Tipo."
          })
        }
      }
    
      public async edit({}: HttpContextContract) {}
    
      public async update({request,params, response}: HttpContextContract) {
        try{
          const tipo = await Tipo.findOrFail(params.id)
          tipo.nombre_tipo = request.input("Nombre")
          tipo.save()
          const tipoJSON = tipo.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Se encontro y actualizaste uno Tipo.',
            data : tipoJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. No se encontro y no se actualizo uno Tipo."
          })
        }
      }
    
      public async destroy({params, response}: HttpContextContract) {
        try{
          const tipo = await Tipo.findOrFail(params.id)
          await tipo.delete()
          
          response.status(200).json({
            message: 'Satifactorio. Has elimiado un Tipo.',
            data: tipo
          })
        }
        catch{
          response.status(200).json({
            message : "ERROR. No has eliminado un Tipo."
          })
        }
      }

}
