# Code Challenge: Capital Gains CLI

## Descrição

Este projeto é uma aplicação de linha de comando (CLI) que calcula impostos sobre ganhos de capital com base nas transações de compra e venda de ações.

## Decisões Técnicas e Arquiteturais

- **TypeScript**:

  - Escolhido por sua tipagem estática e segurança, facilitando a manutenção e prevenindo erros comuns que poderiam ocorrer em JavaScript puro.

- **Arquitetura**:

  - O projeto segue uma arquitetura baseada em serviços, com a classe `CapitalGainsService` responsável pelo cálculo do imposto a partir das transações fornecidas.
  - O formato de entrada é um arquivo JSON, processado para gerar os impostos devidos.

## Justificativa para o Uso de Frameworks e Bibliotecas

- **class-transformer**:

  - Utilizado para converter objetos JSON em instâncias das classes `Transaction` e `Tax`, permitindo melhor manipulação dos dados e conversão de propriedades (exemplo: `unit-cost` para `unitCost`).

- **jest**:

  - Usado para testes unitários e de integração, garantindo confiabilidade no funcionamento da solução.

## Como Compilar e Executar o Projeto

### Instalação do Node.js

Para executar este projeto, é necessário ter o Node.js instalado na sua máquina.

1. Acesse o site oficial: [https://nodejs.org/](https://nodejs.org/)
2. Instale a versão recomendada para seu sistema.
3. Verifique a instalação executando:
   ```sh
   node -v
   npm -v
   ```

### Instalação e Execução do Projeto

1. Clone o repositório e acesse a pasta do projeto:
   ```sh
   git clone https://github.com/deividsantosr/capital-gains
   cd capital-gains
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Execute a aplicação:
   ```sh
   npm start
   ```

A aplicação solicitará que você insira suas transações em formato JSON.

## Como Executar os Testes

1. Para rodar os testes unitários e de integração, utilize o comando:
   ```sh
   npm test
   ```

## Notas Adicionais

- **Formato de entrada**:
  - As transações devem ser fornecidas em JSON.
  - Cada transação deve conter `operation` ("buy" ou "sell"), `unitCost` e `quantity`.

## Exemplo de Execução

Ao rodar o script, um exemplo de entrada e saída seria:

```sh
Please enter your transactions in JSON format. Press Ctrl+D to finish.
[{"operation":"buy", "unit-cost":10.00, "quantity": 10000},{"operation":"sell", "unit-cost":20.00, "quantity": 5000}]
[ Tax { tax: 0 }, Tax { tax: 10000 } ]
```