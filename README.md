
# Capital Gains CLI App

Este projeto é uma aplicação simples de **linha de comando (CLI)** criada com **TypeScript**.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (Recomendado versão 14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

Você pode verificar se o Node.js e o npm estão instalados executando os seguintes comandos no terminal:

```sh
node -v
npm -v
```

## Como Rodar o Projeto

### 1. Clonar o Repositório

Primeiro, clone o repositório para o seu computador:

```sh
git https://github.com/deividsantosr/capital-gains.git
cd capital-gains
```

### 2. Instalar Dependências

Instale as dependências necessárias para o projeto utilizando o npm:

```sh
npm install
```

### 3. Rodar a Aplicação

#### Opção 1: Rodar com `npx ts-node` (sem compilar)

Para rodar o código TypeScript diretamente sem precisar compilar para JavaScript, use o seguinte comando:

```sh
npx ts-node cli.ts
```

#### Opção 2: Compilar o TypeScript para JavaScript e Rodar com Node.js

Se preferir compilar o código TypeScript para JavaScript antes de rodar, execute os comandos abaixo:

1. Compile o código TypeScript:

   ```sh
   npx tsc cli.ts
   ```

2. Após a compilação, execute o arquivo JavaScript gerado:

   ```sh
   node cli.js
   ```

#### Opção 3: Tornar o Script Executável (Linux/macOS)

Se você estiver usando Linux ou macOS, pode tornar o script diretamente executável. Para isso, siga os passos abaixo:

1. Torne o arquivo `cli.ts` executável:

   ```sh
   chmod +x cli.ts
   ```

2. Agora, você pode rodar o script diretamente no terminal:

   ```sh
   ./cli.ts

### Exemplo de Execução

Quando você rodar o script, verá algo assim:

```sh
Welcome to my simple CLI app!
What is your name? John
Hello, John!
```