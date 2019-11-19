import { HistoricoVendaService } from './historico-venda.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/models/cliente';

@Component({
    selector: 'historico-venda-app',
    templateUrl: 'historico-venda.component.html'
})

export class HistoricoVendaComponent implements OnInit {
    listaHistorico = [];
    cliente: Cliente = new Cliente();
    constructor(private historicoVendaService: HistoricoVendaService) { }

    ngOnInit() {
        this.cliente = JSON.parse(sessionStorage.getItem('cliente'));
        this.buscarHistorico();
    }


    buscarHistorico() {
        this.historicoVendaService.buscarHistoricoVenda(this.cliente.codigo).subscribe(
            (data: any) => {
                this.listaHistorico = data;
            },
            (error: any) => {
                console.log('erro ao buscar historico por usuario ', error)
            }
        );
    }
}