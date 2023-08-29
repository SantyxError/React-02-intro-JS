//Objetos lilterales

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 554343421,
    lat: 14.323,
    lng: 34.9849332
  }
}

console.log(persona);

const persona2 = { ...persona }
persona2.nombre = 'Peter'

console.log(persona);
console.log(persona2);