import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter, HostListener,Input,Output} from '@angular/core';
import { DrawService } from '../service/draw.service'
import { UtilityService } from '../service/Utility'

@Component({
    selector: 'pageView',
    template: `<div>
      <canvas #myCanvas [width]="pageW" [height]="pageH" class="pageView" 
      [style.top.px]="pageT" [style.left.px]="pageL" (dblclick)="doubleClick($event)">
      </canvas>
    </div>`,
    styleUrls: ['./page.component.css']
})
export class PageViewComponent implements OnInit {

    @Input() pageW:number;
    @Input() pageH:number;
    @Input() pageT:number;
    @Input() pageL:number;
    @Input() viewID:string;

    @Output() clickEvent = new EventEmitter<any>();
    @Output() openPage = new EventEmitter<any>();
    @ViewChild("myCanvas") myCanvas;

    titleText: "Page";
    rectColor:string = "#FFFFFF";
    rectStroke:string = "#E0000F";
    pageContentColor:string = "#EEEEEE";
    context:CanvasRenderingContext2D;
    canvas:HTMLCanvasElement;

    okToMove = false;
    differMouseH:number;
    differMouseV:number;

    inPoint:Array<number>;
    outPoint:Array<number>;

    @HostListener('document:mouseup', ['$event'])
    onMouseup(event) {
        this.initParams();
    }

    @HostListener('click', ['$event'])
    onClick(event) {
        var canvasPixelColor = this.utility.getPixelColorCanvas(event, this.canvas);
        
        if(canvasPixelColor.toUpperCase() == "#c2cbcf".toUpperCase()){
            event.clickobject = "right-arrow";
            this.clickEvent.emit(event);
            return false;
        }

        if(canvasPixelColor.toUpperCase() == "#c2cbce".toUpperCase()){
            event.clickobject = "left-arrow";
            this.clickEvent.emit(event);
            return false;
        }

        event.clickobject = "page-back";
        this.clickEvent.emit(event);
        return false;
    }

    @HostListener('mousedown', ['$event'])
    onMousedown(event) {
        var canvasPixelColor = this.utility.getPixelColorCanvas(event, this.canvas);
        // console.log(canvasPixelColor + "    " + this.rectStroke);
        if(canvasPixelColor.toUpperCase() == this.rectStroke.toUpperCase()) {
            this.differMouseH = event.clientX - parseInt(this.canvas.style.left);
            this.differMouseV = event.clientY - parseInt(this.canvas.style.top);
            this.okToMove = true;
        } else {
            this.initParams();;
        }
        return false; // Call preventDefault() on the event
    }

    @HostListener('document:mousemove', ['$event'])
    onMousemove(event) {
        if (this.okToMove) {
            var moveLeft = event.clientX - this.differMouseH;
            var moveTop = event.clientY - this.differMouseV;
            this.canvas.style.left = (event.clientX - this.differMouseH) + "px";
            this.canvas.style.top = (event.clientY - this.differMouseV) + "px";
        }
    }

    doubleClick(event) {
        var canvasPixelColor = this.utility.getPixelColorCanvas(event, this.canvas);
        if(canvasPixelColor.toUpperCase() == this.pageContentColor.toUpperCase()) {
            this.openPage.emit(event);
        }
        return false;
    }

    ngAfterViewInit() {
        this.canvas = this.myCanvas.nativeElement;
        this.context = this.canvas.getContext("2d");

        this.drawService.drawPageView(this.context, this.pageW,this.pageH, 
            10, 2, this.rectColor, this.rectStroke);
    }

    initParams() {
        this.okToMove = false;
        this.differMouseH = 0;
        this.differMouseV = 0;
    }

    constructor(private drawService:DrawService, private utility:UtilityService) {}
    ngOnInit() { }
}