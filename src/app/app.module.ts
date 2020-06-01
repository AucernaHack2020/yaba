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

@NgModule({
  declarations: [
    AppComponent,
    StyleSelectorComponent,
    StyleSelectorItemComponent,
    LoginComponent,
    BeerSelectionComponent,
    IngredientsSelectionComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
