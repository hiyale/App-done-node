import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageControllerComponent } from './page/pageController.component'
import { AppComponent } from './app.component'

const routes: Routes = [
  {path:'', redirectTo: 'pages', pathMatch: 'full'},
  {path:'pages', component: PageControllerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppDone1RoutingModule { }
