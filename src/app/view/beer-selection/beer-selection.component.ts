import { Component, OnInit } from "@angular/core";

export interface Template {
  name: string;
  type: string;
  color: string;
  rows: number;
  cols: number;
}

@Component({
  selector: "yaba-beer-selection",
  templateUrl: "./beer-selection.component.html",
  styleUrls: ["./beer-selection.component.css"],
})
export class BeerSelectionComponent implements OnInit {
  templates: Template[] = [
    { name: "Welzenbler", type: "ale", color: "yellow", rows: 1, cols: 1 },
    { name: "Fruit Beer", type: "ale", color: "green", rows: 1, cols: 2 },
    { name: "Belgian Pale", type: "ale", color: "grey", rows: 2, cols: 1 },
    { name: "Dubbel", type: "ale", color: "#DDBDF1", rows: 2, cols: 2 },
  ];

  myRecipes: Template[] = [
    {
      name: "Breakfast Lager",
      type: "lager",
      color: "salmon",
      rows: 1,
      cols: 1,
    },
    { name: "Relax after work", type: "ale", color: "green", rows: 1, cols: 2 },
  ];

  ngOnInit(): void {}
}
