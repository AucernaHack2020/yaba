import { Component, OnInit } from '@angular/core';

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

    constructor() { }

    ngOnInit(): void {
    }

    pickGrain() {
        
    }
}
