import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { vendaRoutes } from './venda.routing';

import { ConfirmacaoVendaComponent } from './confirmacao-venda/confirmacao-venda.component';
import { VendaComponent } from './venda.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(vendaRoutes)
    ],
    exports: [],
    declarations: [VendaComponent , ConfirmacaoVendaComponent],
    providers: [],
})
export class VendaModule { }
