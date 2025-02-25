import { ITax } from "./interfaces/ITax";

export class Tax implements ITax {
    tax: number;

    constructor(tax: number) {
        this.tax = tax;
    }
}