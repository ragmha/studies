/**
* Exercise 7:
*
* Print a table of all Java properties reported by the getProperties method of
* the java.lang.System class, like this:
*
  java.runtime.name             | Java(TM) SE Runtime Environment
  sun.boot.library.path         | /home/apps/jdk1.6.0_21/jre/lib/i386
  java.vm.version               | 17.0-b16
  java.vm.vendor                | Sun Microsystems Inc.
  java.vendor.url               | http://java.sun.com/
  path.separator                | :
  java.vm.name                  | Java HotSpot(TM) Server VM
*
* You need to find the length of the longest key before you can print the table.
*
**/

import collection.JavaConverters._

val props: scala.collection.Map[String, String] = java.lang.System.getProperties.asScala

for((k, v) <- props) println(k + "  | " + v) /* =>
  java.runtime.name  | Java(TM) SE Runtime Environment
  sun.boot.library.path  | /Library/Java/JavaVirtualMachines/jdk1.8.0_112.jdk/Contents/Home/jre/lib
  java.vm.version  | 25.112-b16
  user.country.format  | BD
  gopherProxySet  | false
  java.vm.vendor  | Oracle Corporation
  java.vendor.url  | http://java.oracle.com/
  path.separator  | :
  java.vm.name  | Java HotSpot(TM) 64-Bit Server VM
  file.encoding.pkg  | sun.io
  user.country  | US
  sun.java.launcher  | SUN_STANDARD
  sun.os.patch.level  | unknown
  java.vm.specification.name  | Java Virtual Machine Specification
  user.dir  | /Applications/IntelliJ IDEA CE.app/Contents/bin
  java.runtime.version  | 1.8.0_112-b16
  java.awt.graphicsenv  | sun.awt.CGraphicsEnvironment
  java.endorsed.dirs  | /Library/Java/JavaVirtualMachines/jdk1.8.0_112.jdk/Contents/Home/jre/lib/endorsed
  os.arch  | x86_64
  java.io.tmpdir  | /var/folders/xv/nppd51_j2ns58rjnq_rfc25w0000gn/T/
  line.separator  |
  ....
*/
