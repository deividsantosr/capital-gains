import { Expose } from 'class-transformer';
import { ITransaction } from "./interfaces/ITransaction";

export class Transaction implements ITransaction {
    operation: 'buy' | 'sell';

    @Expose({ name: 'unit-cost' })
    unitCost: number;

    quantity: number;

    constructor(operation: 'buy' | 'sell', unitCost: number, quantity: number) {
        this.operation = operation;
        this.unitCost = unitCost;
        this.quantity = quantity;
    }

    getTotal(): number {
        return this.unitCost * this.quantity;
    }
}