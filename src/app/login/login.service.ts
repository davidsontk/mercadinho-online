import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Cliente } from '../shared/models/cliente';

@Injectable()
export class LoginService {

    constructor(private httpClient: HttpClient) { }

    /**
     * @method logar
     * @description Metodo que envia ao back end os dados para logar
     * @returns TODO - verificar
     */
    logar(usuario: Cliente) {
        let headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        
        return this.httpClient.post(environment.url_api + 'users/login', usuario);
    }


}