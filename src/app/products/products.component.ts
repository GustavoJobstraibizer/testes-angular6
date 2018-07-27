import { Component, OnInit } from '@angular/core';
import { ProdService } from '../prod.service';
import { Prod } from '../Prod';
import { Router } from '@angular/router';
import { ToastrService } from '../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'products';
  products: Prod[];

  constructor(private prodService: ProdService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.prodService
      .getProducts()
      .subscribe((data: Prod[]) => {
        this.products = data;
      });
  }

  deleteProd(id) {
    this.prodService
      .deleteProduct(id)
      .subscribe(res => {
        this.products.splice(this.products.indexOf(id), 1);
        this.showSuccess()
      });
  }

  showSuccess(message: string = 'Processo concluído') {
    this.toastr.success(message, 'Sucesso')
  }

}
