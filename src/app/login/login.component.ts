import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { Usuario } from '../shared/models/usuario';

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
            loginCpf: ['',Validators.required],
            senha: ['', Validators.required]
        });
    }


    entrar() {
        // this.load = true;
        let usuario: Usuario = new Usuario();
        usuario.loginCpf = this.formLogin.get('loginCpf').value;
        usuario.password = this.formLogin.get('senha').value;
        console.log('logincpf ', usuario.loginCpf);
        console.log('senha ', usuario.password);
        this.loginService.logar(usuario).subscribe(
            (data: any) => {
                console.log('DADO QUE CHEGOU ', data);
                sessionStorage.setItem('user', JSON.stringify(data.usuario));
                console.log('passei por aqui');
                this.router.navigateByUrl('tela');
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