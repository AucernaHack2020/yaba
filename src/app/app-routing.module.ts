import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { StyleSelectorComponent } from "./view/style-selector/style-selector.component";
import { LoginComponent } from "./view/login/login.component";
import { IngredientsSelectionComponent } from "./view/ingredients-selection/ingredients-selection.component";
import { BeerSelectionComponent } from "./view/beer-selection/beer-selection.component";
import { FlowChartComponent } from "./view/flow-chart/flow-chart.component";

const appRoutes: Routes = [
  { path: "table", component: StyleSelectorComponent },
  { path: "login", component: LoginComponent },
  { path: "ingredients-selection", component: IngredientsSelectionComponent },
  { path: "beer-selection", component: BeerSelectionComponent },
  { path: "flow-chart", component: FlowChartComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
