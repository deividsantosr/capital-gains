import { Transaction } from '../models/Transaction';
import { plainToInstance } from 'class-transformer';
import { Tax } from '../models/Tax';

export class CapitalGainsService {
    static readonly TAX_FREE_LIMIT: number = 20000;

    private loss: number = 0;
    private weightedAverage: number = 0;
    private sharesBalance: number = 0;

    constructor(private inputJSON: string) {
    }

    public process(): Tax[] {
        const taxes: Tax[] = [];
        const transactions: Transaction[] = plainToInstance(Transaction, JSON.parse(this.inputJSON));

        transactions.forEach(transaction => {
            const tax = this.getTax(transaction);
            taxes.push(new Tax(tax));
        })

        console.log(taxes);

        this.clear();

        return taxes;
    };

    private getTax(transaction: Transaction): number {
        const totalSaleAmount = transaction.getTotal();
        const profitOrLoss = (transaction.unitCost - this.weightedAverage) * transaction.quantity;

        // If the operation is a purchase, updates the history and does not pay tax
        if (transaction.operation === 'buy') {
            this.updateWeightedAvg(transaction);

            return 0.00;
        }

        // If the sale amount is less than or equal to the tax-free limit, no tax is paid
        if (totalSaleAmount <= CapitalGainsService.TAX_FREE_LIMIT) {
            this.incrementLoss(profitOrLoss);
            this.updateSharesBalance(transaction.quantity);

            return 0.00;
        }

        // If the transaction results in a loss, accumulate it for future sales offset
        if (profitOrLoss < 0) {
            this.incrementLoss(profitOrLoss);
            this.updateSharesBalance(transaction.quantity);

            return 0.00;
        }

        // If the transaction results in a profit, offset the accumulated loss
        const profit = profitOrLoss + this.loss;
        let tax = 0.00;

        if (profit > 0) {
            tax = profit * 0.2; // 20% on the actual profit
            this.loss = 0;
        } else {
            this.loss = profit; // Continue accumulating the loss
        }

        this.updateSharesBalance(transaction.quantity);

        return parseFloat(tax.toFixed(2));
    }

    private updateWeightedAvg(transaction: Transaction) {
        if (transaction.operation === 'buy') {
            const totalCost = (this.sharesBalance * this.weightedAverage) + (transaction.getTotal());
            this.sharesBalance += transaction.quantity;
            this.weightedAverage = totalCost / this.sharesBalance;
        }
    }

    private incrementLoss(amount: number): void {
        this.loss += amount;
    }

    private updateSharesBalance(quantity: number): void {
        this.sharesBalance -= quantity;
    }

    private clear(): void {
        this.inputJSON = '';
        this.loss = 0;
        this.weightedAverage = 0;
        this.sharesBalance = 0;
    }
}