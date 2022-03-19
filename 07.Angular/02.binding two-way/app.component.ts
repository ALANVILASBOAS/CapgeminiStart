import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //variável
  nome: string = "Ralf";
  image:string = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=640:*";

  //função de clique
  mensagem(){
alert("OláMundo");

  }

  //Objeto
  pessoa:any={
    nome:"Ralf",
    idade:29,
    cidade:"Blumenau"
  }
}


