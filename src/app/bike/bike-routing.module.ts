import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { BikeListComponent } from './bike-list.component';
import { BikeComponent } from './bike.component';
import { BikeDetailComponent } from './bike-detail.component';

const routes: Routes = [
  { path: 'bikes',
    component: BikeComponent,
    children: [
      { path: '',    component: BikeListComponent },
      { path: ':id',    component: BikeDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikeRoutingModule {}
