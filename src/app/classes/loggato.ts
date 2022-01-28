import { Roles } from "./roles";

export class Loggato {
    id?: number;
    username!: string;
    email!: string;
    roles!: Array<Roles>
    accessToken!: string;
    tokenType!: string;
}
