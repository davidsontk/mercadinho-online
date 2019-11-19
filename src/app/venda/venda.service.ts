import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Venda } from '../shared/models/venda';
import { environment } from './../../environments/environment';

@Injectable()
export class VendaService {

    constructor(private httpClient: HttpClient) { }

    buscarTodosItensDeVenda() {
        let headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        return this.httpClient.get(environment.url_api + 'venda/listarProdutos', { headers: headers });
    }

    salvarVenda(venda: Venda) {
        let headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        return this.httpClient.post(environment.url_api + 'venda', venda, { headers: headers });
    }

}