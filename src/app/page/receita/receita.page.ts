import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {

  constructor() { }

  ngOnInit() { }

  public mesAnterior() {
    console.log("mesAnterior...");
  }

  public mesPosterior() {
    console.log("mesPosterior...");
  }

}
