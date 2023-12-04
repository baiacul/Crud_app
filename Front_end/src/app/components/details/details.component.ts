import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectorRef } from '@angular/core';
import { Produtos } from '../../models/produtos.model';
import { ProdutosService } from '../../services/produtos.service';
import { Observable } from 'rxjs';
import { CommunicationService } from '../../communication.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() produtobusca: string | undefined;

  produtos: Produtos[] = [];
  atualizacao: boolean = false; // Variável de controle

  aberto = false;
  produto_selecionado: any = null;

  constructor(
    private produtoService: ProdutosService,
    private communicationService: CommunicationService
  ) {}

  ngOnInit(): void {
    this.AtualizarProdutos();
    this.communicationService.produtoBusca$.subscribe((termo) => {
      if (termo) {
        this.BuscarProduto(termo);
      } else {
        this.AtualizarProdutos();
      }
    });
  }

  AtualizarProdutos(): void {
    this.produtoService.getAll().subscribe({
      next: (data) => {
        this.produtos = data;
      },
      error: (e) => console.error(e),
    });
  }

  BuscarProduto(termo: string): void {
    this.produtoService.get(termo).subscribe({
      next: (data) => {
        this.produtos = [data];
      },
      error: (e) => console.error(e),
    });
  }

  extender(produto: Produtos): void {
    this.produto_selecionado = produto.nome_produto;
    this.aberto = !this.aberto;
    console.log(this.produto_selecionado);
  }

  delete(produto: Produtos): void {
    this.produto_selecionado = produto.nome_produto;
    this.produtoService.delete(this.produto_selecionado).subscribe({
      next: (res) => {
        console.log(res);
        this.AtualizarProdutos();
      },
      error: (e) => console.log(e),
    });
  }

  edit(produto: Produtos): void {
    const data = {
      nome_produto: produto.nome_produto,
      categoria_id: produto.categoria_id,
      valor_produto: produto.valor_produto,
      data_vencimento: produto.data_vencimento,
      quantidade_estoque: produto.quantidade_estoque,
      produto_perecivel: produto.produto_perecivel,
    };
    this.ativarEdit.emit(data);
    
  }
  @Output() ativarEdit = new EventEmitter<Produtos>();
}

  
