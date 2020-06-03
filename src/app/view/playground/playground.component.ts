import { Component, OnInit } from '@angular/core';
import { GrainPicker } from '../grain-picker/grain-picker.component';
import { GrainIngredient } from 'src/app/model';

@Component({
    selector: 'yaba-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

    finished = false;

    constructor(
        private grainPicker: GrainPicker
    ) { }

    ngOnInit(): void {
    }

}
