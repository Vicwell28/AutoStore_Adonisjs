import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', "UsersController.login")
Route.post('/logout', "UsersController.logout")
Route.post('/User', "UsersController.store")

// Route.group(()=>{
//   Route.resource("/User", "UsersController").apiOnly().except(['store'])
//   Route.resource("/Marca", "MarcasController").apiOnly()
//   Route.resource("/Modelo", "ModelosController").apiOnly()
//   Route.resource("/Tipo", "TiposController").apiOnly()
//   Route.resource("/Color", "ColorsController").apiOnly()
//   Route.resource("/Transmicion", "TransmicionsController").apiOnly()
//   Route.resource("/Combustible", "CombustiblesController").apiOnly()
//   Route.resource("/Estado", "EstadosController").apiOnly()
//   Route.resource("/Vehiculo", "VehiculosController").apiOnly()
//   Route.resource("/CarritoCompra", "CarritoComprasController").apiOnly()
//   Route.resource("/Orden", "OrdensController").apiOnly()
//   Route.resource("/DetalleOrden", "DetalleOrdensController").apiOnly()
//   Route.resource("/ImagenVehiculo", "ImgVehiculosController").apiOnly()
// }).middleware(["auth"])




  Route.resource("/User", "UsersController").apiOnly().except(['store'])
  Route.resource("/Marca", "MarcasController").apiOnly()
  Route.resource("/Modelo", "ModelosController").apiOnly()
  Route.resource("/Tipo", "TiposController").apiOnly()
  Route.resource("/Color", "ColorsController").apiOnly()
  Route.resource("/Transmicion", "TransmicionsController").apiOnly()
  Route.resource("/Combustible", "CombustiblesController").apiOnly()
  Route.resource("/Estado", "EstadosController").apiOnly()
  Route.resource("/Vehiculo", "VehiculosController").apiOnly()
  Route.resource("/CarritoCompra", "CarritoComprasController").apiOnly()
  Route.resource("/Orden", "OrdensController").apiOnly()
  Route.resource("/DetalleOrden", "DetalleOrdensController").apiOnly()
  Route.resource("/ImagenVehiculo", "ImgVehiculosController").apiOnly()

