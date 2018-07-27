import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdService } from '../prod.service';
import { Prod } from '../Prod';
import { Location } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-proddetails',
  templateUrl: './proddetails.component.html'
})
export class ProddetailsComponent implements OnInit {

  id: string;
  product: Prod[];

  constructor(private route: ActivatedRoute, private prodService: ProdService, private _location: Location) {
    this.route.params.subscribe(res => { this.id = res.id });
  }

  navigateToBack() {
    this._location.back();
  }

  ngOnInit() {
    this.prodService.getProduct(this.id).subscribe((data: Prod[]) => { this.product = data });
  }

}
