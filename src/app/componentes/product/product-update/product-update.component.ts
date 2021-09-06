import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product[];

  constructor(private producServicer: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  updateProduct(): void {

  }

  cancel(): void{
    this.router.navigate(['/products'])
  }
}
