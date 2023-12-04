import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produtos } from '../../models/produtos.model';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrl: './edit-component.component.css'
})
export class EditComponentComponent implements OnInit {
  @Input() produtoSelecionado: any;
  nomeprodutos: any ;
  @Output() home = new EventEmitter();

  ngOnInit(): void {
    if (this.produtoSelecionado) {

      this.produto = { ...this.produtoSelecionado };
      this.nomeprodutos = this.produto.nome_produto;
    }
    console.log(this.produtoSelecionado);

  }
  produto: Produtos = {
    nome_produto: '',
    categoria_id: 0,
    valor_produto: 0,
    data_vencimento: '',
    quantidade_estoque: 0,
    produto_perecivel: false,

  }
  submitted = false;
  constructor(private produtoService: ProdutosService) { }
  updateProduto(): void {
    const data = {
      nome_produto: this.produto.nome_produto,
      categoria_id: this.produto.categoria_id,
      valor_produto: this.produto.valor_produto,
      data_vencimento: this.produto.data_vencimento,
      quantidade_estoque: this.produto.quantidade_estoque,
      produto_perecivel: this.produto.produto_perecivel,
    };
    

this.produtoService.update(this.nomeprodutos, data)  
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('produto atualizado com sucesso')
          this.home.emit();
        },
        error: (e) => console.log(e)
      });

  }


}
