# ServeRest Tests

Projeto de testes automatizados para o [ServeRest](https://serverest.dev), uma API REST pública usada para estudo e treino de testes. Inclui suítes separadas para a API e para o front em https://front.serverest.dev.

## Pré requisitos

Node 20 ou superior e npm.

## Instalação

Clone o repositório e instale as dependências:

    git clone https://github.com/rafaelmacedos/serverest.git
    cd serverest
    npm install

## Configuração

Copie o arquivo de exemplo e ajuste os valores conforme necessário:

    cp cypress.env.example.json cypress.env.json

Variáveis disponíveis:

* apiUrl, URL base da API
* web_app_url, URL do front
* userEmail, email de login padrão
* userPassword, senha de login padrão

## Como rodar

Modo interativo (abre o Cypress):

* npm run cy:open:api, abre a suíte de API
* npm run cy:open:web, abre a suíte de Web

Modo headless (executa no terminal):

* npm run cy:run:api, executa todos os testes de API
* npm run cy:run:web, executa todos os testes de Web
* npm test, executa as duas suítes em sequência

## Estrutura

    cypress/
      e2e/
        api/        testes de API (produtos, usuários)
        web/        testes de Web (home, login, cadastro)
      support/
        commands/   comandos customizados (apiLogin, etc)
        factories/  geradores de payload usando faker
        pages/      page objects da suíte web

## Relatório Allure

O projeto está integrado com Allure. Para gerar e visualizar o report localmente:

* npm run test:ci, roda as duas suítes capturando dados pro Allure
* npm run allure:generate, gera o HTML estático em allure-report/
* npm run allure:open, abre o report no navegador (precisa de Java instalado)

## CI

A pipeline em .github/workflows/tests.yml dispara em push na main, em pull requests e por execução manual. Ela roda as duas suítes, gera o relatório Allure e disponibiliza como artifact do run.

Em runs na main (ou via dispatch manual), o report também é publicado no GitHub Pages, acessível em https://rafaelmacedos.github.io/serverest/.

Setup inicial necessário no repositório: Settings, Pages, Source: GitHub Actions.

## Lint

O projeto usa ESLint flat config. Para verificar:

* npm run lint, mostra os problemas
* npm run lint:fix, aplica as correções automáticas

No VSCode, com a extensão ESLint instalada, o autofix roda ao salvar (já configurado em .vscode/settings.json).
