import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VendaService {

    constructor(private httpClient: HttpClient) { }

    buscarTodosItensDeVenda(){
        let headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        return this.httpClient.get(environment.url_api + 'venda/listarProdutos', {headers: headers});
    }


}