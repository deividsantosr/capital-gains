import { CapitalGainsService } from '../../src/services/CapitalGainsService';
import { Transaction } from '../../src/models/Transaction';
import { instanceToPlain } from 'class-transformer';

describe('CapitalGainsService - Integration Tests', () => {
  it('scenario #1', () => {
    scenario1();
  });

  function scenario1() {
    const transactions: Transaction[] = [
      new Transaction('buy', 10.00, 100),
      new Transaction('sell', 15.00, 50),
      new Transaction('sell', 15.00, 50)
    ];

    const inputJSON = JSON.stringify(instanceToPlain(transactions));

    const calculator = new CapitalGainsService(inputJSON);
    const taxes = calculator.process();

    expect(taxes.length).toBe(3);
    expect(taxes[0].tax).toBe(0);
    expect(taxes[1].tax).toBe(0);
    expect(taxes[2].tax).toBe(0);
  }

  function scenario2() {
    const transactions: Transaction[] = [
      new Transaction('buy', 10, 10000),
      new Transaction('sell', 20, 5000),
      new Transaction('sell', 5, 5000)
    ];

    const inputJSON = JSON.stringify(instanceToPlain(transactions));

    const calculator = new CapitalGainsService(inputJSON);
    const taxes = calculator.process();

    expect(taxes.length).toBe(3);
    expect(taxes[0].tax).toBe(0);
    expect(taxes[1].tax).toBe(10000);
    expect(taxes[2].tax).toBe(0);
  }

  it('scenario #2', () => {
    scenario2();
  });

  it('scenario #1 + scenario #2', () => {
    scenario1();
    scenario2();
  });

  it('scenario #2', () => {
    const transactions: Transaction[] = [
      new Transaction('buy', 10, 10000),
      new Transaction('sell', 20, 5000),
      new Transaction('sell', 5, 5000)
    ];

    const inputJSON = JSON.stringify(instanceToPlain(transactions));

    const calculator = new CapitalGainsService(inputJSON);
    const taxes = calculator.process();

    expect(taxes.length).toBe(3);
    expect(taxes[0].tax).toBe(0);
    expect(taxes[1].tax).toBe(10000);
    expect(taxes[2].tax).toBe(0);
  });

  it('scenario #3', () => {
    const transactions: Transaction[] = [
      new Transaction('buy', 10, 10000),
      new Transaction('sell', 5, 5000),
      new Transaction('sell', 20, 3000)
    ];

    const inputJSON = JSON.stringify(instanceToPlain(transactions));

    const calculator = new CapitalGainsService(inputJSON);
    const taxes = calculator.process();

    expect(taxes.length).toBe(3);
    expect(taxes[0].tax).toBe(0);
    expect(taxes[1].tax).toBe(0);
    expect(taxes[2].tax).toBe(1000);
  });

  it('scenario #4', () => {
    const transactions: Transaction[] = [
      new Transaction('buy', 10, 10000),
      new Transaction('buy', 25, 5000),
      new Transaction('sell', 15, 10000)
    ];

    const inputJSON = JSON.stringify(instanceToPlain(transactions));

    const calculator = new CapitalGainsService(inputJSON);
    const taxes = calculator.process();

    expect(taxes.length).toBe(3);
    expect(taxes[0].tax).toBe(0);
    expect(taxes[1].tax).toBe(0);
    expect(taxes[2].tax).toBe(0);
  });

  it('scenario #5', () => {
    const transactions: Transaction[] = [
      new Transaction('buy', 10, 10000),
      new Transaction('buy', 25, 5000),
      new Transaction('sell', 15, 10000),
      new Transaction('sell', 25, 5000)
    ];

    const inputJSON = JSON.stringify(instanceToPlain(transactions));

    const calculator = new CapitalGainsService(inputJSON);
    const taxes = calculator.process();

    expect(taxes.length).toBe(4);
    expect(taxes[0].tax).toBe(0);
    expect(taxes[1].tax).toBe(0);
    expect(taxes[2].tax).toBe(0);
    expect(taxes[3].tax).toBe(10000);
  });

  it('scenario #6', () => {
    const transactions: Transaction[] = [
      new Transaction('buy', 10, 10000),
      new Transaction('sell', 2, 5000),
      new Transaction('sell', 20, 2000),
      new Transaction('sell', 20, 2000),
      new Transaction('sell', 25, 1000)
    ];

    const inputJSON = JSON.stringify(instanceToPlain(transactions));

    const calculator = new CapitalGainsService(inputJSON);
    const taxes = calculator.process();

    expect(taxes.length).toBe(5);
    expect(taxes[0].tax).toBe(0);
    expect(taxes[1].tax).toBe(0);
    expect(taxes[2].tax).toBe(0);
    expect(taxes[3].tax).toBe(0);
    expect(taxes[4].tax).toBe(3000);
  });

  it('scenario #7', () => {
    const transactions: Transaction[] = [
      new Transaction('buy', 10, 10000),
      new Transaction('sell', 2, 5000),
      new Transaction('sell', 20, 2000),
      new Transaction('sell', 20, 2000),
      new Transaction('sell', 25, 1000),
      new Transaction('buy', 20, 10000),
      new Transaction('sell', 15, 5000),
      new Transaction('sell', 30, 4350),
      new Transaction('sell', 30, 650)
    ];

    const inputJSON = JSON.stringify(instanceToPlain(transactions));

    const calculator = new CapitalGainsService(inputJSON);
    const taxes = calculator.process();

    expect(taxes.length).toBe(9);
    expect(taxes[0].tax).toBe(0);
    expect(taxes[1].tax).toBe(0);
    expect(taxes[2].tax).toBe(0);
    expect(taxes[3].tax).toBe(0);
    expect(taxes[4].tax).toBe(3000);
    expect(taxes[5].tax).toBe(0);
    expect(taxes[6].tax).toBe(0);
    expect(taxes[7].tax).toBe(3700);
    expect(taxes[8].tax).toBe(0);
  });

  it('scenario #8', () => {
    const transactions: Transaction[] = [
      new Transaction('buy', 10, 10000),
      new Transaction('sell', 50, 10000),
      new Transaction('buy', 20, 10000),
      new Transaction('sell', 50, 10000)
    ];

    const inputJSON = JSON.stringify(instanceToPlain(transactions));

    const calculator = new CapitalGainsService(inputJSON);
    const taxes = calculator.process();

    expect(taxes.length).toBe(4);
    expect(taxes[0].tax).toBe(0);
    expect(taxes[1].tax).toBe(80000);
    expect(taxes[2].tax).toBe(0);
    expect(taxes[3].tax).toBe(60000);
  });
});
