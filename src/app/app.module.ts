import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProdService } from './prod.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProddetailsComponent } from './proddetails/proddetails.component';
import { ProdnewComponent } from './products/prodnew/prodnew.component';
import { ProdeditComponent } from './products/prodedit/prodedit.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { AsideComponent } from './aside/aside.component';
import { UserPanelComponent } from './aside/user-panel/user-panel.component';
import { InputComponent } from './shared/input/input.component';
import { SelectComponent } from './shared/select/select.component';
import { CategoryComponent } from './category/category.component';
import { CategoryNewComponent } from './category/category-new/category-new.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProddetailsComponent,
    ProdnewComponent,
    ProdeditComponent,
    HeaderComponent,
    AboutComponent,
    AsideComponent,
    UserPanelComponent,
    InputComponent,
    SelectComponent,
    CategoryComponent,
    CategoryNewComponent,
    CategoryEditComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxDatatableModule
  ],
  providers: [ProdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
