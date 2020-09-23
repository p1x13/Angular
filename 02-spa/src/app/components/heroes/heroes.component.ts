import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
 // Importación del servicio y la interfaz
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
 // Importación del servicio (Arreglo con datos)
  constructor( private _heroesService: HeroesService ) { }

  ngOnInit(): void {
    // Asignacion de los datos del servicio al arreglo destino
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}
