import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup }                         from '@angular/forms';
import { TableColumn }                                    from './table-column';

@Component({

    selector: 'ngxux-mat-table',

    template: `
        
        <div class="wrapper ">

            <div *ngIf="headerShow"
                 class="top">

                <div *ngIf="title"
                     class="header">{{ title }}</div>

                <div class="buttons">

                    <form *ngIf="searchShow"
                          [formGroup]="formGroup">

                        <mat-form-field class="example-form-field">

                            <input matInput
                                   formControlName="searchText">

                            <button mat-button
                                    matSuffix
                                    mat-icon-button
                                    (click)="onSearchClick()">

                                <mat-icon>search</mat-icon>

                            </button>

                        </mat-form-field>

                    </form>

                    <mat-icon *ngIf="addShow"
                              [class.disabled]="!addEnabled"
                              matTooltip="Add a new item..">

                        add

                    </mat-icon>

                    <mat-icon *ngIf="removeShow"
                              [class.disabled]="!removeEnabled"
                              matTooltip="Select an item to remove..">

                        delete

                    </mat-icon>

                </div>

            </div>

            <div class="table content-inset">

                <table mat-table [dataSource]="data">

                    <ng-container *ngFor="let column of columns"
                                  [matColumnDef]="column.key">

                        <th mat-header-cell
                            *matHeaderCellDef>{{ column.label }}</th>

                        <td mat-cell
                            *matCellDef="let row">{{ row[ column.key ] }}</td>

                    </ng-container>

                    <tr mat-header-row *matHeaderRowDef="columnKeys; sticky: headerSticky"></tr>

                    <tr mat-row
                        (click)="onRowClicked(row)"
                        *matRowDef="let row; columns: columnKeys;"></tr>

                </table>

            </div>

        </div>

    `,

    styleUrls: [ './ngxux-mat-table.component.scss' ]

})
export class NgxuxMatTableComponent implements OnInit {

    public formGroup = new FormGroup({

        searchText: new FormControl('')

    });

    @Input() public title: string;
    @Input() public columns: Array<TableColumn>;
    @Input() public data: any[];

    @Input() public headerShow: boolean;
    @Input() public headerSticky: boolean;

    @Input() public addShow: boolean;
    @Input() public addEnabled: boolean;

    @Input() public removeShow: boolean;
    @Input() public removeEnabled: boolean;

    @Input() public searchShow: boolean;

    @Output() public rowClick = new EventEmitter();

    public columnKeys: string[];

    public ngOnInit(): void {

        this.columnKeys = this.columns.map((v) => v.key);

    }

    public onRowClicked(row: any): void {

        this.rowClick.emit(row);

    }

    public onSearchClick(): void {


    }

}
