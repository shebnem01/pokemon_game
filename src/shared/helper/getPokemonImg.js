export const getPokemonImage = (id) => {
 const newID=id<10?"00"+id:id<100?"0"+id:id
  return ` https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${newID}.png`
};