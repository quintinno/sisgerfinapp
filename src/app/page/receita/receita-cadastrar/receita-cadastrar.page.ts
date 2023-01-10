import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita-cadastrar',
  templateUrl: './receita-cadastrar.page.html',
  styleUrls: ['./receita-cadastrar.page.scss'],
})
export class ReceitaCadastrarPage implements OnInit {

  public isRecebido: boolean = true;
  public iconeCoracao: string = "heart-outline";

  constructor() { }

  ngOnInit() { }

  public apresentarMaisDetalhes() {
    console.log("apresentarMaisDetalhes...");
  }

  public abrirCategoriaDespesa() {
    console.log("abrirCategoriaDespesa...");
  }

  public abrirContaBancaria() {
    console.log("abrirContaBancaria...");
  }

  public abrirAnexos() {
    console.log("abrirAnexos...");
  }

  public verificarValorRecebido(event: any) {
    if (this.isRecebido) {
      this.isRecebido = false;
    } else {
      this.isRecebido = true;
    }
  }

  public adicionarPessoa() {
    console.log("adicionarPessoa...");
    if (this.iconeCoracao == "heart-outline") {
      this.iconeCoracao = "heart";
    } else {
      this.iconeCoracao = "heart-outline";
    }
    debugger
  }

}
