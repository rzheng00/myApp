import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientHeroDetailComponent } from './http-client-hero-detail.component';

describe('HttpClientHeroDetailComponent', () => {
  let component: HttpClientHeroDetailComponent;
  let fixture: ComponentFixture<HttpClientHeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpClientHeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpClientHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
