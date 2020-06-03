import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { HopIngredient } from 'src/app/model';
import { MatSelectionList } from '@angular/material/list';
import { DataService } from 'src/app/services/data.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { CalcService } from 'src/app/services/calc.service';

@Component({
  selector: 'yaba-hop-picker',
  templateUrl: './hop-picker.component.html',
  styleUrls: ['./hop-picker.component.css']
})
export class HopPickerComponent implements OnInit {

    hops: HopIngredient[];
    @ViewChild('list') list: MatSelectionList;

    constructor(
        private data: DataService,
        private ref: MatDialogRef<HopPickerComponent, HopIngredient[]>,
        private cal: CalcService
    ) { }

    async ngOnInit() {
        this.hops = (await this.data.hops().toPromise());
    }

    ok() {
        this.ref.close(this.list.selectedOptions.selected.map(s => s.value));
    }

    color(srm: number) {
        return this.cal.srmToRGB(srm);
    }
}

@Injectable({ providedIn: 'root' })
export class HopPicker {

    constructor(private dialog: MatDialog) { }

    open() {
        return this.dialog.open<HopPickerComponent, any, HopIngredient[]>(HopPickerComponent, { disableClose: true });
    }
}
