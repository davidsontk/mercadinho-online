import { CadastroComponent } from './cadastro/cadastro.component';
import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

export const appRoutes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        loadChildren: './login/login.module#LoginModule'

    },
    {
        path: 'cadastro',
        component: CadastroComponent,
        loadChildren: './cadastro/cadastro.module#CadastroModule'
    },
    {
        path: 'menu',
        component: MenuComponent,
        children: [
            // {
            //     path: 'tela',
            //     loadChildren: './tela-inicial/tela-inicial.module#TelaInicialModule' 
            // },
        ]
    },
    

]
