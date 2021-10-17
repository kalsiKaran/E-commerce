import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routingComponents/home/home.component';
import { WorkersComponent } from './routingComponents/workers/workers.component';

const routes: Routes = [
    { path:'', redirectTo:'/home', pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'workers', component: WorkersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModules = [HomeComponent, WorkersComponent]