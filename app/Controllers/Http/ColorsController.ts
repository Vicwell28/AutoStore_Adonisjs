import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Color from 'App/Models/Color'

export default class ColorsController {

    public async index({ response }: HttpContextContract) {
        try{
          const color = await Color.all()
    
          const colorJSON = color.map((color) => color.serialize())
    
          response.status(200).json({
            message: 'Satifactorio. Se encontro todos los Color.',
            data: colorJSON
          })
        }
        catch(error){
          response.status(404).json({
            message : "ERROR. No se encontro ningun Color."
          })
        }
        
      }
    
      public async create({}: HttpContextContract) {}
    
      public async store({request, response}: HttpContextContract) {
        try {
          const color = new Color()
    
          color.nombre_color = request.input("Nombre")
          color.save()
          const colorJSON = color.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Creaste un Color nuevo.',
            data: colorJSON
          })
    
        } catch (error) {
          response.status(400).json({
            message : "ERROR. No has creado Color nuevo."
          })
        }
      }
    
      public async show({params, response}: HttpContextContract) {
        try{
          const color = await Color.findOrFail(params.id)
          const colorJSON = color.serialize()
    
          response.status(200).json({
            message: 'Satifactorio. Se Encotnro el Color.',
            data : colorJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. Nos se ha encontrado Color."
          })
        }
      }
    
      public async edit({}: HttpContextContract) {}
    
      public async update({request,params, response}: HttpContextContract) {
        try{
          const color = await Color.findOrFail(params.id)
          color.nombre_color = request.input("Nombre");
          color.save()
          const colorJSON = color.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Se encontro y actualizaste uno Color.',
            data : colorJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. No se encontro y no se actualizo uno Color."
          })
        }
      }
    
      public async destroy({params, response}: HttpContextContract) {
        try{
          const color = await Color.findOrFail(params.id)
          await color.delete()
          
          response.status(200).json({
            message: 'Satifactorio. Has elimiado un Color.',
            data: color
          })
        }
        catch{
          response.status(200).json({
            message : "ERROR. No has eliminado un Color."
          })
        }
      }

}
