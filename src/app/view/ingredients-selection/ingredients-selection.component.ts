import { Component, OnInit } from '@angular/core';
import {
  Style,
  GrainIngredient,
  HopIngredient,
  YeastIngredient,
} from 'src/app/model';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { GrainPicker } from '../grain-picker/grain-picker.component';

const GRAIN_DATA: GrainIngredient[] = [];

const HOP_DATA: HopIngredient[] = [
  {
    _id: '1',
    name: 'Styrian Golding',
    alpha: 3.2,
    mode: 'pellet',
    weight: 100,
    volume: 2.67,
    usage: 'boil',
    temperature: 90,
    ibu: 90,
    time: 45,
  },
];

const YEAST_DATA: YeastIngredient[] = [
  {
    _id: '1',
    name: 'Some Yeast',
    aa: 90,
    weight: 3.12,
  },
];

@Component({
  selector: 'yaba-ingredients-selection',
  templateUrl: './ingredients-selection.component.html',
  styleUrls: ['./ingredients-selection.component.css'],
})
export class IngredientsSelectionComponent implements OnInit {
  constructor(private router: Router, private grainPicker: GrainPicker) {}

  displayedGrainColumns: string[] = [
    'name',
    'potential',
    'colour',
    'percent',
    'weight',
    'use',
    'delete',
  ];
  grainDataSource = GRAIN_DATA;

  displayedHopColumns: string[] = [
    'name',
    'alpha',
    'weight',
    'volume',
    'time',
    'ibu',
    'delete',
  ];
  hopDataSource = HOP_DATA;

  displayedYeastColumns: string[] = ['name', 'aa', 'weight'];
  yeastDataSource = YEAST_DATA;
  mashTemp = 66;
  mashDuration = 90;
  lauterTemp = 80;
  lauterDuration = 60;
  boilDuration = 90;

  ngOnInit(): void {
    //
  }

  addGrain() {
    this.grainPicker
      .open()
      .afterClosed()
      .subscribe((grains) => {
        this.grainDataSource.push(...grains);
        this.grainDataSource = this.grainDataSource.slice();
      });
  }

  addHop() {}

  deleteGrain(rowId: number) {
    if (rowId > -1) {
      this.grainDataSource.splice(rowId, 1);
      this.grainDataSource = this.grainDataSource.slice();
    }
  }

  deleteHop(rowId: number) {
    if (rowId > -1) {
      this.hopDataSource.splice(rowId, 1);
      this.hopDataSource = this.hopDataSource.slice();
    }
  }

  btnClick() {
    this.router.navigateByUrl('/flow-chart');
  }
}
