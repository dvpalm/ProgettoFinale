import { Clienti } from "./clienti";
import { StatoFattura } from "./stato-fattura";

export class Fatture {
    id?: number;
    data: Date;
    numero!: number;
    anno!: number;
    importo!: number;
    stato!: StatoFattura;
    cliente!: Clienti;
    
    constructor() {
        this.data = new Date()
    }
}
