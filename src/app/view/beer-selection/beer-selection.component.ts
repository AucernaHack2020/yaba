import { Component, OnInit } from "@angular/core";
import { Style } from "src/app/model";
import { Router } from "@angular/router";

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
  constructor(private router: Router) {}
  style: Style;
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

  btnClick() {
    this.router.navigateByUrl("/ingredients-selection");
  }
}
