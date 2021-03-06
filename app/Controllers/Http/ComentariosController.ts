import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ComentarioModel from 'App/Models/Comentario'
import { connect } from 'mongoose';

const url = 'mongodb+srv://VicWell:vicwell@sandbox.rwi8f.mongodb.net/myFirstDatabase?retryWrites=true';
const Comentario = ComentarioModel.ComentarioModel; 


export default class ComentariosController {

    public async index({ response }: HttpContextContract) {
        try{
          await connect(url);
          const com = await Comentario.find({}); 
    
          response.status(200).json({
            message: 'Successfully created a new model.',
            data: com
          })
        }
        catch(error){
          response.status(404).json({
            message : "Failing created a new model."
          })
        }
      }
    
    
      public async store({request, auth,response}: HttpContextContract) {
        try {
          const user = await auth.use('api').authenticate()
          await connect(url);
          const com = new Comentario({
            idUser : user.id, 
            idVehiculo : request.input('Vehiculo'), 
            Comentario : request.input('Comentario')
          })
          await com.save()
          
          response.status(200).json({
            message: 'Successfully created a new model.',
            data: com
          })
    
        } catch (error) {
          response.status(400).json({
            message : "Failing created a new model."
          })
        }
      }
    
      public async show({params, response}: HttpContextContract) {
        try{
          await connect(url);
          console.log(params.id); 
          const com = await  Comentario.find({idVehiculo : params.id});
    
          response.status(200).json({
            massage : "Satifactorio. Usuario encontrado",
            data : com
          })
        }
        catch(error){
          response.status(400).json({
            massage : "Error. Usuario no enocntrado.",
          })
        }
      }
    
    
      public async update({request,params, response}: HttpContextContract) {
        try{
          await connect(url);
         console.log(params.id); 

          const com = await Comentario.findByIdAndUpdate(params.id, 
          {
            Comentario : request.input("Comentario")
          })
          
          response.status(200).json({
            massage : "Satifactorio. Usuario encontrado y actualizado.",
            data : com
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
          await connect(url);
          const com = await Comentario.findByIdAndDelete(params.id); 
          
          response.status(200).json({
            massage : "Satifactorio. Marca encontrado y eliminado.",
            data: com
          })
        }
        catch{
          response.status(200).json({
            massage : "Error. Marca no encontrado.",
          })
        }
      }


}
