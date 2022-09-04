import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrganizationListComponent} from "./page/organization/organization-list/organization-list.component";
import {OrganizationEditComponent} from "./page/organization/organization-edit/organization-edit.component";
import {CardListComponent} from "./page/card/card-list/card-list.component";
import {CardEditComponent} from "./page/card/card-edit/card-edit.component";
import {LimitationListComponent} from "./page/limitation/limitation-list/limitation-list.component";
import {LimitationEditComponent} from "./page/limitation/limitation-edit/limitation-edit.component";
import {LimitationSetListComponent} from "./page/limitation/limitation-set-list/limitation-set-list.component";
import {LimitationSetEditComponent} from "./page/limitation/limitation-set-edit/limitation-set-edit.component";
import {PersonListComponent} from "./page/card/person-list/person-list.component";
import {PersonEditComponent} from "./page/card/person-edit/person-edit.component";

const routes: Routes = [
  {path: 'organization-list', component: OrganizationListComponent},
  {path: 'organization-edit/:id', component: OrganizationEditComponent},
  {path: 'organization-new', component: OrganizationEditComponent},
  {path: 'card-list', component: CardListComponent},
  {path: 'card-edit/:id', component: CardEditComponent},
  {path: 'card-new', component: CardEditComponent},
  {path: 'limitation-list', component: LimitationListComponent},
  {path: 'limitation-edit/:id', component: LimitationEditComponent},
  {path: 'limitation-new', component: LimitationEditComponent},
  {path: 'limitation-set-list', component: LimitationSetListComponent},
  {path: 'limitation-set-edit/:id', component: LimitationSetEditComponent},
  {path: 'limitation-set-new', component: LimitationSetEditComponent},
  {path: 'person-list', component: PersonListComponent},
  {path: 'person-edit/:id', component: PersonEditComponent},
  {path: 'person-new', component: PersonEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
