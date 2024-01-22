import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ferrari488Component } from './ferrari-488/ferrari-488.component';
import { FerrariMythosComponent } from './ferrari-mythos/ferrari-mythos.component';
import { FerrariPininfarinaComponent} from './ferrari-pininfarina/ferrari-pininfarina.component';
import { FerrariSf90Component } from './ferrari-sf90/ferrari-sf90.component';
import { FerrariPortofinoComponent } from './ferrari-portofino/ferrari-portofino.component';
import { FerrariPurosangueComponent } from './ferrari-purosangue/ferrari-purosangue.component';

@NgModule({
    declarations: [
        AppComponent,
        Ferrari488Component,
        FerrariMythosComponent,
        FerrariPininfarinaComponent,
        FerrariPortofinoComponent,
        FerrariSf90Component,
        FerrariPurosangueComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
