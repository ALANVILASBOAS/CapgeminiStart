Algoritmo "Orientações a Objetos"


tipo
cadastroCliente = registro
    nome: caractere
    rg: caractere
    idade: inteiro
fimregistro

Var

cliente1: cadastroCliente//variavel com novo tipo, alem do real, inteiro, caractere...
//no escopo do cliente1, terá 3 variaveis herdadas pelo tipo: nome, rg,idade.
//cliente1 se torna uma supervariável
Inicio

escreval("Digite seu nome: ")
leia(cliente1.nome)

Escreval("Digite seu rg: ")
leia(cliente1.rg)

Escreval("Digite sua idade")
leia (cliente1.idade)


Escreval("Nome: ",cliente1.nome)
Escreval("rg: ",cliente1.rg)
Escreval("Idade: ",cliente1.idade)
Fimalgoritmo