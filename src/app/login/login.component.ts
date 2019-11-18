import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { Cliente } from '../shared/models/cliente';

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent {
    formLogin: FormGroup;
    load: boolean = false;

    constructor(private loginService: LoginService,
        private fb: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.formLogin = this.fb.group({
            loginCpf: ['', Validators.required],
            senha: ['', Validators.required]
        });
    }


    entrar() {
        // this.load = true;
        let cliente: Cliente = new Cliente();
        cliente.cpf = this.formLogin.get('loginCpf').value;
        cliente.senha = this.formLogin.get('senha').value;

        this.loginService.logar(cliente).subscribe(
            (data: any) => {
                sessionStorage.setItem('cliente', JSON.stringify(data));
                this.router.navigateByUrl('menu/venda');
            },
            (error) => {
                console.log('Erro ao tentar logar = ', error);

            }
        );
    }

    rotaCadastroUsuario(): void {
        this.router.navigateByUrl('cadastro/cadastro-cliente');
    }

}