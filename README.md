
# Code Challenge: Capital Gains CLI

## Descrição

Este projeto é uma aplicação de linha de comando (CLI) que calcula impostos sobre ganhos de capital com base nas transações de compra e venda de ações.

## Decisões Técnicas e Arquiteturais

- **TypeScript**:
Devido à sua tipagem, simplicidade e com o objetivo de praticar a linguagem superset do JavaScript.
O que facilita a manutenção e desenvolvimento do código ao longo do tempo, prevenindo erros comuns que poderiam ocorrer em  JavaScript puro (Vanilla JS).

- **Arquitetura**: O projeto segue uma arquitetura simples de serviços, onde a classe `CapitalGainsService` é responsável pelo cálculo do imposto com base nas transações. O formato de entrada é um JSON, que é processado para gerar os impostos devidos.

## Justificativa para o Uso de Frameworks e Bibliotecas


  
- **class-transformer**:
A biblioteca `class-transformer` foi utilizada para transformar o JSON em instâncias das classes `Transaction` (de `unit-cost` em snake-case para `unitCost` em lowerCamelCase) e `Tax`, facilitando a manipulação dos dados dentro do código.

- **jest**:
Para garantir que a solução estivesse funcionando conforme esperado, foram escritos testes unitários e de integração usando o Jest. O Jest oferece uma configuração simples e poderosa para escrever e executar testes.

## Como Compilar e Executar o Projeto

## Instalação do Node.js

Para executar este projeto, você precisa ter o Node.js instalado na sua máquina. Siga as instruções abaixo para instalar:

### **Windows, macOS e Linux**
1. Acesse o site oficial do Node.js: [https://nodejs.org/](https://nodejs.org/)
2. Você pode verificar se o Node.js e o npm estão instalados executando os seguintes comandos no terminal:
   ```sh
   node -v
   npm -v
   ```
1. Acesse a pasta do projeto:
   ```sh
   cd capital-gains
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute a aplicação:
   ```bash
   npm start
   ```

   O programa pedirá que você insira suas transações em formato JSON.

## Como Executar os Testes

1. Para rodar os testes unitários e de integração, use o comando:
   ```bash
   npm test
   ```

## Notas Adicionais

- **Formato de entrada**: As transações devem ser fornecidas no formato JSON. Cada transação deve conter as propriedades `operation` (sendo a operação "buy" ou "sell"), `unitCost` e `quantity`.

## Exemplo de Execução

Quando você rodar o script, verá algo assim:

```sh
Please enter your transactions in JSON format. Press Ctrl+D to finish.
[{"operation":"buy", "unit-cost":10.00, "quantity": 10000},{"operation":"sell", "unit-cost":20.00, "quantity": 5000}]
[ Tax { tax: 0 }, Tax { tax: 10000 } ]
```