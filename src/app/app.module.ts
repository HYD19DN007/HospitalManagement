import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateApplicationComponent } from './createapplication/create-application.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PatientListComponent } from './patient-list/patient-list.component';
import {HospitalServiceService} from "./hospital-service.service";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { searchPipe } from './pipes/searchPipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateApplicationComponent,
    PatientListComponent,
    searchPipe,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,

    ],
  providers: [HospitalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
