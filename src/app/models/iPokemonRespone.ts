export interface iPokemonRespone {
  name: string,
  sprites: { back_default: string; },
  abilities: {ability: {name: string}}[],
  types: {type: { name: string }}[]
}
