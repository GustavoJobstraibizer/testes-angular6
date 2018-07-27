import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../Category';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { CategoryService } from '../category.service';
import { Location } from '../../../../node_modules/@angular/common';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html'
})
export class CategoryEditComponent implements OnInit {

  title = 'Alterar Categoria'
  category: Categoria
  id: string

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private categoryService: CategoryService, 
    private _location: Location, 
    private toastr: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryService.getCategory(params['id']).subscribe((res: Categoria) => this.category = res);
      this.id = params['id']
    })
  }

  navigateToBack() { this._location.back() }

  updateCategory(category) {
    this.categoryService.updateCategory(this.id, category).subscribe(res => {
      this.toastr.success('Categoria atualizada com sucesso', 'Sucesso')
      this.router.navigate(['/category'])
    }, error => this.toastr.error(error, 'Error'))
  }

}
