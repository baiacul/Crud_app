import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../models/produtos.model';

const baseUrl = 'http://127.0.0.1:8000/api/produtos';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produtos[]>{              //metodo de acesso a todos produtos da tabel
    return this.http.get<Produtos[]>(baseUrl);
  }

  get(nome_produto: string): Observable<Produtos> {   //obter produto individualmente
    return this.http.get<Produtos>(`${baseUrl}/${nome_produto}`);
  }
  
  create(data: any): Observable<any> {        //crirar produto na tabela
    return this.http.post(baseUrl, data);
  }

  update(nome_produto: string, data: any): Observable<any> {             //atualizar produto
    return this.http.put(`${baseUrl}/${nome_produto}`, data);
  }

  delete(nome_produto: string): Observable<any> {           //deletar produto
    return this.http.delete(`${baseUrl}/${nome_produto}`);
  }

}
