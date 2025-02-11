import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewAcconut } from './class/newAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Pedro', 10)
const companyAccount: CompanyAccount = new CompanyAccount('Driven', 20)
const newAcconut: NewAcconut = new NewAcconut('Pedro', 10)

peopleAccount.deposit(50)
peopleAccount.withdraw(25)
peopleAccount.withdraw(25)
peopleAccount.getBalance()
peopleAccount.getName()

const getLoan: number = companyAccount.getLoan(200)

companyAccount.deposit(200)
companyAccount.getLoan(400)
companyAccount.withdraw(500)
companyAccount.getBalance()
companyAccount.getName()
companyAccount.sumBalance(getLoan)

newAcconut.deposit(300)
newAcconut.setInvestment(300)
newAcconut.withdraw(2)
newAcconut.getBalance()
newAcconut.getName()

