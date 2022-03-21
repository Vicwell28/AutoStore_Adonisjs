import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cita from 'App/Models/Cita';

export default class CitasController {

    public async index({ response, request }: HttpContextContract) {

        console.log(request.all()); 
    
      try{

        const cita = await Cita.all()
        // query()
        // .preload('Modelo', (modeloQuery) => {
        //   modeloQuery.preload('Marca')
        //   })
        // .preload('Transmicion')
        // .preload('Combustible')
        // .preload('Tipo')
        // .preload('Color')
        
        
  
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
  
    public async create({}: HttpContextContract) {}
  
    public async store({request, response}: HttpContextContract) {
      try {
        const cita = new Cita()
  
        // cita.modelos_id = request.input("Modelo")
        // cita.tipos_id = request.input("Tipo")
        // cita.colors_id = request.input("Color")
        // cita.transmicions_id = request.input("Transmicion")
        // cita.combustibles_id = request.input("Combustible")
        // cita.precio = request.input("Precio")
        // cita.kilometraje = request.input("Kilometraje")
        // //cita.Ano = request.input("Ano")
        // cita.puertas = request.input("Puertas")
        // cita.save()
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
  
    public async edit({}: HttpContextContract) {}
  
    public async update({request,params, response}: HttpContextContract) {
      try{
        const cita = await Cita.findOrFail(params.id)
        // cita.modelos_id = request.input("Modelo")
        // cita.tipos_id = request.input("Tipo")
        // cita.colors_id = request.input("Color")
        // cita.transmicions_id = request.input("Transmicion")
        // cita.combustibles_id = request.input("Combustible")
        // cita.precio = request.input("Precio")
        // cita.kilometraje = request.input("Kilometraje")
        // //cita.Ano = request.input("Ano")
        // cita.puertas = request.input("Puertas")
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
