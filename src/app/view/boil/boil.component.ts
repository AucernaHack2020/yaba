import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'yaba-boil',
    templateUrl: './boil.component.html',
    styleUrls: ['./boil.component.css']
})
export class BoilComponent implements OnInit {

    @Input() duration: number;
    @Output() durationChange = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

}
