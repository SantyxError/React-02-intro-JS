//Import, export y funciones comunes de arreglos

// import{heroes} from './data/heroes.js'

import { heroes } from "./data/heroes";

const getHeroesById = (id) => {
  const heroe = heroes.find(heroe => heroe.id == id)
  return heroe
}


const getHeroesByOwner = (owner) => {
  const heroe = heroes.filter(heroe => heroe.owner === owner)
  return heroe.map(heroe => heroe.name)
}

console.log(getHeroesById(2));
console.log(getHeroesByOwner('DC'));






