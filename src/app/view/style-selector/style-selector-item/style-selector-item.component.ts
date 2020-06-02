import { Component, OnInit, Input } from '@angular/core';
import { Style } from 'src/app/model';
import { CalcService } from 'src/app/services/calc.service';

@Component({
    selector: 'yaba-style-selector-item',
    templateUrl: './style-selector-item.component.html',
    styleUrls: ['./style-selector-item.component.css']
})
export class StyleSelectorItemComponent implements OnInit {

    @Input() style: Style;

    constructor(public calc: CalcService) { }

    ngOnInit(): void {
    }

    hexComplimentary(hex) {

        let rgb: any = 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length / 3 + '})', 'g')).map(function(l) { return parseInt(hex.length % 2 ? l + l : l, 16); }).join(',') + ')';

        // Get array of RGB values
        rgb = rgb.replace(/[^\d,]/g, '').split(',');

        let r = rgb[0] / 255.0, g = rgb[1] / 255.0, b = rgb[2] / 255.0;

        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2.0;

        if (max == min) {
            h = s = 0;  // achromatic
        } else {
            let d = max - min;
            s = (l > 0.5 ? d / (2.0 - max - min) : d / (max + min));

            if (max == r && g >= b) {
                h = 1.0472 * (g - b) / d;
            } else if (max == r && g < b) {
                h = 1.0472 * (g - b) / d + 6.2832;
            } else if (max == g) {
                h = 1.0472 * (b - r) / d + 2.0944;
            } else if (max == b) {
                h = 1.0472 * (r - g) / d + 4.1888;
            }
        }

        h = h / 6.2832 * 360.0 + 0;

        // Shift hue to opposite side of wheel and convert to [0-1] value
        h += 180;
        if (h > 360) { h -= 360; }
        h /= 360;

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            let hue2rgb = function hue2rgb(p, q, t) {
                if (t < 0) { t += 1; }
                if (t > 1) { t -= 1; }
                if (t < 1 / 6) { return p + (q - p) * 6 * t; }
                if (t < 1 / 2) { return q; }
                if (t < 2 / 3) { return p + (q - p) * (2 / 3 - t) * 6; }
                return p;
            };

            let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            let p = 2 * l - q;

            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        r = Math.round(r * 255);
        g = Math.round(g * 255);
        b = Math.round(b * 255);

        // Convert r b and g values to hex
        rgb = b | (g << 8) | (r << 16);
        return '#' + (0x1000000 | rgb).toString(16).substring(1);
    }

}