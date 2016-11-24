import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import { BikeComponent } from './bike.component';
import { BikeRoutingModule } from './bike-routing.module';
import { BikeListComponent } from './bike-list.component';
import { BikeDetailComponent } from './bike-detail.component';

@NgModule({
  imports:      [ SharedModule, BikeRoutingModule ],
  declarations: [ BikeComponent, BikeListComponent, BikeDetailComponent ],
  providers:    [  ]
})
export class BikeModule { }
