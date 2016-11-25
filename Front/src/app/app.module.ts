import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppDone1RoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PageControllerComponent } from './page/pageController.component';
import { PageViewComponent } from './page/pageview.component';
import { PlusButtonComponent } from './page/plusbutton.component';
import { LineDynamicComponent } from './page/lineDynamic.component';
import { BackViewComponent } from './page/backView.component';

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
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
