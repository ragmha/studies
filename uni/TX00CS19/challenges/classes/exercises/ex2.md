2. Write a class BankAccount with methods deposit and withdraw, and a read-only property balance.

```scala
class BankAccount {
  private var  _balance = 0.0

  def deposit(money: Double) = {
    _balance += money
  }

  def withdraw(money: Double) = {
   if(money < balance) _balance -= money
  }

  def balance = _balance
}

// Test
var B = new BankAccount
B.balance
B.deposit(100)
B.withdraw(200)
B.balance // 100.0

```
