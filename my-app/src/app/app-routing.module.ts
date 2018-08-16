import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TyleComponent} from './tyle/tyle.component';
import {DeatComponent} from './deat/deat.component';


const routes: Routes = [
  { path: 'tyle', component: TyleComponent },
  { path: 'deat', component: DeatComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
