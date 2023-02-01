macro_rules! say_cheese {
  () => {
    println!("Say Cheese!");
  }
}



fn main() {
  println!("Hello World!");
  println!("I'm a Rustacean");
  say_cheese!();
}