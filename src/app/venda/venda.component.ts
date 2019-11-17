import { VendaService } from './venda.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'venda-app',
    templateUrl: 'venda.component.html'
})

export class VendaComponent implements OnInit {

    constructor(private vendaService: VendaService) { }

    ngOnInit() { }
}