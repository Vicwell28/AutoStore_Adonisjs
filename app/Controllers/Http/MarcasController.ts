import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Marca from 'App/Models/Marca'

export default class MarcasController {

    public async index({ response }: HttpContextContract) {
        try{
          const marca = await Marca.all()
    
          const marcaJSON = marca.map((marca) => marca.serialize())
    
          response.status(200).json({
            message: 'Successfully created a new model.',
            data: marcaJSON
          })
        }
        catch(error){
          response.status(404).json({
            message : "Failing created a new model."
          })
        }
        
      }
    
      public async create({}: HttpContextContract) {}
    
      public async store({request, response}: HttpContextContract) {
        try {
          const marca = new Marca()
    
          marca.nombre_marca = request.input("Nombre")
          marca.save()
          const marcaJSON = marca.serialize()
          
          response.status(200).json({
            message: 'Successfully created a new model.',
            data: marcaJSON
          })
    
        } catch (error) {
          response.status(400).json({
            message : "Failing created a new model."
          })
        }
      }
    
      public async show({params, response}: HttpContextContract) {
        try{
          const marca = await Marca.findOrFail(params.id)
          const marcaJSON = marca.serialize()
    
          response.status(200).json({
            massage : "Satifactorio. Usuario encontrado",
            data : marcaJSON
          })
        }
        catch(error){
          response.status(400).json({
            massage : "Error. Usuario no enocntrado.",
          })
        }
      }
    
      public async edit({}: HttpContextContract) {}
    
      public async update({request,params, response}: HttpContextContract) {
        try{
          const marca = await Marca.findOrFail(params.id)
          marca.nombre_marca = request.input("Nombre");
          marca.save()
          const marcaJSON = marca.serialize()
          
          response.status(200).json({
            massage : "Satifactorio. Usuario encontrado y actualizado.",
            data : marcaJSON
          })
        }
        catch(error){
          response.status(400).json({
            massage : "Error. Usuario no enocntrado.",
          })
        }
      }
    
      public async destroy({params, response}: HttpContextContract) {
        try{
          const marca = await Marca.findOrFail(params.id)
          await marca.delete()
          
          response.status(200).json({
            massage : "Satifactorio. Marca encontrado y eliminado.",
            data: marca
          })
        }
        catch{
          response.status(200).json({
            massage : "Error. Marca no encontrado.",
          })
        }
      }

}
