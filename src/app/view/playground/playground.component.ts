import { Component, OnInit } from '@angular/core';
import { GrainPicker } from '../grain-picker/grain-picker.component';
import { GrainIngredient, Style } from 'src/app/model';

@Component({
    selector: 'yaba-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

    style: Style = {
        _id: '1a',
        category: {
            _id: '1',
            name: 'IPA'
        },
        colour: '#AAAAAA',
        name: 'American IPA'
    };

    constructor(
        private grainPicker: GrainPicker
    ) { }

    ngOnInit(): void {
    }

}
