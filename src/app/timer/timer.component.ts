import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'yaba-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnChanges {

    @Input() duration: number;
    @Output() finish = new EventEmitter();
    totalSecs: number;
    hours: number;
    minutes: number;
    seconds: number;
    interval;
    startedAt: number;

    constructor() { }

    ngOnInit(): void {
        // this.totalSecs = this.duration * 60;
        // this.update();
    }

    ngOnChanges() {
        this.totalSecs = this.duration * 60;
        this.update();
    }

    start() {
        this.startedAt = new Date().getTime();
        this.interval = setInterval(() => {
            this.totalSecs = this.duration * 60 - (new Date().getTime() - this.startedAt) / 1000;
            if (this.totalSecs < 0) {
                clearInterval(this.interval);
                this.totalSecs = 0;
                this.finish.emit();
            }
            this.update();
        }, 100);
    }

    skip() {
        this.startedAt -= 10 * 1000;
    }

    update() {
        this.hours = Math.floor(this.totalSecs / 60 / 60);
        this.minutes = Math.floor(this.totalSecs / 60) % 60;
        this.seconds = this.totalSecs - this.minutes * 60 - this.hours * 60 * 60;
    }

    reset() {
        clearInterval(this.interval);
        this.totalSecs = this.duration * 60;
        this.startedAt = undefined;
        this.update();
    }
}
