import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppDone1RoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { StructureComponent } from './page/structure.component';
import { PageViewComponent } from './page/pageview.component';
import { PlusButtonComponent } from './page/plusbutton.component';
import { LineDynamicComponent } from './page/lineDynamic.component';
import { BackViewComponent } from './page/backView.component';
import { IndexComponent } from './index/index.component'
import { AppViewComponent } from './index/appview.component'
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    StructureComponent,
    PageViewComponent,
    PlusButtonComponent,
    LineDynamicComponent,
    BackViewComponent,
    IndexComponent,
    AppViewComponent
  ],
  imports: [
    AppDone1RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
