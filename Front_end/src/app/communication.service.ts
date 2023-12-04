import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private produtoBuscaSubject = new Subject<string>();

  produtoBusca$ = this.produtoBuscaSubject.asObservable();

  enviarProdutoBusca(termo: string) {
    this.produtoBuscaSubject.next(termo);
  }
}