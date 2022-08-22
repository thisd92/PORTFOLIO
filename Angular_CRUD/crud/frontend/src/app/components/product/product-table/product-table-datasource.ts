import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Product } from '../product.model';

// TODO: Replace this with your own data model type

// TODO: replace this with real data from your application
const DATA: Product[] = [
  {id: 1, name: 'Teste', price: 5000},
  {id: 2, name: 'Teste2', price: 3000},
  {id: 3, name: 'Teste3', price: 3000},
  {id: 4, name: 'Teste4', price: 3000},
  {id: 5, name: 'Teste5', price: 3000},
  {id: 6, name: 'Teste6', price: 3000},
  {id: 7, name: 'Teste7', price: 3000},
  {id: 8, name: 'Teste8', price: 3000},
  {id: 9, name: 'Teste9', price: 3000},
  {id: 10, name: 'Teste10', price: 3000},
  {id: 11, name: 'Teste11', price: 3000},
  {id: 12, name: 'Teste12', price: 3000},
]

/**
 * Data source for the ProductTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductTableDataSource extends DataSource<Product> {
  products!: Product[];
  
  //DATA = this.productService.read().subscribe(products => {
  //  this.products = products});
  
  data: Product[] = DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Product[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Product[]): Product[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Product[]): Product[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id!, +b.id!, isAsc);
        case 'price': return compare(+a.price!, +b.price!, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
