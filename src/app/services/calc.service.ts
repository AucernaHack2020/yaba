import { Injectable } from '@angular/core';
import { Recipe } from '../model';

@Injectable({
    providedIn: 'root'
})
export class CalcService {

    private readonly SRM = ['#FFFFFF', 'FFE699', '#FFD878', '#FFCA5A', '#FFBF42', '#FBB123', '#F8A600', '#F39C00', '#EA8F00', '#E58500',
        '#DE7C00', '#D77200', '#CF6900', '#CB6200', '#C35900', '#BB5100', '#B54C00', '#B04500', '#A63E00', '#A13700', '#9B3200',
        '#952D00', '#8E2900', '#882300', '#821E00', '#7B1A00', '#771900', '#701400', '#6A0E00', '#660D00', '#5E0B00',
        '#5A0A02', '#600903', '#520907', '#4C0505', '#470606', '#440607', '#3F0708', '#3B0607', '#3A070B', '#36080A'];

    constructor() { }

    srmToRGB(srm: number) {
        if (srm > 40) {
            return 'black';
        } else if (srm < 1) {
            return 'white';
        } else {
            return this.SRM[Math.round(srm)];
        }
    }

    toLbs(kg: number) {
        return kg / 0.45359;
    }

    toOz(kg: number) {
        return kg * 1000 * 0.035274;
    }

    toGal(liters: number) {
        return liters * 0.264172052637296;
    }

    toPpg(potential: number) {
        return potential * 1000 - 1000;
    }

    toPotential(ppg: number) {
        return this.round((ppg + 1000) / 1000, 1000);
    }

    round(value, zeros: number) {
        return Math.round(value * zeros) / zeros;
    }

    og(recipe: Recipe) {
        return this.toPotential(
            recipe.grains.map(g =>
                this.toLbs(g.weight) *
                this.toPpg(this.fix(g.potential)) *
                0.7 / // default efficiency
                this.toGal(recipe.size)
            ).reduce((p, c) => p + c, 0)
        );
    }

    totalWeight(recipe: Recipe) {
        return recipe.grains.map(g => g.weight || 0).reduce((p, a) => (p + a), 0);
    }

    fix(value: any) {
        return parseFloat(value.$numberInt || value.$numberDouble);
    }
}
