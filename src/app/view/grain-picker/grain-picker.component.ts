import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { GrainIngredient } from 'src/app/model';
import { DataService } from 'src/app/services/data.service';
import { MatSelectionList } from '@angular/material/list';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CalcService } from 'src/app/services/calc.service';

@Component({
    selector: 'yaba-grain-picker',
    templateUrl: './grain-picker.component.html',
    styleUrls: ['./grain-picker.component.css']
})
export class GrainPickerComponent implements OnInit {

    grains: GrainIngredient[];
    @ViewChild('list') list: MatSelectionList;

    constructor(
        private data: DataService,
        private ref: MatDialogRef<GrainPickerComponent, GrainIngredient[]>,
        private cal: CalcService
    ) { }

    async ngOnInit() {
        this.grains = (await this.data.grains().toPromise()).filter(grain => grain.use === 'Mash' && grain.type === 'Grain');
    }

    ok() {
        this.ref.close(this.list.selectedOptions.selected.map(s => s.value));
    }

    color(srm: number) {
        return this.cal.srmToRGB(srm);
    }
}

@Injectable({ providedIn: 'root' })
export class GrainPicker {

    constructor(private dialog: MatDialog) { }

    open() {
        return this.dialog.open<GrainPickerComponent, any, GrainIngredient[]>(GrainPickerComponent, { disableClose: true });
    }
}
