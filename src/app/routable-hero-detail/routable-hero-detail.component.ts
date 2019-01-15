import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-routable-hero-detail',
  templateUrl: './routable-hero-detail.component.html',
  styleUrls: ['./routable-hero-detail.component.css']
})
export class RoutableHeroDetailComponent implements OnInit {
  @Input() heroDetail: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHeroRx();
  }

  getHeroRx(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroRx(id).subscribe(hero => this.heroDetail = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
