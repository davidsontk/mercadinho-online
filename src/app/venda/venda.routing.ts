import { VendaComponent } from './venda.component';
import { Routes } from '@angular/router';

export const vendaRoutes: Routes = [
    { path: '', redirectTo: 'venda-produtos', pathMatch: 'full' },
    { path: 'venda-produtos', component: VendaComponent }

];