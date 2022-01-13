import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { GlobalConstants, CARS } from '../../../global-constants';

@Component({
  selector: 'app-autodetails',
  templateUrl: './autodetails.component.html',
  styleUrls: ['./autodetails.component.css'],
})
export class AutodetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  auto: CARS;
  viewstate: string = 'details';
  editmodus: boolean = false;
  message: string = '';
  errorMessage: string = '';

  private selectedId: number = 0;

  ngOnInit() {
    var selID: string = this.route.snapshot.paramMap.get('ID');
    if (selID && !isNaN(selID as any)) this.selectedId = parseInt(selID);

    var autos = GlobalConstants.CarList.filter((c) => c.ID == this.selectedId);
    if (autos.length > 0) this.auto = autos[0];
    if (autos.length == 0) {
      this.auto = {} as CARS;
    }

    let view = this.route.snapshot.queryParamMap.get('viewstate') || 'details';
    this.selectAction(view);
  }

  toggleViewState(): void {
    if (this.editmodus) {
      this.viewstate = 'details';
      this.editmodus = false;
    } else {
      this.viewstate = 'edit';
      this.editmodus = true;
    }
  }

  selectAction(action: string) {
    this.message = '';
    this.errorMessage = '';
    if (!action) action = 'details';
    if (action == 'details') {
      this.viewstate = 'details';
      this.editmodus = false;
    }
    if (action == 'edit') {
      this.viewstate = 'edit';
      this.editmodus = true;
    }
    if (action == 'new') {
      this.viewstate = 'new';
      this.editmodus = true;
      this.auto = {} as CARS;
      this.auto.ID = GlobalConstants.CarList.length + 1;
    }
    if (action == 'save') {
      var isNew: boolean = false;
      var tmp = GlobalConstants.CarList.filter((c) => c.ID == this.auto.ID);
      if (this.auto.Marke) {
        if (tmp.length == 0) {
          GlobalConstants.CarList.push(this.auto);
          this.viewstate = 'details';
          this.editmodus = false;
          this.message = 'Datensatz hinzugefügt!';
        }
        if (tmp.length > 0) {
          this.viewstate = 'details';
          this.editmodus = false;
          this.message = 'Datensatz gespeichert!';
        }
      } else {
        this.errorMessage = 'Bitte Daten vervollstädigen!';
      }
    }
  }
}
