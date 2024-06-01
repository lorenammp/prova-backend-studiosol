## Sobre a aplicação

Esta aplicação foi desenvolvida como parte do teste prático para o processo seletivo para Pessoa Desenvolvedora Backend - CLT e Estágio da Studio Sol. O objetivo era desenvolver uma API em REST capaz de calcular o número total de combinações possíveis, dado um determinado placar de um jogo de futebol americano.

## Instalação e uso

É possível inicializar a aplicação através da instalação manual das dependências, ou através de um container docker. Para instalar manual, utilie o seguinte comando:

```
yarn install
```

Em seguida, utilize o comando abaixo para executar a aplicação:

```
yarn dev
```

### Utilizando o docker

A aplicação pode ser utilizada através do Docker, utilizando o seguinte comando:

```
docker-compose up
```

Após o envio do comando acima, aplicação agora estará em execução e pode ser acessada em:

```
http://localhost:8080
```

Para esta aplicação, apenas o endpoint /verify está disponível, utilizando o método POST.

## Executando testes

Atualmente, a aplicação possui um teste unitário em Jest, na rota /verify. Para executar o teste, utilize o comando abaixo:

```
yarn test
```

Os testes podem ser encontrados na pasta `test`, no arquivo user.spec.js.
