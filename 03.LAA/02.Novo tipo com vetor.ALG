Algoritmo "Novo tipo com vetor"


tipo
cadastroCliente = registro   //cria um tipo com 3 variáveis
    nome: caractere
    rg: caractere
    idade: inteiro
fimregistro

Var

clientes: vetor[1..3] de cadastroCliente //cria um vetor do tipo cadastroCliente herdando as variáveis
opcao: caractere
i: inteiro
rgPesquisa: caractere

Inicio


repita
   Escreval("1 - Cadastrar")
   Escreval("2 - Pesquisar")
   leia(opcao)
   
   se opcao = "1" entao
      para i de 1 ate 3 faca
           se clientes[i].nome= "" entao
           Escreval("Nome: ")
           leia(clientes[i].nome)
           Escreva("Rg: ")
           leia(clientes[i].rg)
           Escreva("Idade: ")
           leia(clientes[i].idade)
           interrompa
           fimse
       fimpara
   senao
      se opcao = "2" entao
         Escreval("Digite o RG: ")
         leia(rgPesquisa)
         para i de 1 ate 3 faca
              se clientes[i].rg = rgPesquisa entao
              Escreval(clientes[i].nome, "encontrado!")
              interrompa
              fimse
         fimpara
   fimse

Fimalgoritmo