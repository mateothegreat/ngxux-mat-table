import { CommonModule }                                                                       from '@angular/common';
import { NgModule }                                                                           from '@angular/core';
import { ReactiveFormsModule }                                                                from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule } from '@angular/material';
import { NgxuxMatTableComponent }                                                             from './ngxux-mat-table.component';

@NgModule({

    declarations: [

        NgxuxMatTableComponent

    ],

    imports: [

        CommonModule,

        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,

        ReactiveFormsModule,

    ],

    exports: [

        NgxuxMatTableComponent

    ]

})
export class NgxuxMatTableModule {
}
