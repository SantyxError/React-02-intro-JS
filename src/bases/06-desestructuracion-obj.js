//Desestructuración
//Asignación Desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Iron Man',
}

const { nombre, edad, clave } = persona

console.log(nombre);
console.log(edad);
console.log(clave);

const usedContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {
  // console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anyos: edad,
    latng: {
      lat: 14.323,
      lng: 34.9849332
    }
  }
}

const { nombreClave, anyos, latng: { lat, lng } } = usedContext(persona)

console.log(nombreClave, anyos);
console.log(lat, lng);