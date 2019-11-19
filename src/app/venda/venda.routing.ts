import { Routes } from '@angular/router';

import { VendaComponent } from './venda.component';
import { ConfirmacaoVendaComponent } from './confirmacao-venda/confirmacao-venda.component';

export const vendaRoutes: Routes = [
    { path: '', redirectTo: 'venda-produtos', pathMatch: 'full' },
    { path: 'venda-produtos', component: VendaComponent },
    { path: 'confirmacao-venda', component: ConfirmacaoVendaComponent }
];