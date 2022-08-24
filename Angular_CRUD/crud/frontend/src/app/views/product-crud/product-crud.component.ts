import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { ProductService } from 'src/app/components/product/product.service';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private productService: ProductService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.headerData = {
      title: 'Products',
      icon: 'store',
      routeUrl: '/products'
    }
  }

  navigateToProductCreate(){
    this.router.navigate(['/products/create'])
  }

}
