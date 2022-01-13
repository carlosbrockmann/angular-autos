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

  private selectedId: number = 0;

  ngOnInit() {
    var selID: string = this.route.snapshot.paramMap.get('ID');
    if (selID && !isNaN(selID as any)) this.selectedId = parseInt(selID);

    var autos = GlobalConstants.CarList.filter((c) => c.ID == this.selectedId);
    if (autos.length > 0) this.auto = autos[0];

    let view = this.route.snapshot.queryParamMap.get('viewstate') || 'details';
    if (view == 'edit') {
      this.viewstate = 'edit';
      this.editmodus = true;
    } else {
      this.viewstate = 'details';
      this.editmodus = false;
    }
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
}
