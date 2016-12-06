import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <plusbtn></plusbtn>
    <pageView [pageW] = "150" [pageH] = "120" [pageT] = "100" [pageL] = "100" ></pageView>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}