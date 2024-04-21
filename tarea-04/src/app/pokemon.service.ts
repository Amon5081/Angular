import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiurl = "https://pokeapi.co/api/v2/pokemon";
  constructor(private http: HttpClient) { }

  getRandomPokemon() {
    const randonid = Math.floor(Math.random() * 898) + 1;
    return this.http.get<any>(`${this.apiurl}/${randonid}`);

  }



}

