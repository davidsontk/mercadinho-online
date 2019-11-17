import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../shared/models/cliente';

@Component({
    selector: 'menu-app',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
    clienteLogado: Cliente = new Cliente();
    logado: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() {
        this.clienteLogado = JSON.parse(sessionStorage.getItem('cliente'));
    }

    rotaListaUsuarios(): void {
        this.router.navigateByUrl('admin');
    }

    rotaCadastroUsuario(): void {
        this.router.navigateByUrl('/admin/cadastrar-usuario');
    }

    rotaAnuncio(): void {
        this.router.navigateByUrl('/anuncio');
    }

    rotaMenuInicial(): void{
        this.router.navigateByUrl('/menu/venda');
    }

    sair(): void {
        sessionStorage.clear();
        this.router.navigateByUrl('/login');
    }
}