/**
*
* Exercise 11:
* Import java.awt.datatransfer._ and make an object of type SystemFlavorMap
* with the call
*
val flavors = SystemFlavorMap.getDefaultFlavorMap().asInstanceOf[SystemFlavorMap]
*
* Then call the getNativesForFlavor method with parameter DataFlavor.imageFlavor
* and get the return value as a Scala buffer. (Why this obscure class? It’s hard
* to find uses of java.util.List in the standard Java library.)
*
**/

import java.awt.datatransfer._

val flavors = SystemFlavorMap.getDefaultFlavorMap().asInstanceOf[SystemFlavorMap]

flavors.getNativesForFlavor(DataFlavor.imageFlavor).toArray.toBuffer
// => ArrayBuffer(PNG, JFIF): collection.mutable.Buffer[Object]
