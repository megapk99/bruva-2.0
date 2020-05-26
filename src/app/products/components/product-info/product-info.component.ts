import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private gs: ProductsService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params.id;
    this.gs.getProduct(productId).subscribe(doc => {
      if (doc.exists) {
        this.product = doc.data();
      }
    });
  }

}
