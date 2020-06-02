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

}
