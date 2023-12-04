// No seu componente TypeScript
import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../models/produtos.model';
import { ProdutosService } from '../../services/produtos.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'] // Correção aqui
})
export class DetailsComponent implements OnInit {

  produtos: Produtos[] = [];

  aberto = false;
  produto_selecionado: any = null;

  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.AtualizarProdutos();
  }

  AtualizarProdutos(): void {
    this.produtoService.getAll()
      .subscribe({
        next: (data) => {
          this.produtos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  extender(produto: Produtos): void {
    this.produto_selecionado = produto.nome_produto;
    this.aberto = !this.aberto;
    console.log(this.produto_selecionado);

  }
  delete(produto: Produtos): void {
    this.produto_selecionado = produto.nome_produto
    this.produtoService.delete(this.produto_selecionado)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.AtualizarProdutos();
        },
        error: (e) => console.log(e)
      })
  }
  edit(produto:Produtos):void{}
}
