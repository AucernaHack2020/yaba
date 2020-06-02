import { Component, OnInit } from '@angular/core';
import { Style, Category } from 'src/app/model';
import * as stylesJSON from 'src/assets/examples/styles.json';
import * as categoriesJSON from 'src/assets/examples/category.json';

@Component({
    selector: 'yaba-style-selector',
    templateUrl: './style-selector.component.html',
    styleUrls: ['./style-selector.component.css']
})
export class StyleSelectorComponent implements OnInit {

    styles: Style[] = (stylesJSON as any).default;
    categories: Category[] = (categoriesJSON as any).default;
    matrix: Style[][] = [];
    flattenMatrix: Style[] = [];
    // tslint:disable-next-line: max-line-length
    colours = ['#e6194B', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#42d4f4', '#f032e6', '#bfef45', '#fabebe', '#469990', '#e6beff', '#9A6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#a9a9a9'];

    constructor() { }

    ngOnInit() {
        const tmp = this.categories.map(cat => this.styles.filter(style => style.category._id === cat._id));
        const max = tmp.map(styles => styles.length).reduce((prev, current) => Math.max(prev, current));
        tmp.forEach((styles, i) => styles.forEach(style => style.colour = this.colours[i % this.colours.length]));
        tmp.forEach(styles => styles.unshift(...Array.from({ length: max - styles.length }, () => null)));
        this.matrix = this.categories.map(() => []);
        tmp.forEach((styles, i) => styles.forEach((style, j) => this.matrix[j][i] = style));
        this.matrix.forEach(styles => this.flattenMatrix.push(...styles));
    }
}
