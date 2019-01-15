import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. NiceT' },
      { id: 12, name: 'NarcoT' },
      { id: 13, name: 'BombastoT' },
      { id: 14, name: 'CeleritasT' },
      { id: 15, name: 'MagnetaT' },
      { id: 16, name: 'RubberManT' },
      { id: 17, name: 'DynamaT' },
      { id: 18, name: 'Dr IQT' },
      { id: 19, name: 'MagmaT' },
      { id: 20, name: 'TornadoT' }
    ];

    const demographics = [
      {id: 16, DOB: '02-13-1979', Gender: 'F', phone_number: '619 123 4567', address: '123 main st.',
        city: 'San Diego', state: 'CA', zip: '92121' },
      {id: 18, DOB: '12-26-2008', Gender: 'F', phone_number: '805 532 7788', address: '456 2n Ave.',
        city: 'San Diego', state: 'CA', zip: '92122' }
    ];
    return {heroes, demographics};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }



}
