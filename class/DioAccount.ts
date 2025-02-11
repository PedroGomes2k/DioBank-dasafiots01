export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (deposit: number): number => {
    this.accountValidation()
    this.balance += deposit
    console.log(`Voce depositou ${deposit}, e seu novo saldo é de ${deposit + this.balance}!`)
    return deposit
  }

  withdraw = (widhdraw: number): void => {
    this.accountValidation()
    if (widhdraw <= this.balance) {
      console.log(`Voce sacou ${widhdraw}`)
    } else { throw Error("Your withdraw is biggest of your balence") }

  }

  getBalance = (): void => {
    this.accountValidation()
    console.log(this.balance)
  }

  sumBalance = (loan: number): void => {
    this.balance += loan
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  private accountValidation = () => {
    if (this.validateStatus()) {
      return this.status
    } else {
      throw new Error('Invalid Account')
    }
  }

}
