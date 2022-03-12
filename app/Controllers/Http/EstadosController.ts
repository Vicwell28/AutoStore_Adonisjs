import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estado from 'App/Models/Estado'
export default class EstadosController {

    public async index({ response }: HttpContextContract) {
        try{
          const estado = await Estado.all()
    
          const estadoJSON = estado.map((estado) => estado.serialize())
    
          response.status(200).json({
            message: 'Satifactorio. Se encontro todos los Estado.',
            data: estadoJSON
          })
        }
        catch(error){
          response.status(404).json({
            message : "ERROR. No se encontro ningun Estado."
          })
        }
        
      }
    
      public async create({}: HttpContextContract) {}
    
      public async store({request, response}: HttpContextContract) {
        try {
          const estado = new Estado()
    
          estado.nombre_estado = request.input("Nombre")
          estado.save()
          const estadoJSON = estado.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Creaste un Estado nuevo.',
            data: estadoJSON
          })
    
        } catch (error) {
          response.status(400).json({
            message : "ERROR. No has creado Estado nuevo."
          })
        }
      }
    
      public async show({params, response}: HttpContextContract) {
        try{
          const estado = await Estado.findOrFail(params.id)
          const estadoJSON = estado.serialize()
    
          response.status(200).json({
            message: 'Satifactorio. Se Encotnro el Estado.',
            data : estadoJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. Nos se ha encontrado Estado."
          })
        }
      }
    
      public async edit({}: HttpContextContract) {}
    
      public async update({request,params, response}: HttpContextContract) {
        try{
          const estado = await Estado.findOrFail(params.id)
          estado.nombre_estado = request.input("Nombre")
          estado.save()
          const estadoJSON = estado.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Se encontro y actualizaste uno Estado.',
            data : estadoJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. No se encontro y no se actualizo uno Estado."
          })
        }
      }
    
      public async destroy({params, response}: HttpContextContract) {
        try{
          const estado = await Estado.findOrFail(params.id)
          await estado.delete()
          
          response.status(200).json({
            message: 'Satifactorio. Has elimiado un Estado.',
            data: estado
          })
        }
        catch{
          response.status(200).json({
            message : "ERROR. No has eliminado un Estado."
          })
        }
      }

}
