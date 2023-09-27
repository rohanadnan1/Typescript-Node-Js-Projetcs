var Customer = /** @class */ (function () {
    function Customer(bankAccount) {
        this.bankAccount = bankAccount;
        this.balance = 0;
        this.lastDebit = 0;
        this.lastCredit = 0;
        this.bankAccount = bankAccount;
    }
    Customer.prototype.credit = function (cAmount) {
        this.balance += cAmount;
        this.lastCredit = cAmount;
    };
    Customer.prototype.debit = function (dAmount) {
        if (this.balance < dAmount) {
            console.log("Insufficient funds");
        }
        else {
            this.balance -= dAmount;
            this.lastDebit = dAmount;
        }
    };
    Customer.prototype.bankStatement = function () {
        console.log("Account Holder: ".concat(this.bankAccount.firstName, " ").concat(this.bankAccount.lastName, " \nAccount Balance: ").concat(this.balance, " \nLast Withdrawal: ").concat(this.lastDebit, " \nLast Deposit: ").concat(this.lastCredit));
    };
    return Customer;
}());
var rohan = new Customer({
    firstName: "Rohan",
    lastName: "Adnan",
    age: 20,
    gender: "Male"
});
rohan.credit(100);
rohan.credit(200);
rohan.credit(2000);
rohan.debit(100);
rohan.debit(50);
rohan.debit(1230);
rohan.bankStatement();
