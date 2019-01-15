import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes  = HEROES;

  selectedHeroFirst: Hero;

  selectedHero2nd: Hero;

  selectedHero3rd: Hero;

  selectedHero4th: Hero;

  selectedHero5th: Hero;

  selectedHero6th: Hero;

  heroesFromService: Hero[];

  heroesRx: Hero[];

  heroesRxWithMessage: Hero[];

  heroesHttpClient: Hero[];

  constructor(private heroService: HeroService) {
    // this.selectedHero = this.hero;
  }

  ngOnInit() {
    this.getHerosFromService();
    this.getHeroesFromServiceRx();
    this.getHeroesFromServiceRxWithMessge();
    this.getHerosFromHttpClient();
  }

  onSelect(hero: Hero, index: number): void {
    if (index === 1) {
      console.log('1st');
      this.selectedHeroFirst = hero;
    } else if (index === 2) {
      console.log('2nd');
      this.selectedHero2nd = hero;
    } else if (index === 3) {
      this.selectedHero3rd = hero;
    } else if (index === 4) {
      this.selectedHero4th = hero;
    } else if (index === 5) {
      console.log('5th');
      this.setMessage(hero.id + '(' + hero.name + ')');
      this.selectedHero5th = hero;
    } else if (index === 6) {
      console.log('6th');
      this.setMessage(hero.id + '(' + hero.name + ')');
      this.selectedHero6th = hero;
    } else {
      console.log('Invalid parameter');
    }

  }

  getHerosFromService(): void {
    this.heroesFromService = this.heroService.getHeros();
  }

  getHeroesFromServiceRx(): void {
    this.heroService.getHeroesRx().subscribe(hero => this.heroesRx = hero);
  }

  getHeroesFromServiceRxWithMessge(): void {
    console.log('heroes.component.getHeroesFromServiceRxWithMessge()');
    this.heroService.getHeroesRxWithMessage().subscribe(hero => this.heroesRxWithMessage = hero);
  }

  getHerosFromHttpClient(): void {
    this.heroService.getHeroesHttpClient().subscribe(hero => this.heroesHttpClient = hero);
  }

  setMessage(heroName: string): void {
    this.heroService.setMessage(heroName);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({name} as Hero).subscribe(hero => this.heroesHttpClient.push(hero));
  }

  delete(hero: Hero): void {
    this.heroesHttpClient = this.heroesHttpClient.filter(h => h !== hero);
    let hs: Hero[];
    this.heroService.deleteHero(hero).subscribe(() => {
      // get the list of heros in memory
      this.heroService.getHeroesHttpClient().subscribe(h => {
        hs = h;
        console.log('heros in memory: ', JSON.stringify(hs));
      });
    });
  }
}


