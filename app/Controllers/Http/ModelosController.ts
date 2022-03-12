import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Modelo from 'App/Models/Modelo'

export default class ModelosController {

    public async index({ response }: HttpContextContract) {
        try{
          const modelo = await Modelo
          .query()
          .preload('Marca')
    
          const modeloJSON = modelo.map((modelo) => modelo.serialize())
    
          response.status(200).json({
            message: 'Satifactorio. Se encontro todos los Modelo.',
            data: modeloJSON
          })
        }
        catch(error){
          response.status(404).json({
            message : "ERROR. No se encontro ningun Modelo."
          })
        }
        
      }
    
      public async create({}: HttpContextContract) {}
    
      public async store({request, response}: HttpContextContract) {
        try {
          const modelo = new Modelo()
    
          modelo.nombre_modelo = request.input("Nombre")
          modelo.marcas_id = request.input("Marca")
          modelo.save()
          const modeloJSON = modelo.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Creaste un Modelo nuevo.',
            data: modeloJSON
          })
    
        } catch (error) {
          response.status(400).json({
            message : "ERROR. No has creado Modelo nuevo."
          })
        }
      }
    
      public async show({params, response}: HttpContextContract) {
        try{
          const modelo = await Modelo.findOrFail(params.id)
          const modeloJSON = modelo.serialize()
    
          response.status(200).json({
            message: 'Satifactorio. Se Encotnro el Modelo.',
            data : modeloJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. Nos se ha encontrado Modelo."
          })
        }
      }
    
      public async edit({}: HttpContextContract) {}
    
      public async update({request,params, response}: HttpContextContract) {
        try{
          const modelo = await Modelo.findOrFail(params.id)
          modelo.nombre_modelo = request.input("Nombre");
          modelo.marcas_id = request.input("Marca"); 
          modelo.save()
          const modeloJSON = modelo.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Se encontro y actualizaste uno Modelo.',
            data : modeloJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. No se encontro y no se actualizo uno Modelo."
          })
        }
      }
    
      public async destroy({params, response}: HttpContextContract) {
        try{
          const modelo = await Modelo.findOrFail(params.id)
          await modelo.delete()
          
          response.status(200).json({
            message: 'Satifactorio. Has elimiado un Modelo.',
            data: modelo
          })
        }
        catch{
          response.status(200).json({
            message : "ERROR. No has eliminado un Modelo."
          })
        }
      }

}
