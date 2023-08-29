//Funciones en JS

function saludar(nombre) {
  return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`
const saludar4 = () => 'Hola mundo'

//console.log(saludar('Goku'));

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
  UID: 'ABC123',
  username: 'El_papi1234'
})

console.log(getUser());


//TAREA
//1. Transformar a una funcion de Flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas
// function getUsuarioActivo(nombre) {
//   return  {
//     UID: 'ALD837',
//     username: 'El Barto'
//   }
// }

const getUsuarioActivo=(nombre)=>({
  UID: 'ALD837',
  username: nombre
})

const usuarioActivo= getUsuarioActivo('Santiago')
console.log(usuarioActivo);