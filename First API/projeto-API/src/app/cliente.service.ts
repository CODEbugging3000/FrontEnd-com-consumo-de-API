import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './models/Cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = "http://localhost:3000/clientes";
  
  constructor(private _http: HttpClient) { }
  
  getClientes(): Observable<Cliente[]>{
    return this._http.get<Cliente[]>(this.url);
  }

  cadastrarCliente(cliente: Cliente):Observable<Cliente[]>{    
    return this._http.post<Cliente[]>(this.url, cliente);
    }
  getCliente(id:any):Observable<Cliente[]>{
    const urlListarUm = `${this.url}?id=${id}`;
    return this._http.get<Cliente[]>(urlListarUm);
    }

  atualizarCliente(id: any, cliente: Cliente):Observable<Cliente[]>{
    const urlAtualizar = `${this.url}/${id}`;
    return this._http.put<Cliente[]>(urlAtualizar, cliente);
    }
  excluirCliente(id:any):Observable<Cliente[]>{
    const urlExcluir = `${this.url}/${id}`;
    return this._http.delete<Cliente[]>(urlExcluir);
    }
      

}
