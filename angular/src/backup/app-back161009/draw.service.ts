import { Injectable } from '@angular/core';

@Injectable()

export class DrawService {

    constructor() { }

    drawPageView(context:CanvasRenderingContext2D, contextWidth:number, 
        contextHeight:number, cornerRadius:number, strokeWidth:number, fillColor:string, strokeColor:string) {

        var rectWidth = contextWidth - cornerRadius * 2 - strokeWidth - 15;
        var rectHeight = contextHeight - cornerRadius * 2 - strokeWidth;
        var rectLeft = strokeWidth/2;
        var rectTop = strokeWidth/2 + 20;

        this.drawTitleBar(context, rectWidth-20, 20, rectLeft, 1, cornerRadius, 
            strokeWidth, "red", strokeColor,rectWidth);
        this.drawRoundRect(context, rectWidth, rectHeight, rectLeft, rectTop, cornerRadius, 
            strokeWidth, fillColor, strokeColor);
        this.drawText(context, "页面1", 16);
        this.drawTriangle(context, 20, 20, 130, 60, "#29cb00", "white", 2);
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
        context.lineWidth = strokeWidth;
        context.strokeStyle = strokeColor;
        context.stroke();
        context.fillStyle = fillColor;
        context.fill();
        context.restore();
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
        context.lineWidth = strokeWidth;
        context.strokeStyle = strokeColor;
        context.stroke();
        context.fillStyle = fillColor;
        context.fill();
        context.restore();
    }

    private drawText(context:CanvasRenderingContext2D, text:string, fontsize:number) {
        context.save();
        context.font= fontsize + "px 黑体";
        context.fillStyle = "white"
        context.fillText(text,10,fontsize);
        context.restore();
    }

    private drawTriangle(context:CanvasRenderingContext2D, triWidth:number, triHeight:number, 
        triLeft:number, triTop:number,fillColor:string, strokeColor:string, strokeWidth:number) {
        
        context.save();
        context.beginPath();
        context.moveTo(triLeft, triTop);
        context.lineTo(triLeft + Math.sin(60 * Math.PI / 180) * triWidth, triHeight * Math.cos(60 * Math.PI / 180) + triTop);
        context.lineTo(triLeft, triTop + triHeight);

        context.closePath();
        context.lineWidth = strokeWidth;
        context.strokeStyle = strokeColor;
        context.stroke();
        context.fillStyle = fillColor;
        context.fill();
        context.restore();
    }
}