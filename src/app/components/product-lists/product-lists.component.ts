import { Component, OnInit } from '@angular/core';
import {IProduct} from './product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  providers:[ProductService],
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {
  pageTitle:string="Product-list";
  showImage: boolean = false;
  toggleImage():void{this.showImage = !this.showImage;}
  products:IProduct[];

  constructor(private p:ProductService) { }

  ngOnInit() {
    this.products=this.p.getProducts();
  }

}
