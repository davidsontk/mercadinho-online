import { NgModule } from '@angular/core';

import { VendaComponent } from './venda.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { vendaRoutes } from './venda.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(vendaRoutes)
    ],
    exports: [],
    declarations: [VendaComponent],
    providers: [],
})
export class VendaModule { }
