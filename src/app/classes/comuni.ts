import { Province } from "./province";

export class Comuni {
    id?: number;
    nome!: string;
    provincia!: Province;
    
    constructor(){
        this.provincia = new Province();
    }
}
