import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EMailVerifyLinkComponent } from './email-verify-link/email-verify-link.component';
import {HelperServicesService} from "./services/helper.service";

@NgModule({
  declarations: [
    AppComponent,
    EMailVerifyLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [HelperServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
