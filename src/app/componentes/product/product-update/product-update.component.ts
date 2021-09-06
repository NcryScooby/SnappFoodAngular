import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(productById => {
      this.product = productById
    }

    );
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.ShowMessage('Produto Atualizado com Sucesso!')
      this.router.navigate(['/products']);
    })
  }


  cancel(): void {
    this.router.navigate(['/products'])
  }
}
