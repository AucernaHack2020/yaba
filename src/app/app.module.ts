import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StyleSelectorComponent } from "./view/style-selector/style-selector.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { StyleSelectorItemComponent } from "./view/style-selector/style-selector-item/style-selector-item.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./view/login/login.component";
import { BeerSelectionComponent } from "./view/beer-selection/beer-selection.component";
import { IngredientsSelectionComponent } from "./view/ingredients-selection/ingredients-selection.component";
import { FlowChartComponent } from "./view/flow-chart/flow-chart.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from "@angular/material/stepper";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatDividerModule } from "@angular/material/divider";
import { IngredientElementComponent } from "./view/ingredients-selection/ingredient-element/ingredient-element.component";
import { MashComponent } from "./view/mash/mash.component";
import { MatSliderModule } from "@angular/material/slider";
import { PlaygroundComponent } from "./view/playground/playground.component";
import { FormsModule } from "@angular/forms";
import { BoilComponent } from "./view/boil/boil.component";
import { FermentationComponent } from "./view/fermentation/fermentation.component";
import {
  GrainPickerComponent,
  GrainPicker,
} from "./view/grain-picker/grain-picker.component";
import { MatListModule } from "@angular/material/list";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TimerComponent } from "./timer/timer.component";
import { HopPickerComponent } from "./view/hop-picker/hop-picker.component";
import { YeastPickerComponent } from "./view/yeast-picker/yeast-picker.component";

@NgModule({
  declarations: [
    AppComponent,
    StyleSelectorComponent,
    StyleSelectorItemComponent,
    LoginComponent,
    BeerSelectionComponent,
    IngredientsSelectionComponent,
    FlowChartComponent,
    IngredientElementComponent,
    MashComponent,
    PlaygroundComponent,
    BoilComponent,
    FermentationComponent,
    GrainPickerComponent,
    TimerComponent,
    HopPickerComponent,
    YeastPickerComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
    FormsModule,
    MatGridListModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSliderModule,
    MatListModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GrainPicker],
})
export class AppModule {}
