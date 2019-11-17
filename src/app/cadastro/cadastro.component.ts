import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CadastroService } from './cadastro.service';
import { Cliente } from '../shared/models/cliente';

@Component({
    selector: 'cadastro-app',
    templateUrl: 'cadastro.component.html'
})

export class CadastroComponent implements OnInit {
    formCadastro: FormGroup;

    constructor(private router: Router,
        private fb: FormBuilder,
        private cadastroService: CadastroService
    ) { }

    ngOnInit() {
        this.formCadastro = this.fb.group({
            nome: ['', Validators.required],
            cpf: ['', Validators.required],
            senha: ['', Validators.required],
            endereco: ['', Validators.required]
        });
    }


    cadastrar() {
        let cliente = new Cliente();
        cliente.nome = this.formCadastro.get('nome').value;
        cliente.senha = this.formCadastro.get('senha').value;
        cliente.cpf = this.formCadastro.get('cpf').value;
        cliente.endereco = this.formCadastro.get('endereco').value;

        this.cadastroService.cadastrarUsuario(cliente).subscribe(
            (data: any) => {
                console.log('deu certo', data);
                this.router.navigateByUrl('/login');
            },
            (error: any) => {
                console.log('Erro ao cadastrar cliente ', error);

            }
        );
    }
}


