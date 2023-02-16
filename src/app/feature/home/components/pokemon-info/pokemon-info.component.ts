import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonsService} from "../../services/pokemons.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {iPokemonInfo} from "../../../../models/iPokemonInfo";

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit, OnDestroy {
  sub: Subscription;
  pokemon: iPokemonInfo

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    this.sub = this.pokemonService.pokemonSelected
      .subscribe(item => {
        this.pokemon = item
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
