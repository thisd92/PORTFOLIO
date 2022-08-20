import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Product>;
  dataSource!: ProductReadComponent;

  products!: Product[];
  displayedColumns = ['product', 'price'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.dataSource = new ProductReadComponent(this.productService)
    this.productService.read().subscribe(products => {
        this.products = products
      })
    }

    connect(): Observable<Product[]> {
      if (this.paginator && this.sort) {
        // Combine everything that affects the rendered data into one update
        // stream for the data-table to consume.
        return merge(observableOf(this.products), this.paginator.page, this.sort.sortChange)
          .pipe(map(() => {
            return this.getPagedData(this.getSortedData([...this.products ]));
          }));
      } else {
        throw Error('Please set the paginator and sort on the data source before connecting.');
      }
    }

    disconnect(): void {}

    private getPagedData(data: Product[]): Product[] {
      if (this.paginator) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
      } else {
        return data;
      }
    }

    private getSortedData(data: Product[]): Product[] {
      if (!this.sort || !this.sort.active || this.sort.direction === '') {
        return data;
      }
  
      return data.sort((a, b) => {
        const isAsc = this.sort?.direction === 'asc';
        switch (this.sort?.active) {
          case 'name': return compare(a.name, b.name, isAsc);
          case 'price': return compare(+a.price!, +b.price!, isAsc);
          default: return 0;
        }
      });
    }

    ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    }

}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
