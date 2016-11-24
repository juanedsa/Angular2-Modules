import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { Bike, BikeService } from './bike.service';


@Component({
  template: `
    <h3>Bike Detail</h3>
    <div *ngIf="bike">
      <div>Id: {{bike.id}}</div><br>
      <label>Name: {{bike.name | awesome}}</label>
    </div>
    <br>
    <a routerLink="../">Bike List</a>
  `,
  providers: [BikeService]
})
export class BikeDetailComponent implements OnInit {
  bike: Bike;

  constructor(
    private route: ActivatedRoute,
    private _bikeService: BikeService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.params['id'], 10);
    this.bike = this._bikeService.getHero(id);
  }
}
