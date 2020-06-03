import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model';

@Component({
    selector: 'yaba-flow-chart',
    templateUrl: './flow-chart.component.html',
    styleUrls: ['./flow-chart.component.css']
})
export class FlowChartComponent implements OnInit {

    @Input() recipe: Recipe;

    constructor() { }

    ngOnInit(): void {
        //
    }

}
