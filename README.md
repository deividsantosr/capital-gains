# Code Challenge: Capital Gains CLI

## Description

This project is a command-line interface (CLI) application that calculates capital gains taxes based on stock buy and sell transactions.

## Technical and Architectural Decisions

- **TypeScript**:

  - Chosen for its static typing and safety, making maintenance easier and preventing common errors that could occur in pure JavaScript.

- **Architecture**:

  - The project follows a service-based architecture, with the `CapitalGainsService` class responsible for calculating taxes based on the provided transactions.
  - The input format is a JSON file, which is processed to generate the applicable taxes.

## Justification for Using Frameworks and Libraries

- **class-transformer**:

  - Used to convert JSON objects into instances of the `Transaction` and `Tax` classes, allowing for better data manipulation and property conversion (e.g., `unit-cost` to `unitCost`).

- **jest**:

  - Used for unit and integration testing to ensure the reliability of the solution.

## How to Compile and Run the Project

### Installing Node.js

To run this project, you need to have Node.js installed on your machine.

1. Visit the official website: [https://nodejs.org/](https://nodejs.org/)
2. Install the recommended version for your system.
3. Verify the installation by running:
   ```sh
   node -v
   npm -v
   ```

### Installing and Running the Project

1. Clone the repository and navigate to the project folder:
   ```sh
   git clone https://github.com/deividsantosr/capital-gains
   cd capital-gains
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   npm start
   ```

The application will prompt you to enter your transactions in JSON format.

## How to Run the Tests

1. To run unit and integration tests, use the following command:
   ```sh
   npm test
   ```

## Additional Notes

- **Input format**:
  - Transactions must be provided in JSON format.
  - Each transaction must include `operation` ("buy" or "sell"), `unitCost`, and `quantity`.

## Execution Example

When running the script, an example input and output would be:

```sh
Please enter your transactions in JSON format. Press Ctrl+D to finish.
[{"operation":"buy", "unit-cost":10.00, "quantity": 10000},{"operation":"sell", "unit-cost":20.00, "quantity": 5000}]
[ Tax { tax: 0 }, Tax { tax: 10000 } ]
```
