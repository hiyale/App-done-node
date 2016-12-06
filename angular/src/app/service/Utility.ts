import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
    constructor() { }

    rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    hexToRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    getPixelColorCanvas(event, canvas:HTMLCanvasElement) :string {
        var differH = event.clientX - parseInt(canvas.style.left);
        var differV = event.clientY - parseInt(canvas.style.top); 
        if(isNaN(differH) || isNaN(differV)) {
            return "undefined";
        }else{
            var data = canvas.getContext("2d").getImageData(differH, differV, 1, 1).data;
            var hex = this.rgbToHex(data[0], data[1], data[2]).toUpperCase();
            return hex;
        }
    }
}