import { Injectable } from '@angular/core';
import { Curso } from './cursos';

//Quais componentes terão acesso
@Injectable({
  providedIn: 'root' //acesso total do serviço
})

//classe
export class CursosService {

  //construtor
  constructor() { }

  //vetor de cursos
  private vetorCursos: Curso[] = [
    new Curso("Angular",800,"Desenvolvimento"),
    new Curso("PHP",430,"Desenvolvimento"),
    new Curso("Angular",680,"Design"),
  ];

  //cadastro de cursos
  public cadastrar(curso:Curso){
    this.vetorCursos.push(curso)
  }

  //seleção de cursos
  public listar(){
    return this.vetorCursos;
  }

  //alteração de cursos
  public alterar(id:number, curso:Curso){
    this.vetorCursos[id] = curso;
  }
  

  //esclusão de cursos
  public excluir(id:number){
    this.vetorCursos.splice(id, 1);
  }
}
