import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TokenService} from "./services/token.service";
import {HttpClientModule} from "@angular/common/http";
import {SensorService} from "./services/sensor.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBi3ayxcYaWCh_LnNIGx5SlhBhZQGS_RRY'
    })
  ],
  providers: [TokenService, SensorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
