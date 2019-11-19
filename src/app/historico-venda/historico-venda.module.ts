import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { historicoRoutes } from './historico-venda.routing';

import { HistoricoVendaComponent } from './historico-venda.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(historicoRoutes)
    ],
    exports: [],
    declarations: [HistoricoVendaComponent],
    providers: [],
})
export class HistoricoVendaModule { }
