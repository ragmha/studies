5. Make a class Student with read-write JavaBeans properties name (of type String) and id (of type Long). What methods are generated? (Use javap to check.) Can you call the JavaBeans getters and setters in Scala? Should you?

```scala
import scala.beans.BeanProperty

class Student(@BeanProperty var name: String, @BeanProperty var id: Long ) {}

/* javap =>
 method generated are getId, setId, getName, setName
 public class Student {
   public java.lang.String name();
   public void name_$eq(java.lang.String);
   public void setName(java.lang.String);
   public long id();
   public void id_$eq(long);
   public void setId(long);
   public java.lang.String getName();
   public long getId();
   public Student(java.lang.String, long);
 }
 */

 val Raghib = new Student("Raghib", 2457)
/*
* - Yes you can call getters and setters but you should not use them directly
* - It's only necessary to get compatibility with Library that uses Bean
***/

```
