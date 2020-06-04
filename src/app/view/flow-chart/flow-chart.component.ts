import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model';
import { CalcService } from 'src/app/services/calc.service';

@Component({
    selector: 'yaba-flow-chart',
    templateUrl: './flow-chart.component.html',
    styleUrls: ['./flow-chart.component.css']
})
export class FlowChartComponent implements OnInit {

    @Input() recipe: Recipe;

    constructor(
        private calc: CalcService
    ) { }

    ngOnInit(): void {
        //
    }

    get og() {
        return this.calc.og(this.recipe);
    }

    get totalWeight() {
        return this.calc.totalWeight(this.recipe);
    }

}
