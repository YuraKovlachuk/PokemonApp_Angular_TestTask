import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PokemonsService} from "../../services/pokemons.service";
import {iPokemon} from "../../../../models/iPokemon";
import {Subscription} from "rxjs";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  @ViewChild('paginator', {static: false}) paginator: MatPaginator
  pokemons: iPokemon[]
  pokemonSub: Subscription
  pokemonPage: iPokemon[]

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemonSub = this.pokemonService.getAllPockemon()
      .subscribe(res => {
        this.pokemons = res
        this.pokemonPage = res.slice(0, 12);
      })
  }

  ngOnDestroy() {
    this.pokemonSub.unsubscribe()
  }

  onPageChange(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.pokemons.length) {
      endIndex = this.pokemons.length
    }
    this.pokemonPage = this.pokemons.slice(startIndex, endIndex);
  }

  onSelectPokemon(name: string) {
    this.pokemonService.getPokemon(name)
  }

}
