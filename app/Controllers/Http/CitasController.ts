import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cita from 'App/Models/Cita';

export default class CitasController {

    public async index({ response, request }: HttpContextContract) {
      try{
        const cita = await Cita.all()
  
        const vehiculoJSON = cita.map((cita) => cita.serialize())
  
        response.status(200).json({
          message: 'Satifactorio. Se encontro todos los Cita.',
          data: vehiculoJSON
        })
      }
      catch(error){
        response.status(404).json({
          message : "ERROR. No se encontro ningun Cita."
        })
      }
      
    }
  
  
    public async store({request, response}: HttpContextContract) {
      try {
        const cita = new Cita()
        cita.users_id = request.input("User")
        cita.vehiculos_id = request.input("Vehiculo")
        cita.fecha_cita = request.input("Fecha"); 
        cita.save()
  
        const vehiculoJSON = cita.serialize()
        
        response.status(200).json({
          message: 'Satifactorio. Creaste un Cita nuevo.',
          data: vehiculoJSON
        })
  
      } catch (error) {
        response.status(400).json({
          message : "ERROR. No has creado Cita nuevo."
        })
      }
    }
  
    public async show({params, response}: HttpContextContract) {
      try{
        const cita = await Cita
        .query()
        .where("users_id", params.id)
        .preload("User")
        .preload("Vehiculo", (modeloQuery) => {
          modeloQuery
          .preload('Modelo', (modeloQuery) => {
            modeloQuery.preload('Marca')
            })
          .preload('Transmicion')
          .preload('Combustible')
          .preload('Tipo')
          .preload('Color')
        })
  
        response.status(200).json({
          message: 'Satifactorio. Se Encotnro el Cita.',
          data : cita
        })
      }
      catch(error){
        response.status(400).json({
          message : "ERROR. Nos se ha encontrado Cita."
        })
      }
    }
  
  
    public async update({request,params, response}: HttpContextContract) {
      try{
        const cita = await Cita.findOrFail(params.id)

        cita.save()
        
        const vehiculoJSON = cita.serialize()
        
        response.status(200).json({
          message: 'Satifactorio. Se encontro y actualizaste uno Cita.',
          data : vehiculoJSON
        })
      }
      catch(error){
        response.status(400).json({
          message : "ERROR. No se encontro y no se actualizo uno Cita."
        })
      }
    }
  
    public async destroy({params, response}: HttpContextContract) {
      try{
        const cita = await Cita.findOrFail(params.id)
        await cita.delete()
        
        response.status(200).json({
          message: 'Satifactorio. Has elimiado un Cita.',
          data: cita
        })
      }
      catch{
        response.status(200).json({
          message : "ERROR. No has eliminado un Cita."
        })
      }
    }

}
