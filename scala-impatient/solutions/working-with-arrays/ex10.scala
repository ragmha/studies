/**
*
* Exercise 10:
* Make a collection of all time zones returned by java.util.TimeZone.getAvailableIDs
* that are in America. Strip off the "America/" prefix and sort the result.
*
**/

val tz = java.util.TimeZone.getAvailableIDs

val result = tz
.filter(_.startsWith("America/"))
.map(_.stripPrefix("America/"))

result
/* => Array(
  "Adak",
  "Anchorage",
  "Anguilla",
  "Antigua",
  "Araguaina",
  "Argentina/Buenos_Aires",
  "Argentina/Catamarca",
  "Argentina/ComodRivadavia",
  "Argentina/Cordoba",
  "Argentina/Jujuy",
  "Argentina/La_Rioja",
  "Argentina/Mendoza",
  "Argentina/Rio_Gallegos",
  "Argentina/Salta",
  "Argentina/San_Juan",
  "Argentina/San_Luis",
  "Argentina/Tucuman",
  "Argentina/Ushuaia",
  "Aruba",
  "Asuncion",
  "Atikokan",
  ....
  )
*/
