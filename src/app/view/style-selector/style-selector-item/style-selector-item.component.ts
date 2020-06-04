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

    get abv() {
        return this.calc.fix(this.style.ABV_Max);
    }

    get ibu() {
        return this.calc.fix(this.style.IBU_Max);
    }

    get srm() {
        return this.calc.fix(this.style.Colour_Max);
    }
}
