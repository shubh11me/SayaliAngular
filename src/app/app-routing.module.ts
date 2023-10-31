import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"abt",component:AboutComponent},
  {path:"obs",component:ObservableComponent},
  {path:'',redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
