import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrganizationListComponent} from "./page/organization/organization-list/organization-list.component";
import {OrganizationEditComponent} from "./page/organization/organization-edit/organization-edit.component";

const routes: Routes = [
  {path: 'organization-list', component: OrganizationListComponent},
  {path: 'organization-edit/:id', component: OrganizationEditComponent},
  {path: 'organization-new', component: OrganizationEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
