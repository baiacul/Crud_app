import { Component } from '@angular/core';
import { Produtos } from './models/produtos.model';
import { DetailsComponent } from './components/details/details.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Front_end';
 
  appList:boolean = true;
  appAdd:boolean = false;
  appEdit:boolean=false;
  appOne:boolean=false;
  addButton:boolean = true;

  produtoSelecionado:any;
  produtoUnico:Produtos= new Produtos;
  produtobusca:string =""
  produto_busca(nome_produto: string):void{
    this.produtobusca = nome_produto;
  }

editar(produto_emitido: any){
this.produtoSelecionado = produto_emitido;
this.appList = false;
this.appEdit= true;
}
ativar_home(){
  this.appList = true;
  this.appEdit= false;
  this.appAdd= false;
}
produto_unico(produto_emitido: any){
  this.appList = false;
  this.appEdit= false;
  this.appAdd= false
  this.appOne=true
}
adicionar(){
  this.appList = false;
  this.appEdit= false;
  this.appAdd= true;
  this.addButton = false;
  
}
}
