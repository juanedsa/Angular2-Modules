import { Injectable } from '@angular/core';

export class Bike {
  constructor(public id: number, public name: string) { }
}

const BIKES: Bike[] = [
  new Bike(11, 'MT 09'),
  new Bike(12, 'BMW s1000rr'),
  new Bike(13, 'Ninja 300'),
  new Bike(14, 'R6'),
  new Bike(15, 'R1'),
  new Bike(16, 'CBR600')
];


@Injectable()
export class BikeService {

  getBikes() {
    return BIKES;
  }

   getHero(id: number | string) {
    return this.getBikes().find(bike => bike.id === +id);
  }

}
