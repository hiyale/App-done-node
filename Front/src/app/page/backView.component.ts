import { Component, OnInit, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'backView',
    template: `<canvas #backView class="backView"></canvas>`,
    styleUrls: ['./page.component.css']
})
export class BackViewComponent implements OnInit {
    constructor() { }
    ngOnInit() { 
        this.canvas = this.myCanvas.nativeElement;
        this.context = this.canvas.getContext("2d");
        this.canvas.style.position = "absolute";
        this.setWidth(window.innerWidth, window.innerHeight);
    }

    @Output() clickEvent = new EventEmitter<any>();

    @ViewChild("backView") myCanvas;
    context:CanvasRenderingContext2D;
    canvas:HTMLCanvasElement;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.setWidth(event.target.innerWidth, event.target.innerHeight);
    }

    @HostListener('click', ['$event'])
    onClick(event) {
        event.clickobject = "backView";
        this.clickEvent.emit(event);
    }

    private setWidth(width:number, height:number) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.left = "0px";
        this.canvas.style.top = "0px";
    }

}