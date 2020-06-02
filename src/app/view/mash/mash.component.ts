import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'yaba-mash',
    templateUrl: './mash.component.html',
    styleUrls: ['./mash.component.css']
})
export class MashComponent implements OnInit {

    @Input() mashTemp: number;
    @Output() mashTempChange = new EventEmitter<number>();
    @Input() mashDuration;
    @Output() mashDurationChange = new EventEmitter<number>();
    @Input() lauterTemp: number;
    @Output() lauterTempChange = new EventEmitter<number>();
    @Input() lauterDuration: number;
    @Output() lauterDurationChange = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

}
