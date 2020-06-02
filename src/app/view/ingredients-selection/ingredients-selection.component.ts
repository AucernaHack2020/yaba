import { Component, OnInit } from "@angular/core";
import { Style, GrainIngredient, HopIngredient } from "src/app/model";
import { PipeCollector } from "@angular/compiler/src/template_parser/binding_parser";
import { Router } from "@angular/router";

let GRAIN_DATA: GrainIngredient[] = [
  {
    _id: "1",
    name: "Cargill Special Pale",
    extract: 1.038,
    color: 3.5,
    percent: 87.21,
    weight: 15,
    exclude: false,
    usage: "mash",
  },
  {
    _id: "2",
    name: "Cargill Caramel 80",
    extract: 1.038,
    color: 3.5,
    percent: 2.91,
    weight: 15,
    exclude: false,
    usage: "mash",
  },
];

const HOP_DATA: HopIngredient[] = [
  {
    _id: "1",
    name: "Styrian Golding",
    alpha: 3.2,
    mode: "pellet",
    weight: 100,
    volume: 2.67,
    usage: "boil",
    temperature: 90,
    ibu: 90,
  },
];

@Component({
  selector: "yaba-ingredients-selection",
  templateUrl: "./ingredients-selection.component.html",
  styleUrls: ["./ingredients-selection.component.css"],
})
export class IngredientsSelectionComponent implements OnInit {
  constructor(private router: Router) {}
  displayedGrainColumns: string[] = [
    "name",
    "extract",
    "color",
    "percent",
    "weight",
    "usage",
    "exclude",
  ];
  grainDataSource = GRAIN_DATA;

  displayedHopColumns: string[] = [
    "name",
    "alpha",
    "mode",
    "weight",
    "volume",
    "usage",
    "temperature",
    "ibu",
  ];
  hopDataSource = HOP_DATA;

  ngOnInit(): void {}

  addGrain() {
    GRAIN_DATA = [...GRAIN_DATA];
  }

  btnClick() {
    this.router.navigateByUrl("/flow-chart");
  }
}
