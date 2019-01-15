import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-http-client-hero-detail',
  templateUrl: './http-client-hero-detail.component.html',
  styleUrls: ['./http-client-hero-detail.component.css']
})
export class HttpClientHeroDetailComponent implements OnInit {

  @Input() heroDetail: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHeroHttpClient();
  }

  getHeroHttpClient(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroHttpClient(id).subscribe(hero => this.heroDetail = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.heroDetail)
      .subscribe(() => this.goBack());
  }
}
