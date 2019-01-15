import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  heroesRev: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getHeroesRev();
  }

  getHeroes(): void {
    this.heroService.getHeroesRxWithMessage()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getHeroesRev(): void {
    this.heroService.getHeroesHttpClient()
      .subscribe(heroes => this.heroesRev = heroes.slice(heroes.length - 5 , heroes.length - 1));
  }
}
