import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { HttpClient} from '@angular/common/http';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL base
  url = "http://localhost/api/php/";

  //Vetor de cursos
  vetor!: Curso[];

  //Objeto da classe curso
  curso = new Curso();

  //construtor
  constructor(private curso_servico : CursoService ) { }

  //inicializador
  ngOnInit(): void {
    //ao iniciar o sistema, deverá listar os cursos
    this.selecao();

  }

  //cadastro
  cadastro(){
    this.curso_servico.cadastrarCurso(this.curso).subscribe(
      (res: Curso[]) => {

        //adicionando dados ao vetor
        this.vetor=res;

        //Limpar os atributos
        this.curso.nomeCurso = ""

        //atualizar a listagem
        this.selecao();
      }
    );
  }

  //selecao
  selecao(){
    this.curso_servico.obterCursos().subscribe(
      (res:Curso[])=>{
        this.vetor = res;
      }
    );
  }

  //alterar
  alterar(){
    this.curso_servico.atualizarCurso(this.curso).subscribe(
      (res) => {

        //atualizar vetor
        this.vetor=res;

        //limpar os valores do objeto
        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;

        //atualizar a listagem
        this.selecao();
      }
    )
  }

  //remover
  remover(){
    this.curso_servico.removerCurso(this.curso).subiscribe(
      (res : Curso[]) => {
        this.vetor = res;

        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;
      }
    )
  }

  //Selecionar curso específico
  selecionarCurso(c:Curso){
    this.curso.idCurso=c.idCurso;
    this.curso.nomeCurso=c.nomeCurso;
    this.curso.valorCurso=c.valorCurso;
  }

  

}
