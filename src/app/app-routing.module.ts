import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleSelectorComponent } from './view/style-selector/style-selector.component';
import { LoginComponent } from './view/login/login.component';
import { IngredientsSelectionComponent } from './view/ingredients-selection/ingredients-selection.component';
import { BeerSelectionComponent } from './view/beer-selection/beer-selection.component';
import { FlowChartComponent } from './view/flow-chart/flow-chart.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const appRoutes: Routes = [
  { path: 'table', component: StyleSelectorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ingredients-selection', component: IngredientsSelectionComponent },
  { path: 'beer-selection', component: BeerSelectionComponent },
  { path: 'flow-chart', component: FlowChartComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
