import { Component, OnInit, ViewChild, Injectable } from "@angular/core";
import { YeastIngredient } from "src/app/model";
import { MatSelectionList } from "@angular/material/list";
import { DataService } from "src/app/services/data.service";
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { CalcService } from "src/app/services/calc.service";

@Component({
  selector: "yaba-yeast-picker",
  templateUrl: "./yeast-picker.component.html",
  styleUrls: ["./yeast-picker.component.css"],
})
export class YeastPickerComponent implements OnInit {
  yeasts: YeastIngredient[];
  @ViewChild("list") list: MatSelectionList;

  constructor(
    private data: DataService,
    private ref: MatDialogRef<YeastPickerComponent, YeastIngredient[]>,
    private cal: CalcService
  ) {}

  async ngOnInit() {
    this.yeasts = await this.data.yeasts().toPromise();
  }

  ok() {
    this.ref.close(this.list.selectedOptions.selected.map((s) => s.value));
  }

  color(srm: number) {
    return this.cal.srmToRGB(srm);
  }
}

@Injectable({ providedIn: "root" })
export class YeastPicker {
  constructor(private dialog: MatDialog) {}

  open() {
    return this.dialog.open<YeastPickerComponent, any, YeastIngredient[]>(
      YeastPickerComponent,
      { disableClose: true }
    );
  }
}
