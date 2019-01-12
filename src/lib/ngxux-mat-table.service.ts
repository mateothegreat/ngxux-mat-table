import { Injectable }                  from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class NgxuxMatTableService<T> {

    public dataSource: MatTableDataSource<T>;
    public sort: MatSort;

    public constructor() {

    }

    public setData(data: Array<T>): void {

        this.dataSource = new MatTableDataSource(data);

        this.dataSource.sort = this.sort;

    }

}
