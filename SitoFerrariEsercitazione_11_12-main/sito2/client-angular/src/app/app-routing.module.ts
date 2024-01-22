import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ferrari488Component } from './ferrari-488/ferrari-488.component';
import { FerrariMythosComponent } from './ferrari-mythos/ferrari-mythos.component';
import { FerrariPininfarinaComponent} from './ferrari-pininfarina/ferrari-pininfarina.component';
import { FerrariSf90Component } from './ferrari-sf90/ferrari-sf90.component';
import { FerrariPortofinoComponent } from './ferrari-portofino/ferrari-portofino.component';
import { FerrariPurosangueComponent } from './ferrari-purosangue/ferrari-purosangue.component';

const routes: Routes = [
  { path: 'f1', component: Ferrari488Component },
  { path: 'f2', component: FerrariMythosComponent },
  { path: 'f3', component: FerrariPininfarinaComponent },
  { path: 'f4', component: FerrariPortofinoComponent },
  { path: 'f5', component: FerrariPurosangueComponent },
  { path: 'f6', component: FerrariSf90Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
