import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StructureComponent } from './page/structure.component'
import { AppComponent } from './app.component'
import { IndexComponent } from './index/index.component'
import { AppViewComponent } from './index/appview.component'

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path:'app', component: AppViewComponent},
  {path:'app/structure', component: StructureComponent}
// {path:'', redirectTo: 'pages', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppDone1RoutingModule { }
