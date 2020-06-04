import { Component, OnInit, ViewChild } from '@angular/core';
import {
    Style,
    GrainIngredient,
    HopIngredient,
    YeastIngredient,
    Recipe,
} from 'src/app/model';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { GrainPicker } from '../grain-picker/grain-picker.component';
import { HopPicker } from '../hop-picker/hop-picker.component';
import { YeastPicker } from '../yeast-picker/yeast-picker.component';
import { MatStepper } from '@angular/material/stepper';
import { CalcService } from 'src/app/services/calc.service';
import { MatSnackBar } from '@angular/material/snack-bar';

const yeastData: YeastIngredient[] = [];

@Component({
    selector: 'yaba-ingredients-selection',
    templateUrl: './ingredients-selection.component.html',
    styleUrls: ['./ingredients-selection.component.css'],
})
export class IngredientsSelectionComponent implements OnInit {
    @ViewChild('stepper') stepper: MatStepper;
    recipe: Recipe = new Recipe();
    recipes: Recipe[];

    constructor(
        private snackBar: MatSnackBar,
        private grainPicker: GrainPicker,
        private hopPicker: HopPicker,
        private yeastPicker: YeastPicker,
        private data: DataService,
        private calc: CalcService
    ) { }

    displayedGrainColumns: string[] = [
        'name',
        'potential',
        'colour',
        'percent',
        'weight',
        'use',
        'delete',
    ];

    displayedHopColumns: string[] = [
        'name',
        'alpha',
        'weight',
        'volume',
        'time',
        'ibu',
        'delete',
    ];

    displayedYeastColumns: string[] = ['name', 'aa', 'weight'];

    async ngOnInit() {
        this.recipes = await this.data.recipes().toPromise();
    }

    addGrain() {
        this.grainPicker
            .open()
            .afterClosed()
            .subscribe((grains) => {
                this.recipe.grains.push(...grains);
                this.recipe.grains = this.recipe.grains.slice();
            });
    }

    addHop() {
        this.hopPicker
            .open()
            .afterClosed()
            .subscribe((hops) => {
                hops.forEach(h => h.time = this.recipe.boilDuration);
                this.recipe.hops.push(...hops);
                this.recipe.hops = this.recipe.hops.slice();
            });
    }

    addYeast() {
        this.yeastPicker
            .open()
            .afterClosed()
            .subscribe((yeasts) => {
                if (yeasts.length > 0) {
                    // yeasts[0].aa = this.calc.fix(yeasts[0].aa);
                    this.recipe.yeast.name = yeasts[0].name;
                    this.recipe.yeast.aa = this.calc.fix(yeasts[0].aa);
                }
            });
    }

    deleteGrain(rowId: number) {
        if (rowId > -1) {
            this.recipe.grains.splice(rowId, 1);
            this.recipe.grains = this.recipe.grains.slice();
        }
    }

    deleteHop(rowId: number) {
        if (rowId > -1) {
            this.recipe.hops.splice(rowId, 1);
            this.recipe.hops = this.recipe.hops.slice();
        }
    }

    saveAndBrew() {
        this.stepper.next();
        this.data.createRecipe(this.recipe).subscribe(() => {
            this.snackBar.open('Recipe has been saved!', 'close', { duration: 3000 });
        });
    }

    chooseStyle(style: Style) {
        this.recipe.style = style;
        this.stepper.next();
        this.data.recipes().subscribe((recipes) => {
            const pre = recipes.filter((r) => r.style._id === style._id);
            if (pre.length) {
                this.recipe = pre[this.rnd(pre.length)];
                this.recipe._id = undefined;
                this.recipe.name = `Clone of (${this.recipe.name})`;
                this.recipe.size = this.calc.fix(this.recipe.size);
                this.recipe.mashDuration = this.calc.fix(this.recipe.mashDuration);
                this.recipe.mashTemp = this.calc.fix(this.recipe.mashTemp);
                this.recipe.lauterDuration = this.calc.fix(this.recipe.lauterDuration);
                this.recipe.lauterTemp = this.calc.fix(this.recipe.lauterTemp);
                this.recipe.boilDuration = this.calc.fix(this.recipe.boilDuration);
                this.recipe.grains.forEach(g => g.weight = this.calc.fix(g.weight));
                this.recipe.hops.forEach(h => {
                    h.weight = this.calc.fix(h.weight);
                    h.time = this.calc.fix(h.time);
                });
                this.recipe.yeast.weight = this.calc.fix(this.recipe.yeast.weight || 0);
                this.recipe.yeast.aa = this.calc.fix(this.recipe.yeast.aa || 0);
            } else {
                this.recipe.name = `My ${style.name}`;
                this.recipe.size = 20; //  default batch size
            }
        });
    }

    selectRecipe(recipe: Recipe) {
        this.recipe = recipe;
        this.recipe.size = this.calc.fix(this.recipe.size);
        this.recipe.mashDuration = this.calc.fix(this.recipe.mashDuration);
        this.recipe.mashTemp = this.calc.fix(this.recipe.mashTemp);
        this.recipe.lauterDuration = this.calc.fix(this.recipe.lauterDuration);
        this.recipe.lauterTemp = this.calc.fix(this.recipe.lauterTemp);
        this.recipe.boilDuration = this.calc.fix(this.recipe.boilDuration);
        this.recipe.grains.forEach(g => g.weight = this.calc.fix(g.weight));
        this.recipe.hops.forEach(h => {
            h.weight = this.calc.fix(h.weight);
            h.time = this.calc.fix(h.time);
        });
        this.recipe.yeast.weight = this.calc.fix(this.recipe.yeast.weight || 0);
        this.recipe.yeast.aa = this.calc.fix(this.recipe.yeast.aa || 0);
        this.stepper.next();
    }

    get og() {
        return this.calc.og(this.recipe);
    }

    get fg() {
        return this.calc.fg(this.recipe);
    }

    get abv() {
        return this.calc.abv(this.recipe);
    }

    get ibu() {
        return this.calc.ibu(this.recipe);
    }

    get totalWeight() {
        return this.calc.totalWeight(this.recipe);
    }

    get totalHops() {
        return this.calc.totalHops(this.recipe);
    }

    private rnd(max) {
        return Math.floor(Math.random() * max);
    }

}
