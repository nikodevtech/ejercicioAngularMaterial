import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ListaArticulosItem {
  name: string;
  id: number;
  stock: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ListaArticulosItem[] = [
  { id: 1, name: 'Camiseta Casual', stock: 50 },
  { id: 2, name: 'Zapatillas Deportivas', stock: 30 },
  { id: 3, name: 'Reloj Inteligente', stock: 20 },
  { id: 4, name: 'Auriculares Bluetooth', stock: 40 },
  { id: 5, name: 'Mochila Resistente al Agua', stock: 25 },
  { id: 6, name: 'Tablet Android', stock: 15 },
  { id: 7, name: 'Botella de Agua Reutilizable', stock: 60 },
  { id: 8, name: 'Portátil Ultraligero', stock: 10 },
  { id: 9, name: 'Cámara de Acción 4K', stock: 18 },
  { id: 10, name: 'Teclado Mecánico para Gaming', stock: 35 },
  { id: 11, name: 'Gafas de Sol Polarizadas', stock: 45 },
  { id: 12, name: 'Libro Electrónico', stock: 22 },
  { id: 13, name: 'Máquina de Café Automática', stock: 12 },
  { id: 14, name: 'Silla Ergonómica para Oficina', stock: 8 },
  { id: 15, name: 'Planta de Interior Decorativa', stock: 30 },
  { id: 16, name: 'Linterna Recargable', stock: 50 },
  { id: 17, name: 'Juego de Herramientas para Hogar', stock: 28 },
  { id: 18, name: 'Puzzle de 1000 Piezas', stock: 0 },
  { id: 19, name: 'Pelota de Yoga', stock: 15 },
  { id: 20, name: 'Set de Utensilios de Cocina de Acero Inoxidable', stock: 0 },
];

/**
 * Data source for the ListaArticulos view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListaArticulosDataSource extends DataSource<ListaArticulosItem> {
  data: ListaArticulosItem[] = EXAMPLE_DATA;
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
  connect(): Observable<ListaArticulosItem[]> {
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
  private getPagedData(data: ListaArticulosItem[]): ListaArticulosItem[] {
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
  private getSortedData(data: ListaArticulosItem[]): ListaArticulosItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
