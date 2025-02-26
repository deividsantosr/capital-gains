import { CapitalGainsService } from '../services/CapitalGainsService';

export function processTransactions(line: string): void {
    try {
        let inputJSON = line.trim();

        if (!inputJSON) {
            console.error('Error: The previous input is empty or invalid!');
            return;
        }

        const calculator = new CapitalGainsService(inputJSON);
        const taxes = calculator.process();

        console.log(taxes);
    }
    catch (err) {
        console.error('Error processing JSON input:', err);
    }
}