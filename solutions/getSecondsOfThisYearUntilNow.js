'use strict'

function getSecondsOfThisYearUntilNow () {
  const now = new Date()
  const dayFrom = new Date('January 1 ' + now.getFullYear());
  return parseInt((now-dayFrom)/1000)
}



export default getSecondsOfThisYearUntilNow;

/*
1. Írj egy függvényt `getSecondsOfThisYearUntilNow` néven, 
aminek a visszatérési értéke az aktuális év 01.01. óta eltelt 
másodperceinek a száma!
   Csak a Date konstruktor függvényt 
   (akár példányosítva, akár anélkül), a now() és a getFullYear() 
   metódusokat használd!
*/
