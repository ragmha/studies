/**
* Exercise 1:
*
* Extend the following BankAccount class to a CheckingAccount class that charges
* $1 for every deposit and withdrawal.
*
  class BankAccount(initialBalance: Double) {
    private var balance = initialBalance
    def currentBalance = balance
    def deposit(amount: Double) = { balance += amount; balance }
    def withdraw(amount: Double) = { balance -= amount; balance }
  }
*
**/

class BankAccount(initialBalance: Double) {
  private var balance = initialBalance

  def currentBalance = balance

  def deposit(amount: Double) = { balance += amount; balance}

  def withdraw(amount: Double) = { balance -= amount; balance}

  override def toString = "Balance = %.2f".format(balance)

}


 class CheckingAccount(initialBalance: Double, val commision: Double = 1.0) extends BankAccount(initialBalance) {

   override def deposit(amount: Double): Double = super.deposit(amount - commision)

   override def withdraw(amount: Double): Double = super.withdraw(amount + commision)
 }

 val a = new BankAccount(100.0)

 a.deposit(100)
 println(a)

 a.withdraw(100)
 println(a)


val b = new CheckingAccount(100.0, 2.0)

b.deposit(100)
println(b)

b.withdraw(100)
println(b)
