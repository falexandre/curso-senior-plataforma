import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MomentModule } from 'ngx-moment';
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { TableModule } from "primeng/table";
import { PanelModule } from "primeng/panel";

import {
  CyclicJsonInterceptorModule,
  HttpInterceptorModule,
} from "@seniorsistemas/platform-components";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CyclicJsonInterceptorModule,
    HttpInterceptorModule,
    AppRoutingModule,
    TableModule,
    PanelModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}