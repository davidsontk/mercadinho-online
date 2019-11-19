import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { VendaService } from './../venda.service';
import { VendaProduto } from '../../shared/models/vendaProduto';
import { Venda } from 'src/app/shared/models/venda';
import { Cliente } from './../../shared/models/cliente';

@Component({
    selector: 'confirmacao-venda-app',
    templateUrl: 'confirmacao-venda.component.html'
})

export class ConfirmacaoVendaComponent implements OnInit {
    listaProdutos: VendaProduto[] = [];
    valorTotalCompra: number = 0;
    formaPagamento: string = '';
    cliente: Cliente = new Cliente();

    constructor(private router: Router, private vendaService: VendaService) {
    }

    ngOnInit() {
        this.listaProdutos = JSON.parse(sessionStorage.getItem('listaProdutosSelecionados'));
        this.cliente = JSON.parse(sessionStorage.getItem('cliente'));
        this.carregarValorTotalCompra();
    }

    carregarValorTotalCompra() {
        for (let produto of this.listaProdutos) {
            this.valorTotalCompra += (produto.quantidade * produto.valor);
        }
    }

    finalizarCompra() {
        if (this.formaPagamento != '') {
            let confirmacao = confirm('Deseja finalizar a compra?');
            if (confirmacao) {
                //mandar endpoint post salvarVenda
                let venda = new Venda();
                venda.formaPagamento = this.formaPagamento;
                venda.codigoCliente = this.cliente.codigo;
                venda.valorTotalVenda = this.valorTotalCompra;
                venda.listVendaProduto = this.listaProdutos;
                this.vendaService.salvarVenda(venda).subscribe(
                    () => {
                        alert('Compra realizada! Compra será entregue no endereço cadastrado!');
                        this.rotaMenuInicial();
                        sessionStorage.removeItem('listaProdutosSelecionados');
                    },
                    (error: any) => {
                        console.log('Erro ao salvar venda ' ,error);
                    }
                );
            }
        } else {
            alert('Selecione o tipo do pagamento.');
        }
    }

    mudaFormaPagamento(forma) {
        this.formaPagamento = forma;
    }

    rotaListaProdutos() {
        sessionStorage.removeItem('listaProdutosSelecionados');
        this.router.navigateByUrl('/menu/venda/venda-produtos');
    }

    rotaMenuInicial(): void{
        this.router.navigateByUrl('/menu/venda/venda-produtos');
    }
}