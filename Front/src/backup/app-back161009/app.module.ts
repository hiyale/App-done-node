import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DragulaService, DragulaModule} from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { PageViewComponent } from './pageview.component';
import { PlusButtonComponent} from './plusbutton.component';

@NgModule({
  declarations: [
    AppComponent,PageViewComponent,PlusButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
