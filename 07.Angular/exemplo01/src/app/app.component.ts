import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Diretiva ngIf

  exibirTexto:Boolean=true;

  acaoNgif(){
    this.exibirTexto = !this.exibirTexto;
  }



}
