import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  imports:      [ SharedModule, HeroesRoutingModule ],
  declarations: [ HeroesComponent ],
  providers:    [  ]
})
export class HeroesModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
