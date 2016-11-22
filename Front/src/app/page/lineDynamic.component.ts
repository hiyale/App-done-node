import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { DrawService } from '../service/draw.service';

@Component({
    selector: 'line-dynamic',
    template: `
            <canvas #myCanvas></canvas>
    `
})
export class LineDynamicComponent implements OnInit {

    private _visible:boolean = true;
    get visible():boolean {
        return this._visible;
    }
    set visible(theVisible:boolean) {
        this._visible = theVisible;
        if (!theVisible) {
            this.drawService.cleanContext(this.context);
            this.canvas.style.position = "absolute";
            this.canvas.style.left = 0 + "px";
            this.canvas.style.top = 0 + "px";
            this.canvas.width = 0;
            this.canvas.height = 0;
        }
    }

    lineColors = {
        "transition" : "#000d97",
        "structure" : "#00a546",
        "reference" : "#eb00de"
    }

    lineWidth = 2;

    constructor(private drawService:DrawService) { }
    ngOnInit() { }

    @ViewChild("myCanvas") myCanvas;
    context:CanvasRenderingContext2D;
    canvas:HTMLCanvasElement;

    ngAfterViewInit() {
        this.canvas = this.myCanvas.nativeElement;
        this.context = this.canvas.getContext("2d");
    }

    drawLine(st:Array<number>, end:Array<number>){
        this.visible = true;
        this.canvas.style.position = "absolute";
        this.canvas.style.left = (st[0] < end[0] ? st[0].toString() : end[0].toString()) + "px";
        this.canvas.style.top = (st[1] < end[1] ? st[1].toString() : end[1].toString()) + "px";
        this.canvas.width = Math.abs(end[0] - st[0]);
        this.canvas.height = Math.abs(end[1] - st[1]);
        this.drawService.drawLine(this.context, st,end,this.lineColors.transition,this.lineWidth);
    }

    hideLine() {
        this.visible = false;
    }

}