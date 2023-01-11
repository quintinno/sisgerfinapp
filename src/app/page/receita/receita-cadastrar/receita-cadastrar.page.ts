import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarioModalPage } from './../../../modal/calendario-modal/calendario-modal.page';

@Component({
  selector: 'app-receita-cadastrar',
  templateUrl: './receita-cadastrar.page.html',
  styleUrls: ['./receita-cadastrar.page.scss'],
})
export class ReceitaCadastrarPage implements OnInit {

  public isRecebido: boolean = false;
  public iconeCoracao: string = "heart-outline";
  public isApresentarMaisDetalhes: boolean = false;

  constructor (
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  public apresentarMaisDetalhes() {
    if (this.isApresentarMaisDetalhes) {
      this.isApresentarMaisDetalhes = false;
    } else {
      this.isApresentarMaisDetalhes = true;
    }
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
    if (this.iconeCoracao == "heart-outline") {
      this.iconeCoracao = "heart";
    } else {
      this.iconeCoracao = "heart-outline";
    }
  }

  public async redirecionarModalCalendario() {
      const modal = await this.modalController.create({
        component: CalendarioModalPage,
        initialBreakpoint: 0.5
      });
      modal.present();
  }

  public async redirecionarModalCategoria() { }

  public async redirecionarModalInstituicaoFinanceira() { }

}
