import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EstrellaModel from 'App/Models/Estrella'
import { connect } from 'mongoose';

const url = 'mongodb+srv://VicWell:vicwell@sandbox.rwi8f.mongodb.net/myFirstDatabase?retryWrites=true';
const Estrella = EstrellaModel.EstrellaModel; 

export default class EstrellasController {

  public async index({ response }: HttpContextContract) {
    try{
      await connect(url);
      const com = await Estrella.find({}); 

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


  public async store({request, response}: HttpContextContract) {
    try {
      const idUser = request.input('User'); 
      const idVehiculo = request.input('Vehiculo'); 
      const Estrella = request.input('Estrella'); 

      await connect(url);
      const com = new Estrella({
        idUser : idUser, 
        idVehiculo : idVehiculo, 
        Estrella : Estrella
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
      const com = await Estrella.find({idVehicul : params.id});

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
      const Estrella = request.input("Estrella"); 

      const com = await Estrella.findByIdAndUpdate(params.id, 
      {
        Estrella : Estrella
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
      const com = await Estrella.findByIdAndDelete(params.id); 
      
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
