import { CommonModule }           from '@angular/common';
import { NgModule }               from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule
}                                 from '@angular/material';
import { NgxuxMatTableComponent } from './ngxux-mat-table.component';

@NgModule({

    declarations: [

        NgxuxMatTableComponent

    ],

    imports: [

        CommonModule,

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,

        ReactiveFormsModule,

    ],

    exports: [

        NgxuxMatTableComponent

    ]

})
export class NgxuxMatTableModule {
}
