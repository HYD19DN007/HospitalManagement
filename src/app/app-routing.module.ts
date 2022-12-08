import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CreateApplicationComponent} from "./createapplication/create-application.component";
import {PatientListComponent } from "./patient-list/patient-list.component";


const routes: Routes = [
  {path: "create", component: CreateApplicationComponent},
  {path: "list", component: PatientListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
