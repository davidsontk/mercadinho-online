import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HistoricoVendaService {

    constructor(private httpClient: HttpClient) { }

    buscarHistoricoVenda(codigoCliente: number) {
        let headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        return this.httpClient.get(environment.url_api + 'venda/historicoVendas/' + codigoCliente, { headers: headers });
    }

}
