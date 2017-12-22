import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { ContentComponent } from './content/content.component';
import { environment } from '../environments/environment';
import { MapService } from './services/map.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.API_KEY
    }),
    HttpModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
