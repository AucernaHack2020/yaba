import { Component, OnInit } from '@angular/core';
import {
  Style,
  GrainIngredient,
  HopIngredient,
  YeastIngredient,
} from 'src/app/model';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Router } from '@angular/router';

const GRAIN_DATA: GrainIngredient[] = [
];

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
    attenuation: 90,
    weight: 3.12,
  },
];

@Component({
  selector: 'yaba-ingredients-selection',
  templateUrl: './ingredients-selection.component.html',
  styleUrls: ['./ingredients-selection.component.css'],
})
export class IngredientsSelectionComponent implements OnInit {
  constructor(private router: Router) {}
  displayedGrainColumns: string[] = [
    'name',
    'extract',
    'color',
    'percent',
    'weight',
    'usage',
    'delete',
  ];
  grainDataSource = GRAIN_DATA;

  displayedHopColumns: string[] = [
    'name',
    'alpha',
    'mode',
    'weight',
    'volume',
    'usage',
    'temperature',
    'time',
    'ibu',
    'delete',
  ];
  hopDataSource = HOP_DATA;

  displayedYeastColumns: string[] = ['name', 'attenuation', 'weight'];
  yeastDataSource = YEAST_DATA;

  ngOnInit(): void {}

  addGrain() {
    GRAIN_DATA.push({
      _id: '3',
      name: '',
      extract: 0,
      colour: 0,
      percent: 0,
      weight: 0,
      use: 'Mash',
      type: 'Grain'
    });
    console.log(GRAIN_DATA);
  }

  addHop() {
    HOP_DATA.push({
      _id: '',
      name: '0',
      alpha: 0,
      mode: 'pellet',
      weight: 0,
      volume: 0,
      usage: 'boil',
      temperature: 0,
      time: 0,
      ibu: 0,
    });
    console.log(HOP_DATA);
  }

  btnClick() {
    this.router.navigateByUrl('/flow-chart');
  }
}
