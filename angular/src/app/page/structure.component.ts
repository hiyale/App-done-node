import { Component, ViewChild, AfterViewInit, HostListener, Output, EventEmitter } from '@angular/core';
import { LineDynamicComponent } from './lineDynamic.component';
import { BackViewComponent } from './backView.component';
import { DrawService } from '../service/draw.service'
import { UtilityService } from '../service/Utility'

@Component({
  selector: 'structure',
  template: `
    <backView (clickEvent) = "clickEvent($event)"></backView>
    <line-dynamic></line-dynamic>
    <plusbtn></plusbtn>
    <pageView [pageW] = "150" [pageH] = "120" [pageT] = "100" [pageL] = "100" 
      [viewID] = "'pageView0001'" (clickEvent) = "clickEvent($event)" (openPage) = "openPage($event)"></pageView>
    <pageView [pageW] = "150" [pageH] = "120" [pageT] = "500" [pageL] = "200" 
    [viewID] = "'pageView0003'" (clickEvent) = "clickEvent($event)" (openPage) = "openPage($event)"></pageView>
    <pageView [pageW] = "150" [pageH] = "120" [pageT] = "300" [pageL] = "300" 
    [viewID] = "'pageView0002'" (clickEvent) = "clickEvent($event)" (openPage) = "openPage($event)"></pageView>
    <md-sidenav-container>
    <md-sidenav #start (open)="closeStartButton.focus()">
        Start Sidenav.
        <br>
        <button md-button #closeStartButton (click)="start.close()">Close</button>
    </md-sidenav>
    <md-sidenav #end align="end">
        End Sidenav.
        <button md-button (click)="end.close()">Close</button>
    </md-sidenav>

My regular content. This will be moved into the proper DOM at runtime.
<button md-button (click)="start.open()">Open start sidenav</button>
<button md-button (click)="end.open()">Open end sidenav</button>

</md-sidenav-container>
  `,
  styleUrls: ['./page.css'],
  providers: [DrawService, UtilityService]
})
export class StructureComponent implements AfterViewInit {
  @ViewChild(LineDynamicComponent)
  private lineDynamic: LineDynamicComponent;
  point:Array<number>;
  mousePos:Array<number>;

  ngAfterViewInit(){}

  @HostListener('document:mousemove', ['$event'])
    onMousemove(event) {
      if (this.point) {
        this.mousePos = [event.clientX, event.clientY];
        this.lineDynamic.drawLine(this.point, this.mousePos);
      }
    }

  @HostListener('document:mouseup', ['$event'])
    onMouseup(event) {
      this.point = null;
    }

  clickEvent(event) {
    switch (event.clickobject) {
      case "right-arrow":
        this.point = [event.clientX, event.clientY];
        break;
      case "left-arrow":
        break;
      case "backView":
        this.lineDynamic.hideLine();
      default:
        this.lineDynamic.hideLine();
        break;
    }
  }

  openPage(event) {
    console.log(event);
  }
}