import { HasFormatter } from '../interfaces/hasFormatter';

export class Payment implements HasFormatter{
    constructor(
        readonly recipient : string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.recipient} is owed by $${this.amount} for ${this.details}`;
    }
}
