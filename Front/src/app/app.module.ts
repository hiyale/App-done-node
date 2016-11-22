import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppDone1RoutingModule } from './app-routing.module'
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap'

import { AppComponent } from './app.component';
import { PageControllerComponent } from './pageLinker/pageController.component';
import { PageViewComponent } from './pageLinker/pageview.component';
import { PlusButtonComponent } from './pageLinker/plusbutton.component';
import { LineDynamicComponent } from './pageLinker/lineDynamic.component';
import { BackViewComponent } from './pageLinker/backView.component';

@NgModule({
  declarations: [
    AppComponent,
    PageControllerComponent,
    PageViewComponent,
    PlusButtonComponent,
    LineDynamicComponent,
    BackViewComponent
  ],
  imports: [
    AppDone1RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
