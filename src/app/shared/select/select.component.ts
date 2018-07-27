import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-select-container',
  templateUrl: './select.component.html'
})
export class SelectComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string

  categories = [
    { id: 1, name: 'Ferramentas' },
    { id: 2, name: 'Informática' }
  ];

  select: any

  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngOnInit() {
  }

  hasSuccess(): boolean {
    return this.select.valid && (this.select.dirty || this.select.touched)
  }

  hasError(): boolean {
    return this.select.invalid && (this.select.dirty || this.select.touched)
  }

  ngAfterContentInit() {
    this.select = this.model
    if (this.select === undefined) {
      throw new Error('Este componente precisa ser utilizado com a diretiva ngModel')
    }
  }

}
