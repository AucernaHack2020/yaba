import { Component, OnInit } from '@angular/core';
import { Style } from 'src/app/model';

@Component({
    selector: 'yaba-style-selector',
    templateUrl: './style-selector.component.html',
    styleUrls: ['./style-selector.component.css']
})
export class StyleSelectorComponent implements OnInit {

    styles: Style[] = [
        // tslint:disable: max-line-length
        { name: 'Berliner weise', srm: 3 }, { name: 'Lambic', srm: 10 }, { name: 'Belgian Gold Ale', srm: 5}, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        { name: 'Belgian white', srm: 3 }, { name: 'Gueuze', srm: 10 }, { name: 'Tripel', srm: 6 }, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
        { name: 'American wheat', srm: 5 }, { name: 'Faro', srm: 10 }, { name: 'Saison', srm: 7 }, { name: 'Pale Ale', srm: 8 }
        // tslint:enable: max-line-length
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
