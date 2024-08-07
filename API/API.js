/* 

O que é uma API ?

* API é um acrônico para interface de programação de aplicções (application programming interface);
* uma forma simples de comunicação entre aplicações;
* não necessita de telas, repostas geralmente são em JSON;
* independente do front-end, a API não possui ligação com o front;
* baseadas em requisição e resposta; e
* podemos criar uma API com Express.

O que é REST e RESTful ?

* Rest significa Representational State Transfer ou trânsferência representacional de estado;
* Um estil de arquitetura, que define como as APIs devem ser criadas;
* Seguindo todos os padrões a API é considerada RESTful; e
* Alguns dos pontos são: respostas uniformes, sem ligação de estado, cache de resposta e outros.

OBS: para achar esses principios basta escrever no google rest principles, IBM é confiável.

O que é uma SPA?

* SPA significa Single Page Application;
* é quando a aplicação possui um front-end separado do back-end;
* ou seja, uma API para o back-end;
* e um framework front-end js, como: React, Vue ou Angular;
* aplicações deste tipo estão dominando o mercado;

Verbos HTTP

* Os verbos HTTP andam de mãos dadas com as APIs, e fazem parte do REST;
* Temos métodos como:

- GET: recupera dados de um servidor. Não altera o estado do recurso. Uso ler informações de uma API ou site.
- POST: envia dados ao servidor para criar um novo recurso. Uso enviar informações de um formulário, para criar um novo registro.
- PUT: atualiza um recurso existente ou cria um novo recurso se ele não existir. Uso atualizar informações completas de recurso.
- DELETE: remove um recurso específico do servidor.
- PATCH: atualiza parcialmente um recurso existente. 

* Cada um representa uma ação na API, ou seja, são essenciais; 
* é muito importante que nossas funcionalidades usem os métodos corretos; e
* enviamos o método através da requisição.  

OBS: Os métodos HTTP (Hypertext Transfer Protocol) são um conjunto de métodos de requisição que indicam a ação que deve ser realizada para um recurso específico em uma rede.

CRIANDO UMA API COM EXPRESS

* para criar a API teremos uma tarefa bem simples, comparada a estrutura com handlebars;
* basta instalar o express, ele fará tudo sozinho neste ponto;
* depois criaremos uma rota que responde em Json, este é o dado de comunicação entre aplicação e API;
* é importante definir o verbo correto, como GET ou POST.

*/

