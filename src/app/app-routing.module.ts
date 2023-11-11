import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EgyptnewsComponent } from './egyptnews/egyptnews.component';
import { BitcoinnewsComponent } from './bitcoinnews/bitcoinnews.component';
import { GlobalnewsComponent } from './globalnews/globalnews.component';


const routes: Routes = [
  {path : 'global' , component : GlobalnewsComponent},
  {path : 'eg' , component : EgyptnewsComponent} ,
  {path : 'bitcoin' , component : BitcoinnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
