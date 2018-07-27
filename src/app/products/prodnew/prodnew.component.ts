import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators, NgModel } from '@angular/forms';
import { ProdService } from '../../prod.service';
import { Prod } from '../../Prod';
import { Location } from '../../../../node_modules/@angular/common';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-prodnew',
  templateUrl: './prodnew.component.html'
})
export class ProdnewComponent implements OnInit {

  title = 'Novo Produto';
  prodForm: FormGroup;
  name: string = '';

  categories = [
    { id: 1, name: 'Ferramentas' },
    { id: 2, name: 'Informática' }
  ];

  constructor(private router: Router, private prodService: ProdService, private _location: Location, private toastr: ToastrService) { }

  // addProd(name, categoria) {
  //   console.log(categoria);
  //   // this.prodService.addProduct(name)
  //   //   .subscribe(res => console.log(res));
  //   // this.router.navigate(['produtos']);
  // }

  addProd(prod: Prod) {
    console.log(prod);
    this.prodService.addProduct(prod)
      .subscribe(response => {
        console.log(response)
        this.showSuccess()
      });
    this.router.navigate(['produtos'])

  }

  navigateToBack() {
    this._location.back();
  }

  ngOnInit() {
    // this.prodForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   categoria: ['', Validators.required]
    // })
  }

  showSuccess() {
    this.toastr.success('Sucesso', 'Processo concluído!')
  }

}
