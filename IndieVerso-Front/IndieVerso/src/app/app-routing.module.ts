import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UndertaleComponent } from './pages/home/Jogos/Undertale/undertale/undertale.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch: 'full'},
  {path: 'analise/undertale', component: UndertaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
