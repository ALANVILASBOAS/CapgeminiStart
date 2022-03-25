//Classe
export class Curso{

    //Atributos
    public nomeCurso:string;
    public valorCurso:number;
    public areaCurso:string;

    //constructor
    constructor(nome:string, valor:number, area:string){
        this.nomeCurso = nome;
        this.valorCurso = valor;
        this.areaCurso = area;
    }
}