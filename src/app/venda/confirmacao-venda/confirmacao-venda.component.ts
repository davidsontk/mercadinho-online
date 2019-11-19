import { VendaProduto } from './../../shared/models/venda';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'confirmacao-venda-app',
    templateUrl: 'confirmacao-venda.component.html'
})

export class ConfirmacaoVendaComponent implements OnInit {
    listaProdutos: VendaProduto[] = [];
    valorTotalCompra: number = 0;
    formaPagamento: boolean = true;
    constructor(private router: Router) {
        const nav = this.router.getCurrentNavigation();
        this.listaProdutos = nav.extras.state.listaProdutosSelecionados;
    }

    ngOnInit() {
        this.carregarValorTotalCompra();
        console.log(this.listaProdutos);
    }

    carregarValorTotalCompra() {
        for (let produto of this.listaProdutos) {
            this.valorTotalCompra += (produto.quantidade * produto.valor);
        }
    }
}