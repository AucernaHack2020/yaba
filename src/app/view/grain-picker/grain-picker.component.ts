import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { GrainIngredient } from 'src/app/model';
import { DataService } from 'src/app/services/data.service';
import { MatSelectionList } from '@angular/material/list';

@Component({
    selector: 'yaba-grain-picker',
    templateUrl: './grain-picker.component.html',
    styleUrls: ['./grain-picker.component.css']
})
export class GrainPickerComponent implements OnInit {

    grains: GrainIngredient[];
    @ViewChild('list') list: MatSelectionList;

    constructor(
        private data: DataService
    ) { }

    async ngOnInit() {
        this.grains = (await this.data.grains().toPromise()).filter(grain => grain.use === 'Mash' && grain.type === 'Grain');
    }

}


@Injectable({ providedIn: 'root'} )
export class GrainPicker {

    constructor()
}