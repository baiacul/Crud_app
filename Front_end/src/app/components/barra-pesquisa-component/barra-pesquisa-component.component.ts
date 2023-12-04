import { Component,OnInit, EventEmitter, Output,  } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Produtos } from '../../models/produtos.model';
import { CommunicationService } from '../../communication.service';


@Component({
  selector: 'app-barra-pesquisa-component',
  templateUrl: './barra-pesquisa-component.component.html',
  styleUrl: './barra-pesquisa-component.component.css'
})
export class BarraPesquisaComponentComponent {

  nomeProduto: string = "";
  @Output() ativar_home = new EventEmitter();
  @Output() produtobusca = new EventEmitter<string>();

  constructor(private communicationService: CommunicationService) {}

  home(): void {
    this.communicationService.enviarProdutoBusca('');
    this.ativar_home.emit()
  }

  buscar(): void {
    this.communicationService.enviarProdutoBusca(this.nomeProduto);
  }
}