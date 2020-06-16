# Teste LinkApi

## :rocket: Requisitos do teste

- Criar contas testes nas plataformas Pipedrive e Bling.

- Criar uma integração entre as plataformas Pipedrive e Bling. (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

- Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça

- Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

- Criar endpoint para trazer os dados consolidados da collection do MongoDB.

## :rocket: Aplicação rodando

![gif-linkapi](https://user-images.githubusercontent.com/39420270/84709039-f4012800-af37-11ea-935a-f7505d30cf18.gif)

## :scroll: Documentação

### Tecnologias utilizadas

- [nodejs](https://nodejs.org/en/)
- [express](https://expressjs.com/pt-br/)
- [mongoose](https://mongoosejs.com/)
- [axios](https://www.npmjs.com/package/axios)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [dotenv](https://www.npmjs.com/package/dotenv)

### Estrutura de pastas

```
src                      # Onde fica todo código da aplicação
├── config               # Configurações do banco e serviços externos
├── controllers          # Onde fica o único controller da aplicação
├── models               # Onde ficam os models do mongoose
├── providers            # Arquivos que se conectam com serviços externos
├── repositories         # Camada de abstração da persistência no banco
├── services             # Funções importantes compartilhadas com toda api
├─ app.js                # Classe inicial da aplicação
├─ routes.js             # Arquivo com as rotas
├─ server.js             # Arquivo que inicia o servidor da aplicação
```

### Instruções para rodar a API

```
# Clonando o repositório
$ git clone https://github.com/gdlopes/linkapi-challenge.git

# Navegando para a pasta do projeto
$ cd linkapi-challenge

# Instalando as dependências
$ yarn

# Rodando a aplicação
$ yarn start
```

### Sobre as rotas criadas

POST http://localhost:3000/orders - rota que vai buscar oportunidades (leads) com status "won" no PipeDrive e cria os pedidos no Bling.

GET http://localhost:3000/orders - rota que busca os pedidos que estão registrados no banco e foram criados com sucesso no bling.

### Rodando API localmente

Primeiro é necessário criar um arquivo na raiz do projeto com o nome `.env` e deixá-lo neste [formato](https://github.com/gdlopes/linkapi-challenge/blob/master/.env.example). Em seguida preencha com as informações com as contas do PipeDrive e Bling que dejesa utilizar.

Por fim, utilize as rotas citadas acima com seus devidos métodos HTTP para ver tudo fundionando, pode utilizar o [postman](https://www.postman.com/) ou qualquer aplicativo equivalente.

Caso tenha o [Insomnia](https://insomnia.rest/) instalado, pode importar o projeto através deste botão que deixei pronto com as rotas da aplicação :point_down:

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=LinkApi&uri=https%3A%2F%2Fgithub.com%2Fgdlopes%2Flinkapi-challenge%2Fblob%2Fmaster%2FInsomnia_2020-06-15.json)

### Thats it ! :coffee:

---

by Gustavo Lopes :tada:
