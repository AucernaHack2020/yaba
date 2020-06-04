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

const yeastData: YeastIngredient[] = [];

@Component({
    selector: 'yaba-ingredients-selection',
    templateUrl: './ingredients-selection.component.html',
    styleUrls: ['./ingredients-selection.component.css'],
})
export class IngredientsSelectionComponent implements OnInit {
    @ViewChild('stepper') stepper: MatStepper;
    recipe: Recipe = new Recipe();
    style: Style;

    constructor(
        private router: Router,
        private grainPicker: GrainPicker,
        private hopPicker: HopPicker,
        private yeastPicker: YeastPicker,
        private data: DataService
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

    yeastDataSource = yeastData;

    ngOnInit(): void { }

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
                    this.recipe.yeast = yeasts[0];
                    if (this.yeastDataSource.length > 0) {
                        this.yeastDataSource[0] = yeasts[0];
                    } else {
                        this.yeastDataSource.push(...yeasts);
                    }
                    this.yeastDataSource = this.yeastDataSource.slice();
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

    btnClick() {
        this.router.navigateByUrl('/flow-chart');
    }

    saveAndBrew() {
        this.stepper.next();
        this.data.createRecipe(this.recipe).subscribe(() => {
            console.log('DONE');
        });
    }

    chooseStyle(style: Style) {
        this.style = style;
        this.recipe.style = style;
        this.stepper.next();
        this.data.recipes().subscribe((recipes) => {
            const pre = recipes.filter((r) => r.style._id === style._id);
            if (pre.length) {
                this.recipe = pre[this.rnd(pre.length)];
                this.recipe._id = undefined;
                this.recipe.name = `Clone of (${this.recipe.name})`;
                this.recipe.size = (this.recipe.size as any).$numberInt;
                this.recipe.mashDuration = (this.recipe.mashDuration as any).$numberInt;
                this.recipe.mashTemp = (this.recipe.mashTemp as any).$numberInt;
                this.recipe.lauterDuration = (this.recipe
                    .lauterDuration as any).$numberInt;
                this.recipe.lauterTemp = (this.recipe.lauterTemp as any).$numberInt;
                this.recipe.boilDuration = (this.recipe.boilDuration as any).$numberInt;
            } else {
                this.recipe.name = `My own ${style.name}`;
                this.recipe.size = 20; //  default batch size
            }
        });
    }

    get totalWeight() {
        return this.recipe.grains.map(g => g.weight || 0).reduce((p, a) => (p + a), 0);
    }

    private rnd(max) {
        return Math.floor(Math.random() * max);
    }
}
