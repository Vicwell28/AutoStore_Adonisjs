import { Application } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ImgVehiculo from 'App/Models/ImgVehiculo'

export default class ImgVehiculosController {

    public async index({ response }: HttpContextContract) {

       let imgagen = "tmp/uploads/cl0topzxm0003yswv4c1ee4yv.png";
       let direccion = "http://127.0.0.1:3333/" + imgagen; 

       return direccion; 


        // try{
        //   const imgvehiculo = await ImgVehiculo.all()
          
        //   const imgvehiculoJSON = imgvehiculo.map((imgvehiculo) => imgvehiculo.serialize())
    
        //   response.status(200).json({
        //     message: 'Satifactorio. Se encontro todos los Img.',
        //     data: imgvehiculoJSON
        //   })
        // }
        // catch(error){
        //   response.status(404).json({
        //     message : "ERROR. No se encontro ningun Img."
        //   })
        // }
        
      }
    
      public async create({}: HttpContextContract) {}
    
      public async store({request, response}: HttpContextContract) {

        const coverImage = request.files('imgVehiculo')

        console.log(coverImage);
        
        for (let image of coverImage) {
          let filname = image.fieldName
          console.log(filname); 
        }

        for (let image of coverImage) {
          console.log(await image.moveToDisk('./'))
        }       
      }
    
      public async show({params, response}: HttpContextContract) {
        try{
          const imgvehiculo = await ImgVehiculo.findOrFail(params.id)
          const imgvehiculoJSON = imgvehiculo.serialize()
    
          response.status(200).json({
            message: 'Satifactorio. Se Encotnro el Img.',
            data : imgvehiculoJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. Nos se ha encontrado Img."
          })
        }
      }
    
      public async edit({}: HttpContextContract) {}
    
      public async update({request,params, response}: HttpContextContract) {
        try{
          const imgvehiculo = await ImgVehiculo.findOrFail(params.id)
          imgvehiculo.vehiculos_id = request.input("Vehiculo")
          imgvehiculo.nombre = request.input("Img")
          imgvehiculo.save()
          const imgvehiculoJSON = imgvehiculo.serialize()
          
          response.status(200).json({
            message: 'Satifactorio. Se encontro y actualizaste uno Img.',
            data : imgvehiculoJSON
          })
        }
        catch(error){
          response.status(400).json({
            message : "ERROR. No se encontro y no se actualizo uno Img."
          })
        }
      }
    
      public async destroy({params, response}: HttpContextContract) {
        try{
          const imgvehiculo = await ImgVehiculo.findOrFail(params.id)
          await imgvehiculo.delete()
          
          response.status(200).json({
            message: 'Satifactorio. Has elimiado un Img.',
            data: imgvehiculo
          })
        }
        catch{
          response.status(200).json({
            message : "ERROR. No has eliminado un Img."
          })
        }
      }

}
