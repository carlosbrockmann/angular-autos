import { Component, OnInit } from '@angular/core';
import { GlobalConstants, CARS } from '../../global-constants';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css'],
})
export class AutosComponent implements OnInit {
  autoListe: CARS[];
  automarken: string[];
  firstLabel = 'Nach Marke filtern';

  constructor() {
    this.autoListe = GlobalConstants.CarList;

    const marken = [];

    if (this.autoListe) {
      for (let i = 0; i < this.autoListe.length; i++) {
        if (marken.indexOf(this.autoListe[i].Marke) < 0)
          marken.push(this.autoListe[i].Marke);
      }
      this.automarken = marken.sort();
    }
  }

  ngOnInit() {}

  onAutoMarkenSelect(val: string) {
    if (val == '') {
      this.autoListe = GlobalConstants.CarList;
      this.firstLabel = 'Nach Marke filtern';
    } else {
      this.autoListe = GlobalConstants.CarList.filter((a) => a.Marke == val);
      this.firstLabel = 'Alle anzeigen';
    }
  }
}
