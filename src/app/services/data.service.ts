import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Style, Category } from '../model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

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
}
