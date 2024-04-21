import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { PokemonService } from './pokemon.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  pokemon$!: Observable<any>;
  pokemonForm!: FormGroup;
  private subscription: Subscription = new Subscription();

  pokemontypes: string = '';

  constructor(private PokemonService: PokemonService, private fb: FormBuilder) {

    this.pokemonForm = this.fb.group({});
    this.LoadRandomPokemon();
  }

  LoadRandomPokemon(): void {
    this.pokemon$ = this.PokemonService.getRandomPokemon().pipe(
      map(pokemon => {
        pokemon.types = pokemon.types.map((type: { type: { name: any; }; }) => type.type.name).join(', ');
        return pokemon;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

