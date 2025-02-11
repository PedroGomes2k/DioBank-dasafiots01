import { DioAccount } from "./DioAccount";

export class NewAcconut extends DioAccount {

    constructor(name: string, numberAccont: number) {
        super(name, numberAccont)
    }

    setInvestment = (value: number) => {
        this.deposit(value + 10)
    }
}