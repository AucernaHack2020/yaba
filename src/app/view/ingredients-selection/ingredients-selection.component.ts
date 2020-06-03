import { Component, OnInit } from '@angular/core';
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

    recipe: Recipe = new Recipe();

    constructor(private router: Router, private grainPicker: GrainPicker, private hopPicker: HopPicker) { }

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
    mashTemp = 66;
    mashDuration = 1;
    lauterTemp = 80;
    lauterDuration = 60;
    boilDuration = 90;

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
        })
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
}
