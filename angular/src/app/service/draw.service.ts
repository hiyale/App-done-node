import { Injectable } from '@angular/core';

@Injectable()

export class DrawService {

    constructor() { }

    shadowColor:string = "gray";
    arrowColor1:string = "#c2cbcf";
    arrowColor2:string = "#c2cbce";

    drawPageView(context:CanvasRenderingContext2D, contextWidth:number, 
        contextHeight:number, cornerRadius:number, strokeWidth:number, fillColor:string, strokeColor:string) {

        var rectWidth = contextWidth - cornerRadius * 2 - strokeWidth - 12;
        var rectHeight = contextHeight - cornerRadius * 2 - strokeWidth - 3;
        var rectLeft = strokeWidth/2 + 8;
        var rectTop = strokeWidth/2 + 20;

        this.drawTitleBar(context, rectWidth-20, 20, rectLeft, 1, cornerRadius, 
            strokeWidth, strokeColor, strokeColor,rectWidth);
        this.drawRoundRect(context, rectWidth, rectHeight, rectLeft, rectTop, cornerRadius, 
            strokeWidth, fillColor, strokeColor);
        this.drawText(context, "页面1", 16, rectLeft);
        this.drawTriangle(context, 20, 20, rectWidth + 16, rectHeight/2 + 12, this.arrowColor1, "white", 2);
        this.drawTriangle(context, 20, 20, 1, rectHeight/2 + 12, this.arrowColor2, "white", 2);
    }

    private drawRoundRect(context:CanvasRenderingContext2D, rectWidth:number, rectHeight:number, 
        rectLeft:number, rectTop:number, cornerRadius:number, strokeWidth:number, fillColor:string, 
        strokeColor:string) {

        context.save();
        context.beginPath();
        context.moveTo(cornerRadius + rectLeft, rectTop);
        context.lineTo(cornerRadius + rectWidth,rectTop);
        context.arcTo(cornerRadius * 2 + rectWidth, rectTop, cornerRadius * 2 + rectWidth, 
            cornerRadius + rectTop, cornerRadius);
        context.lineTo(cornerRadius * 2 + rectWidth,cornerRadius + rectHeight);
        context.arcTo(cornerRadius * 2 + rectWidth, cornerRadius * 2 + rectHeight, 
            cornerRadius + rectWidth, cornerRadius * 2 + rectHeight, cornerRadius);
        context.lineTo(cornerRadius + rectLeft,cornerRadius * 2 + rectHeight);
        context.arcTo(rectLeft, cornerRadius * 2 + rectHeight, rectLeft, cornerRadius + rectHeight, cornerRadius);
        context.lineTo(rectLeft,cornerRadius + rectTop);
        context.arcTo(rectLeft, rectTop, cornerRadius + rectLeft, rectTop, cornerRadius);

        // complete custom shape
        context.closePath();
        context.fillStyle = fillColor;
        context.fill();
        context.lineWidth = strokeWidth;
        context.strokeStyle = strokeColor;
        context.stroke();
        this.addShadow(context,this.shadowColor);
        context.restore();
        this.drawPageSquare(context,rectWidth,rectHeight,rectLeft,rectTop,cornerRadius,1);
    }

    private drawTitleBar(context:CanvasRenderingContext2D, rectUpWidth:number, rectHeight:number, 
        rectLeft:number, rectTop:number, cornerRadius:number, strokeWidth:number, fillColor:string, 
        strokeColor:string, rectDownWidth:number){
        
        context.save();
        context.beginPath();
        context.moveTo(cornerRadius + rectLeft, rectTop);
        context.lineTo(cornerRadius + rectUpWidth - 10,rectTop);
        context.arcTo(cornerRadius * 2 + rectUpWidth - 10, rectTop, cornerRadius * 2 + rectUpWidth, 
            cornerRadius + rectTop + 5, cornerRadius);
        context.lineTo(cornerRadius * 2 + rectDownWidth - 10,cornerRadius + rectHeight);
        context.arcTo(cornerRadius * 2 + rectDownWidth, cornerRadius * 2 + rectHeight, 
            cornerRadius + rectDownWidth, cornerRadius * 2 + rectHeight, cornerRadius);
        context.lineTo(cornerRadius + rectLeft,cornerRadius * 2 + rectHeight);
        context.arcTo(rectLeft, cornerRadius * 2 + rectHeight, rectLeft, cornerRadius + rectHeight, cornerRadius);
        context.lineTo(rectLeft,cornerRadius + rectTop);
        context.arcTo(rectLeft, rectTop, cornerRadius + rectLeft, rectTop, cornerRadius);

        // complete custom shape
        context.closePath();
        this.addShadow(context, this.shadowColor);
        context.lineWidth = strokeWidth;
        context.strokeStyle = strokeColor;
        context.stroke();
        context.fillStyle = fillColor;
        context.fill();
        context.restore();
    }

    private drawText(context:CanvasRenderingContext2D, text:string, fontsize:number, rectLeft:number) {
        context.save();
        context.font= fontsize + "px 黑体";
        context.fillStyle = "white"
        context.fillText(text,rectLeft + 7,fontsize);
        context.restore();
    }

    private drawTriangle(context:CanvasRenderingContext2D, triWidth:number, triHeight:number, 
        triLeft:number, triTop:number,fillColor:string, strokeColor:string, strokeWidth:number) {
        
        context.save();
        context.beginPath();
        context.moveTo(triLeft, triTop);
        context.lineTo(triLeft + Math.sin(60 * Math.PI / 180) * triWidth, 
            triHeight * Math.cos(60 * Math.PI / 180) + triTop);
        context.lineTo(triLeft, triTop + triHeight);

        context.closePath();
        context.lineWidth = strokeWidth;
        context.strokeStyle = strokeColor;
        context.stroke();
        context.fillStyle = fillColor;
        context.fill();
        context.restore();
    }

    private addShadow(context:CanvasRenderingContext2D, shadowColor:string){
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowBlur = 3;
        context.shadowColor = shadowColor;
        context.fill();
        context.stroke();
    }

    private drawPageSquare(context:CanvasRenderingContext2D, rectWidth:number, rectHeight:number, 
        rectLeft:number, rectTop:number, cornerRadius:number, strokeWidth:number) {

        context.save();
        context.beginPath();
        context.moveTo(rectLeft + 12, rectTop + 13);
        context.lineTo(rectWidth + cornerRadius * 2 -10, rectTop + 13);
        context.lineTo(rectWidth + cornerRadius * 2 -10, rectTop + rectHeight - 12);
        context.lineTo(rectLeft + 12, rectTop + rectHeight - 12);

        context.closePath();
        context.lineWidth = strokeWidth;
        context.strokeStyle = "black";
        context.stroke();
        context.fillStyle = "#EEEEEE";
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowBlur = 3;
        context.shadowColor = this.shadowColor;
        context.fill();
        context.restore();
    }

    drawLine(context:CanvasRenderingContext2D, start:Array<number>, end:Array<number>, 
        lineColor:string, lineWidth:number){

        var width = context.canvas.width;
        var height = context.canvas.height;
        var stPoint:Array<number>;
        var endPoint:Array<number>;
        if (end[1] >= start[1] && end[0] >= start[0]){
            stPoint = [0,0];
            endPoint = [width,height];
        }else if (end[0] >= start[0] && end[1] <= start[1]){
            stPoint = [0,height];
            endPoint = [width,0];
        }else if (end[0] <= start[0] && end[1] >= start[1]){
            stPoint = [width,0];
            endPoint = [0,height];
        }else if (end[0] <= start[0] && end[1] <= start[1]){
            stPoint = [width,height];
            endPoint = [0,0];
        }

        this.cleanContext(context);
        context.save();
        context.beginPath();
        context.moveTo(stPoint[0],stPoint[1]);
        context.lineTo(endPoint[0], endPoint[1]);
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.stroke();
        context.restore();
    }

    cleanContext(context:CanvasRenderingContext2D) {
        var width = context.canvas.width;
        var height = context.canvas.height;
        context.clearRect(0,0,width,height);
    }
}