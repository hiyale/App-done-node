import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter, HostListener} from '@angular/core';
import { DrawService } from './draw.service'

@Component({
    selector: 'pageView',
    template: `<div>
      <canvas #myCanvas [width]="pageW" [height]="pageH" class="pageView" [style.top.px]="pageT" [style.left.px]="pageL">
      </canvas>
      <div>
        宽<input type="range" min="1" max="400" [(ngModel)]="pageW" /><br />
        高<input type="range" min="1" max="400" [(ngModel)]="pageH" /><br />
        颜色<input type="color" [(ngModel)]="rectColor" placeholder="color" value="{{rectColor}}" />
      </div>
    </div>`,
    styleUrls: ['./app.component.css'],
    inputs:['pageW', 'pageH', 'pageT', 'pageL' ],
    providers: [DrawService]
})
export class PageViewComponent implements OnInit {
    pageW:number;
    pageH:number;
    pageT:number;
    pageL:number;
    titleText: "Page";
    rectColor:string = "#FFFFFF";
    rectStroke:string = "#FF0000";
    context:CanvasRenderingContext2D;

    mouseup = new EventEmitter();
    mousedown = new EventEmitter();
    mousemove = new EventEmitter();

    // @HostListener('document:mouseup', ['$event'])
    // onMouseup(event) {
    //     this.mouseup.emit(event);
    //     console.log("mouseup");
    // }

    // @HostListener('mousedown', ['$event'])
    // onMousedown(event) {
    //     this.mousedown.emit(event);
    //     return false; // Call preventDefault() on the event
    // }

    // @HostListener('document:mousemove', ['$event'])
    // onMousemove(event) {
    //     this.mousemove.emit(event);
    // }

    @ViewChild("myCanvas") myCanvas;

    ngAfterViewInit() {
        let canvas = this.myCanvas.nativeElement;
        this.context = canvas.getContext("2d");

        this.tick();
    }

    tick() {
        requestAnimationFrame(()=> {
        this.tick()
        });
        this.drawService.drawPageView(this.context, this.pageW,this.pageH, 10, 2, "white", "red");
    }

    constructor(private drawService:DrawService) {}
    ngOnInit() { }
}