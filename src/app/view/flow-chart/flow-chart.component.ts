import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Recipe } from 'src/app/model';
import { CalcService } from 'src/app/services/calc.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'yaba-flow-chart',
  templateUrl: './flow-chart.component.html',
  styleUrls: ['./flow-chart.component.css'],
})
export class FlowChartComponent implements OnInit {
  @Input() recipe: Recipe;
  @ViewChild('stepper') stepper: MatStepper;

  constructor(private calc: CalcService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    //
  }

  get og() {
    return this.calc.og(this.recipe);
  }

  get totalWeight() {
    return this.calc.totalWeight(this.recipe);
  }

  finishMash() {
    this.snackBar
      .open('Mash has been finished!', 'Next step?')
      .onAction()
      .subscribe(() => this.stepper.next());
  }

  finishLautering() {
    this.snackBar
      .open('Lautering has been finished!', 'Next step?')
      .onAction()
      .subscribe(() => this.stepper.next());
  }

  finishCooling() {
    this.snackBar
      .open('Cooling has been finished!', 'Next step?')
      .onAction()
      .subscribe(() => this.stepper.next());
  }


  finishBoil() {
    this.snackBar
      .open('Boil has been finished!', 'Next step?')
      .onAction()
      .subscribe(() => this.stepper.next());
  }

  inviteFriends() {
    location.href =
      'mailto:mybeer.buddies@shaw.ca?subject=Beer is ready&body=Bring sausages and pretzels!';
  }
}
