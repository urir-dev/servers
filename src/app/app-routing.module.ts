import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';


const routes: Routes = [

  { path: '', redirectTo: '/main-container', pathMatch: 'full' },
  { path: 'main-container', component: MainContainerComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
