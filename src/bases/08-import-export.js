//Import, export y funciones comunes de arreglos

// import{heroes} from './data/heroes.js'

import heroes, { owners } from "../data/heroes";

export const getHeroesById = (id) => {
  const heroe = heroes.find(heroe => heroe.id === id)
  return heroe
}


export const getHeroesByOwner = (owner) => {
  const heroe = heroes.filter(heroe => heroe.owner === owner)
  return heroe.map(heroe => heroe.name)
}

/* console.log(getHeroesById(2));
console.log(getHeroesByOwner('DC')); */





