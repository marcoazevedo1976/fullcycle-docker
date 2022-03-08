# FullCycle - Docker
Desafios práticos do módulo Docker do Curso FullCycle

## Desafio 1
Imagem docker contendo aplicação desenvolvida em Go: **dockeriddomarco/fullcycle**
### Exemplo
~~~bash
docker run --rm dockeriddomarco/fullcycle
~~~

## Desafio 2
A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

~~~html
<h1>Full Cycle Rocks!</h1>
~~~

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.