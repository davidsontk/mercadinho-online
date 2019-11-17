import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../shared/models/cliente';

@Injectable()
export class CadastroService {

    constructor(private httpClient: HttpClient) { }

    cadastrarUsuario(usuario: Cliente) {
        let headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        return this.httpClient.post(environment.url_api + 'users', usuario,
            { headers: headers, responseType: 'text' });
    }

}

