2. Extend the BankAccount class of the preceding exercise into a class
SavingsAccount that earns interest every month (when a method earnMonthlyInterest
is called) and has three free deposits or withdrawals every month.
Reset the transaction count in the earnMonthlyInterest method.

```scala
class BankAccount(initialBalance: Double) {
  private var balance = initialBalance

  def currentBalance = balance

  def deposit(amount: Double) = { balance += amount; balance}

  def withdraw(amount: Double) = { balance -= amount; balance}

  override def toString = "Balance = %.2f".format(balance)

}


 class SavingsAccount(initialBalance: Double,
                      val interestPerYear: Double = 0.10,
                      val freeTransactions: Int = 3,
                      val commision: Double = 1.0
                     ) extends BankAccount(initialBalance){

   var transactionsInMonth = 0

   def isFreeTransaction() = transactionsInMonth <= freeTransactions

   override def deposit(amount: Double) = {
     transactionsInMonth += 1
     super.deposit(amount - ( if (isFreeTransaction()) 0 else commision))
   }

   override def withdraw(amount: Double) = {
     transactionsInMonth += 1
     super.deposit(amount + (if (isFreeTransaction()) 0 else commision))
   }

   def earnMonthlyInterest = {
     transactionsInMonth = 0
     super.deposit(currentBalance * interestPerYear / 12)
   }

 }

   val b = new BankAccount(100.0)

   println("BankAccount")

   b.deposit(100);
   println(b)

   b.withdraw(100);
   println(b)

   println("SavingAccount")

   val a = new SavingsAccount(100.0, 0.10, 2, 2.0)

   a.deposit(100);
   println(a)

   a.withdraw(100);
   println(a)

   a.deposit(100);
   println(a)

   a.withdraw(100);
   println(a)

   a.earnMonthlyInterest
   println("Monthly Interest: " + a)

   a.deposit(100);
   println(a)

   a.withdraw(100);
   println(a)
```
