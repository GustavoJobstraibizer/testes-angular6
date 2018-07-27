import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Location } from '../../../../node_modules/@angular/common';
import { CategoryService } from '../category.service';
import { Categoria } from '../../Category';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html'
})
export class CategoryDetailComponent implements OnInit {

  id: string
  category: Categoria

  constructor(private route: ActivatedRoute, private _location: Location, private categoryService: CategoryService) {
    this.route.params.subscribe(res => this.id = res.id)
  }

  ngOnInit() {
    this.categoryService.getCategory(this.id).subscribe((data: Categoria) => this.category = data)
  }

  navigateToBack() {
    this._location.back()
  }

}
