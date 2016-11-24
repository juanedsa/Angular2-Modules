import { Component, OnInit } from '@angular/core';
import { Bike, BikeService } from './bike.service';


@Component({
  template: `
    <h3>Bike List</h3>
    <div *ngFor='let bike of bikes'>
      <a routerLink="{{bike.id}}">{{bike.name}}</a>
    </div>
  `,
  providers: [BikeService]
})
export class BikeListComponent implements OnInit {
  bikes: Bike[];
  constructor(private _bikeService: BikeService) { }

  ngOnInit() {
    this.bikes = this._bikeService.getBikes();
  }
}
