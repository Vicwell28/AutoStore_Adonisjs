import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Comentario {
  idUser : number, 
  idVehiculo : number, 
  Comentario : string
}

export default class ComentarioModel{
  // 2. Create a Schema corresponding to the document interface.
  static schema = new Schema<Comentario>({
    idUser : { type : Number, required : true},
    idVehiculo : { type : Number, required : true},
    Comentario : {type: String, required : true}
  });

  // 3. Create a Model.
  static ComentarioModel = model<Comentario>('Comentario', this.schema);
}
