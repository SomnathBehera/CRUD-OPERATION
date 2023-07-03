import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    component:HomeComponent,
  path:''
  },
  {
    component:HomeComponent,
  path:'home'
  },
  {
    component:ViewComponent,
  path:'view'
  },
  {
    component:EditComponent,
  path:'edit'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
