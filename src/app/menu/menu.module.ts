import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import {ProductComponent}from '../components/product-lists/product-lists.component'
const routes:Routes = [
  {path:'',component:ProductListsComponent},
  {path:'product',component:ProductComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class MenuModule { }
