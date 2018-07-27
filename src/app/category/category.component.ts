import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Categoria } from '../Category';
import { CategoryService } from './category.service';
import { ToastrService } from 'ngx-toastr';
import { Page } from '../page';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
  @ViewChild('hdrTpl') hdrTpl: TemplateRef<any>;

  title = 'Categorias'
  rows: Categoria[] = []
  columns = []

  page = new Page()

  headerHeight = 50
  rowHeight = 50
  width = 100

  constructor(private categoryService: CategoryService, private toastr: ToastrService) {
    this.page.size = 5
  }

  ngOnInit() {
    this.categoryService.getCategories(this.page).subscribe((data: Categoria[]) => {
      // console.log(data)
      this.rows = data['content']
      this.page.size = data['size']
      this.page.totalElements = data['totalElements']
      this.page.pageNumber = data['number']
    })

    this.columns = [{ prop: 'id', checkboxable: true }, { name: 'Nome', width: '850' },
    {
      cellTemplate: this.editTmpl,
      headerTemplate: this.hdrTpl,
      name: 'Ações'
    }]
  }

  deleteCategory(id) {
    this.categoryService.deleteCategory(id).subscribe(res => {
      console.log('Deleted')
      // this.categories = this.categories.filter(c => c !== id)
      this.rows.splice(this.rows.indexOf(id), 1);
      this.showSuccess()
    }, error => {
      console.log(error)
      this.showError(error)
    })
  }

  showSuccess(message: string = 'Processo concluído') {
    this.toastr.success(message, 'Sucesso')
  }

  showError(error: string = 'Processo não concluído') {
    this.toastr.error(error, 'Erro')
  }

  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.categoryService.getCategories(this.page).subscribe(pagedData => {
      this.page.size = pagedData['size']
      this.page.totalElements = pagedData['totalElements']
      this.page.pageNumber = pagedData['number']
      this.rows = pagedData['content'];
    });
  }

}
