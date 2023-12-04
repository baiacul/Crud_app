import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../models/produtos.model';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrl: './add-component.component.css'
})
export class AddComponentComponent implements OnInit {

  ngOnInit(): void { }

  produto: Produtos ={
    nome_produto: '',
    categoria_id: 0,
    valor_produto: 0,
    data_vencimento: '',
    quantidade_estoque: 0,
    produto_perecivel: false,

  }
  submitted = false;
  constructor(private produtoService: ProdutosService){}
  saveproduto(){
    const data = {
      nome_produto: this.produto.nome_produto,
      categoria_id: this.produto.categoria_id,
      valor_produto: this.produto.valor_produto,
      data_vencimento: this.produto.data_vencimento,
      quantidade_estoque: this.produto.quantidade_estoque,
      produto_perecivel: this.produto.produto_perecivel,
    };

  
    this.produtoService.create(data)
    .subscribe({
    next: (res) => {
      console.log(res);
      this.submitted = true;
    },
    error: (e) => console.log(e)
    });

  }

  novoProduto(): void {
    this.submitted = false;
    this.produto = {
      nome_produto: '',
      categoria_id: 0,
      valor_produto: 0,
      data_vencimento: '',
      quantidade_estoque: 0,
      produto_perecivel: false,
    };
  }

  
}

