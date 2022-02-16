import { Sede } from "./sede";

export class Clienti {
    id?: number;
    ragioneSociale!: string;
    partitaIva!: number;
    tipoCliente!: string;
    email!: string;
    pec!: string;
    telefono!: number;
    nomeContatto!: string;
    cognomeContatto!: string;
    telefonoContatto!: number;
    emailContatto!: string;
    indirizzoSedeOperativa: Sede;
    indirizzoSedeLegale: Sede;
    dataInserimento!: Date;
    dataUltimoContatto!: Date;
    fatturatoAnnuale!: number;

    constructor() {
        this.indirizzoSedeOperativa = new Sede();
        this.indirizzoSedeLegale = new Sede();
        this.dataInserimento = new Date();
        this.dataUltimoContatto = new Date();
    }
}