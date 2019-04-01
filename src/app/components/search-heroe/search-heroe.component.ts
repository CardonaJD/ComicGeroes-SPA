import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
})
export class SearchHeroeComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes(params.termino);
      console.log(this.heroes);
    });
  }

}
