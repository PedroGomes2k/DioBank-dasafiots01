import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (loan: number): number => {
    console.log(`Voce pegou um empréstimo de ${loan}!`)
    return loan
  }
}
