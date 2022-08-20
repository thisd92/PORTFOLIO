import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(){
    this.router.navigate(['/products/create'])
  }

}
