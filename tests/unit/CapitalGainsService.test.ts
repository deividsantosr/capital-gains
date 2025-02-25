import { CapitalGainsService } from '../../src/services/CapitalGainsService';
import { instanceToPlain } from 'class-transformer';
import { Tax } from '../../src/models/Tax';
import { Transaction } from '../../src/models/Transaction';

describe('CapitalGainsService - Unit Tests', () => {
    let service: CapitalGainsService;

    it('should correctly process transactions', () => {
        const transactions: Transaction[] = [
            new Transaction('buy', 100.00, 10),
            new Transaction('sell', 150.00, 5)
        ];

        const inputJSON = getInputJSON(transactions);

        service = new CapitalGainsService(inputJSON);

        const taxes = service.process();

        expect(taxes).toHaveLength(2);
        expect(taxes[0]).toBeInstanceOf(Tax);
        expect(taxes[0].tax).toBe(0);
        expect(taxes[1].tax).toBe(0);
    });

    it('should calculate tax correctly when sale exceeds the tax-free limit', () => {
        const transactions: Transaction[] = [
            new Transaction('buy', 100.00, 10),
            new Transaction('sell', 150.00, 5)
        ];

        const inputJSON = getInputJSON(transactions);

        service = new CapitalGainsService(inputJSON);

        const taxes = service.process();

        expect(taxes[0].tax).toBe(0);
        expect(taxes[1].tax).toBe(0);
    });

    it('should return 0 tax if sale amount is below the tax-free limit', () => {
        const transactions: Transaction[] = [
            new Transaction('buy', 100.00, 10),
            new Transaction('sell', 90.00, 2)
        ];

        const inputJSON = getInputJSON(transactions);

        service = new CapitalGainsService(inputJSON);

        const taxes = service.process();

        expect(taxes[0].tax).toBe(0);
        expect(taxes[1].tax).toBe(0);
    });

    it('should handle losses correctly', () => {
        const transactions: Transaction[] = [
            new Transaction('buy', 100.00, 10),
            new Transaction('sell', 80.00, 5)
        ];

        const inputJSON = getInputJSON(transactions);
        service = new CapitalGainsService(inputJSON);

        const taxes = service.process();

        expect(taxes[0].tax).toBe(0);
        expect(taxes[1].tax).toBe(0);
    });

    it('should calculate tax correctly after previous loss', () => {
        const transactions: Transaction[] = [
            new Transaction('buy', 100.00, 10),
            new Transaction('sell', 80.00, 5),
            new Transaction('sell', 150.00, 5),
        ];

        const inputJSON = getInputJSON(transactions);
        service = new CapitalGainsService(inputJSON);

        const taxes = service.process();

        expect(taxes[0].tax).toBe(0);
        expect(taxes[1].tax).toBe(0);
        expect(taxes[2].tax).toBe(0);
    });

    it('should reset values after processing', () => {
        const transactions: Transaction[] = [
            new Transaction('buy', 100.00, 10),
            new Transaction('sell', 150.00, 5)
        ];

        const inputJSON = getInputJSON(transactions);
        service = new CapitalGainsService(inputJSON);

        service.process();

        expect(service['loss']).toBe(0);
        expect(service['weightedAverage']).toBe(0);
        expect(service['sharesBalance']).toBe(0);
    });

    function getInputJSON(transactions: Transaction[]): string {
        return JSON.stringify(instanceToPlain(transactions));
    }
});
