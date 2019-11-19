import { VendaService } from './venda.service';
import { Component, OnInit } from '@angular/core';
import { VendaProduto } from '../shared/models/venda';
import { Router } from '@angular/router';

@Component({
    selector: 'venda-app',
    templateUrl: 'venda.component.html'
})

export class VendaComponent implements OnInit {

    //quantidade de itens
    quantidadeItens = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];

    valorTotalCompra: number = 0;
    listaProdutosDisponiveis = [];
    listaProdutosSelecionados: VendaProduto[] = [];
    constructor(private vendaService: VendaService, private router: Router) { }

    ngOnInit() {
        this.buscarItensDeVenda();
    }

    mudarQuantidadeItens(quantidade, produto) {
        if (quantidade.target.value > produto.estoqueProduto.estoque) {
            alert('Quantidade do produto ' + produto.produto.descricao + ', não está disponível !');
        } else {
            let teveAlteracao: boolean = true; // verificar se mudou a lista de produtos selecionados
            console.log(produto);
            let produtoVenda: VendaProduto = new VendaProduto();
            produtoVenda.codigo = produto.produto.codigo;
            produtoVenda.codigoEstoque = produto.estoqueProduto.codigo;
            produtoVenda.descricaoProduto = produto.produto.descricao;
            produtoVenda.quantidade = quantidade.target.value;
            produtoVenda.valor = produto.produto.valorUnitario;

            for (let i = 0; i < this.listaProdutosSelecionados.length; i++) {
                if (this.listaProdutosSelecionados[i].codigo == produtoVenda.codigo) {
                    if (produtoVenda.quantidade == 0) {
                        this.listaProdutosSelecionados.splice(i, 1);

                        break;
                    } else if (this.listaProdutosSelecionados[i].quantidade != produtoVenda.quantidade) {
                        this.listaProdutosSelecionados[i].quantidade = produtoVenda.quantidade;
                        teveAlteracao = false;

                        break;
                    }
                }
            }

            if (teveAlteracao) {
                this.listaProdutosSelecionados.push(produtoVenda);
            }
            this.calcularValorTotal();
        };
    }

    buscarItensDeVenda() {
        this.vendaService.buscarTodosItensDeVenda().subscribe(
            (data: any) => {
                console.log('itens ', data);
                this.listaProdutosDisponiveis = data;
            },
            (erro: any) => {
                console.log('erro ao buscar itens ', erro);
            }
        );
    }

    calcularValorTotal() {
        this.valorTotalCompra = 0;
        for (let produto of this.listaProdutosSelecionados) {
            this.valorTotalCompra += (produto.quantidade * produto.valor);
        }
    }

    limparListaCompra() {
        this.valorTotalCompra = 0;
        this.listaProdutosSelecionados = [];
    }

    finalizarCompra() {
        if (this.listaProdutosSelecionados.length > 0) {
            this.router.navigateByUrl('menu/venda/confirmacao-venda', {
                state:
                    { listaProdutosSelecionados: this.listaProdutosSelecionados }
            });
        } else {
            alert('Carinho vazio');
        }
    }


}