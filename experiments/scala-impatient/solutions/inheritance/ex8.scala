/**
* Exercise 8:
*
* Compile the Person and SecretAgent classes in Section 8.6, “Overriding Fields,”
* on page 95 and analyze the class files with javap. How many name fields are there?
* How many name getter methods are there? What do they get? (Hint: Use the -c and
* -private options.)
*
**/

class Person(val name: String) {
  override def toString = getClass.getName + "[name=" + name + "]"
}

/* =>
  public class Person {
    private final java.lang.String name;
    private java.lang.String name();
    private java.lang.String toString();
    public Person(java.lang.String);
  }
*/


class SuperAgent(codename: String) extends Person(codename) {
  override val name = "secret" // doesn't reveal name
  override val toString = "secret" // doesn't reveal class name
}

/*
public class SecretAgent extends Person {
  public java.lang.String name();
  public java.lang.String toString();
  public SecretAgent(java.lang.String);
}
*/
