//Desestructuración Arrays
const personajes = ['Goku', 'Vegeta', 'Trunks']

const [, , p1] = personajes

console.log(p1);

const retornaArreglo = () => {
  return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros);

//TAREA
/* 1. el primer valor del Array se llamará nombre
2. el segundo valor se llamara setNombre */
const state = (valor) => {
  return [valor, () => {
    console.log('Hola Mundo');
  }]
}

const [nombre, setNombre] = state('Goku')
setNombre();

console.log(nombre);