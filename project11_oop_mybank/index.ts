interface bankAccount {
    firstName: string;
    lastName: string;
    age: number;
    gender: "Male" | "Female"
}


class Customer{
    balance: number = 0;
    lastDebit: number = 0;
    lastCredit: number = 0;
    constructor(public bankAccount: bankAccount){
        this.bankAccount = bankAccount;
    }
    
    credit(cAmount:number){
        this.balance += cAmount
        this.lastCredit = cAmount
    }

    debit(dAmount:number){
        if(this.balance < dAmount){
            console.log("Insufficient funds")
    }else{
        this.balance -= dAmount
        this.lastDebit = dAmount
    }
    }

    bankStatement(){
        console.log(`Account Holder: ${this.bankAccount.firstName} ${this.bankAccount.lastName} \nAccount Balance: ${this.balance} \nLast Withdrawal: ${this.lastDebit} \nLast Deposit: ${this.lastCredit}`)
    }
}   


let rohan = new Customer({
    firstName: "Rohan",
    lastName: "Adnan",
    age: 20,
    gender: "Male"
})

rohan.credit(100)
rohan.credit(200)
rohan.credit(2000)
rohan.debit(100)
rohan.debit(50)
rohan.debit(1230)
rohan.bankStatement()