import { Component, OnInit } from '@angular/core';
import { FormGroup } from '../../../../node_modules/@angular/forms';
import { Location } from '../../../../node_modules/@angular/common';
import { Categoria } from '../../Category';
import { CategoryService } from '../category.service';
import { Router } from '../../../../node_modules/@angular/router';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html'
})
export class CategoryNewComponent implements OnInit {

  title = 'Cadastrar Categoria'
  categoryForm: FormGroup

  constructor(private _location: Location, private categoryService: CategoryService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  navigateToBack() {
    this._location.back()
  }

  addCategory(category: Categoria) {
    this.categoryService.postCategory(category).subscribe(response => {
      console.log(response)
      this.showSuccess()
    })
    this.router.navigate(['category'])
  }

  showSuccess() {
    this.toastr.success('Sucesso', 'Processo concluído!')
  }

}
