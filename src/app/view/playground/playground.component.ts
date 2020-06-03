import { Component, OnInit } from '@angular/core';
import { GrainPicker } from '../grain-picker/grain-picker.component';
import { GrainIngredient } from 'src/app/model';

@Component({
    selector: 'yaba-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

    mashTemp = 66;
    mashDuration = 90;
    lauterTemp = 80;
    lauterDuration = 60;
    boilDuration = 90;
    grains: GrainIngredient[];

    constructor(
        private grainPicker: GrainPicker
    ) { }

    ngOnInit(): void {
    }

    pickGrain() {
        this.grainPicker.open().afterClosed().subscribe(result => this.grains = result);
    }
}
