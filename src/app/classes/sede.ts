import { Comuni } from "./comuni";

export class Sede {
    id?: number;
    via!: string;
    civico!: number;
    cap!: number;
    localita!: string;
    comune!: Comuni;

    constructor () {
        this.comune = new Comuni();
    }
}
