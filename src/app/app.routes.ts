import { Routes } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { ProddetailsComponent } from "./proddetails/proddetails.component";
import { ProdnewComponent } from "./products/prodnew/prodnew.component";
import { ProdeditComponent } from "./products/prodedit/prodedit.component";
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { CategoryNewComponent } from './category/category-new/category-new.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';

export const ROUTES: Routes = [
  { path: 'produtos', component: ProductsComponent },
  { path: 'prod/:id', component: ProductsComponent },
  { path: 'proddetail/:id', component: ProddetailsComponent },
  { path: 'produtos/new', component: ProdnewComponent },
  { path: 'prodedit/:id', component: ProdeditComponent },
  { path: 'about', component: AboutComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'category/new', component: CategoryNewComponent },
  { path: 'category/edit/:id', component: CategoryEditComponent },
  { path: 'category/detail/:id', component: CategoryDetailComponent }
]