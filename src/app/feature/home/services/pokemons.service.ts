import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {iPokemon} from "../../../models/iPokemon";
import {map, Subject} from "rxjs";
import {iPokemonInfo} from "../../../models/iPokemonInfo";
import {iPokemonRespone} from "../../../models/iPokemonRespone";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  pokemonSelected = new Subject<iPokemonInfo>()

  constructor(private http: HttpClient) { }

  getAllPockemon() {
    return this.http.get<{count: number, results: iPokemon[]}>(environment.api + 'pokemon?limit=151')
      .pipe(map(res => {
        return res.results
      }))
  }

  getPokemon(name: string) {
    this.http.get<iPokemonRespone>(environment.api + `pokemon/${name}`)
      .pipe(
        map((res) => {

        let addAbilities: string[] = []
        res.abilities.forEach(item => {
          addAbilities.push(item.ability.name)
        })

        let addTypes: string[] = []
        res.types.forEach(item => {
          addTypes.push(item.type.name)
        })

        return {
          name: res.name,
          image: res.sprites.back_default,
          abilities: [...addAbilities],
          types: [...addTypes]
        } as iPokemonInfo // return info about pokemon with necessary information
      }))
      .subscribe(res => {
        this.pokemonSelected.next(res);
      })
  }
}
