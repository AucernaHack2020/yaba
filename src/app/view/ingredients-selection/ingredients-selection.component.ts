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
import { MatStepper } from '@angular/material/stepper';

// const GRAIN_DATA: GrainIngredient[] = [];

// const HOP_DATA: HopIngredient[] = [
//     {
//         _id: '1',
//         name: 'Styrian Golding',
//         alpha: 3.2,
//         mode: 'pellet',
//         weight: 100,
//         volume: 2.67,
//         usage: 'boil',
//         temperature: 90,
//         ibu: 90,
//         time: 45,
//     },
// ];

const YEAST_DATA: YeastIngredient[] = [
    {
        _id: '1',
        name: 'Some Yeast',
        aa: 90,
        weight: 3.12,
    },
];

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
    yeastDataSource = YEAST_DATA;

    ngOnInit(): void {
        //
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
        this.hopPicker.open().afterClosed().subscribe(hops => {
            this.recipe.hops.push(...hops);
            this.recipe.hops = this.recipe.hops.slice();
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
        this.recipe.styleId = style._id;
        this.stepper.next();
        this.data.recipes().subscribe(recipes => {
            const pre = recipes.filter(r => r.styleId === style._id);
            if (pre.length) {
                this.recipe = pre[this.rnd(pre.length)];
                this.recipe._id = undefined;
                this.recipe.mashDuration = (this.recipe.mashDuration as any).$numberInt;
                this.recipe.mashTemp = (this.recipe.mashTemp as any).$numberInt;
                this.recipe.lauterDuration = (this.recipe.lauterDuration as any).$numberInt;
                this.recipe.lauterTemp = (this.recipe.lauterTemp as any).$numberInt;
                this.recipe.boilDuration = (this.recipe.boilDuration as any).$numberInt;
            }
        });
    }

    private rnd(max) {
        return Math.floor(Math.random() * max);
    }
}
