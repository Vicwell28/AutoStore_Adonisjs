import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Apartado from 'App/Models/Apartado';

export default class ApartadosController {

    public async index({ response, request }: HttpContextContract) {

        console.log(request.all()); 
    
      try{

        const apartado = await Apartado.all()
        // query()
        // .preload('Modelo', (modeloQuery) => {
        //   modeloQuery.preload('Marca')
        //   })
        // .preload('Transmicion')
        // .preload('Combustible')
        // .preload('Tipo')
        // .preload('Color')
        
        
  
        const vehiculoJSON = apartado.map((apartado) => apartado.serialize())
  
        response.status(200).json({
          message: 'Satifactorio. Se encontro todos los Apartado.',
          data: vehiculoJSON
        })
      }
      catch(error){
        response.status(404).json({
          message : "ERROR. No se encontro ningun Apartado."
        })
      }
      
    }
  
    public async create({}: HttpContextContract) {}
  
    public async store({request, auth,response}: HttpContextContract) {
      const user = await auth.use('api').authenticate()
      try {
        const apartado = new Apartado()
        apartado.users_id = user.id
        apartado.vehiculos_id = request.input("Vehiculo")
        apartado.save()
        const vehiculoJSON = apartado.serialize()
        
        response.status(200).json({
          message: 'Satifactorio. Creaste un Apartado nuevo.',
          data: vehiculoJSON
        })
  
      } catch (error) {
        response.status(400).json({
          message : "ERROR. No has creado Apartado nuevo."
        })
      }
    }
  
    public async show({params, response}: HttpContextContract) {
      try{
        const apartado = await Apartado
        .query()
        .where("users_id", params.id)
  
        response.status(200).json({
          message: 'Satifactorio. Se Encotnro el Apartado.',
          data : apartado
        })
      }
      catch(error){
        response.status(400).json({
          message : "ERROR. Nos se ha encontrado Apartado."
        })
      }
    }
  
    public async edit({}: HttpContextContract) {}
  
    public async update({request,params, response}: HttpContextContract) {
      try{
        const apartado = await Apartado.findOrFail(params.id)
        // apartado.modelos_id = request.input("Modelo")
        // apartado.tipos_id = request.input("Tipo")
        // apartado.colors_id = request.input("Color")
        // apartado.transmicions_id = request.input("Transmicion")
        // apartado.combustibles_id = request.input("Combustible")
        // apartado.precio = request.input("Precio")
        // apartado.kilometraje = request.input("Kilometraje")
        // //apartado.Ano = request.input("Ano")
        // apartado.puertas = request.input("Puertas")
        apartado.save()
        
        const vehiculoJSON = apartado.serialize()
        
        response.status(200).json({
          message: 'Satifactorio. Se encontro y actualizaste uno Apartado.',
          data : vehiculoJSON
        })
      }
      catch(error){
        response.status(400).json({
          message : "ERROR. No se encontro y no se actualizo uno Apartado."
        })
      }
    }
  
    public async destroy({params, response}: HttpContextContract) {
      try{
        const apartado = await Apartado.findOrFail(params.id)
        await apartado.delete()
        
        response.status(200).json({
          message: 'Satifactorio. Has elimiado un Apartado.',
          data: apartado
        })
      }
      catch{
        response.status(200).json({
          message : "ERROR. No has eliminado un Apartado."
        })
      }
    }

}
