import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdService } from '../../prod.service';
import { Prod } from '../../Prod';
import { Location } from '../../../../node_modules/@angular/common';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-prodedit',
  templateUrl: './prodedit.component.html'
})
export class ProdeditComponent implements OnInit {
  
  title = 'Editar Produto'
  product: Prod
  id: string

  constructor(private route: ActivatedRoute, private router: Router, private prodService: ProdService, private _location: Location, private toastr: ToastrService) { 
    this.route.params.subscribe(params => this.id = params['id'])
  }

  updateProd(prod: Prod) {
    this.prodService.updateProduct(this.id, prod).subscribe(res => console.log('Updated'))
    this.toastr.success('Produto atualizado com sucesso', 'Sucesso')
    this.router.navigate(['produtos'])
  }

  navigateToBack() { this._location.back() }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.prodService.getProduct(params['id']).subscribe((data: Prod) =>  this.product = data);
    });
  }

}
