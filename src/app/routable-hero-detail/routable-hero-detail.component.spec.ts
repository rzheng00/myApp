import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutableHeroDetailComponent } from './routable-hero-detail.component';

describe('RouteableHeroDetailComponent', () => {
  let component: RoutableHeroDetailComponent;
  let fixture: ComponentFixture<RoutableHeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutableHeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutableHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
