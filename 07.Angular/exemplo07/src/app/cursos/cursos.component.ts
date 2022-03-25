import { Component, OnInit } from '@angular/core';
import { Curso } from './cursos';
import { CursosService } from './cursos.service';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //Atributos, importando classe do cursos.ts
  public vetorCursos: Curso[] = [];
  public curso!: Curso;
  public id!: number;

  //construtor
  constructor(private servico:CursosService) { }

  //Inicialização 
  ngOnInit(){
    this.curso= new Curso();
    this.vetorCursos = this.servico.listar();
  }

}
