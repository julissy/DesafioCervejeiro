# Desafio Cervejeiro 🍺

Utilizando Node e JS

## Instalação
Instalar node e usar o npm


```bash
npm install
```

Crie um programa de registro de cervejas que você já bebeu
Uma cerveja consiste em
nome:string, tipo:string, nota:int


Ao iniciar o programa deve ser apresentado um menu com as seguintes opções. As opções seram os números das opções[1~4]

1 - Lista das cervejas
2 - Adicionar uma cerveja
3 - Ver uma cerveja
4 - Sair
Informe a opção: 


## Utilização

######1 - Lista das cervejas

Deve-se apresentar na tela uma listagem de cervejas da seguinte forma
=================
Nome: Turatti
Tipo: Stout
Nota: 6
=================

=================
Nome: Brewstone
Tipo: Lager
Nota: 8
=================

2 - Adcionar uma cerveja

Deve-se apresentar em sequencia as seguintes perguntas para adicionar a lista de cervejas
Qual o nome?: 
Qual o tipo?: 
Qual a nota?: 

Após inserido na lista deve apresentar uma mensagem
[nome] de tipo [tipo] com nota [nota] foi adicionada com sucesso!

Não se pode adicionar uma cerveja que já esteja na lista, caso a cerveja de nome e tipo já exista deve ser atualizado apenas a nota
Os três atributos são obrigatorios

3 - Ver uma cerveja
Informando o nome deve se apresentar a lista de todas as cervejas com aquele nome
Caso não encontre deve apresentar mensagem informando
Sua busca retornou nenhum resultado

