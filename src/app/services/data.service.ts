import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Style, Category, GrainIngredient, HopIngredient, YeastIngredient, Recipe } from '../model';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private cachedGrains: Observable<GrainIngredient[]>;
    private cachedHops: Observable<HopIngredient[]>;

    private base = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/yabastitch-ipyan/service';

    constructor(
        private http: HttpClient
    ) { }

    styles() {
        return this.http.get<Style[]>(`${this.base}/styles/incoming_webhook/styles_get`);
    }

    categories() {
        return this.http.get<Category[]>(`${this.base}/categories/incoming_webhook/categories_get`);
    }

    grains() {
        if (!this.cachedGrains) {
            this.cachedGrains = this.http.get<GrainIngredient[]>(`${this.base}/grains/incoming_webhook/grains_get`).pipe(shareReplay());
        }
        return this.cachedGrains;
    }

    hops() {
        if (!this.cachedHops) {
            this.cachedHops = this.http.get<HopIngredient[]>(`${this.base}/hops/incoming_webhook/hops_get`).pipe(shareReplay());
        }
        return this.cachedHops;
    }

    yeasts() {
        return this.http.get<YeastIngredient[]>(`${this.base}/yeasts/incoming_webhook/yeasts_get`);
    }

    recipes() {
        return this.http.get<Recipe[]>(`${this.base}/recipes/incoming_webhook/recipes_get`);
    }

    createRecipe(recipe: Recipe) {
        return this.http.post<Recipe>(`${this.base}/recipes/incoming_webhook/recipes_post`, recipe);
    }

}
