'use strict'
/*


const getSecondsOfThisYearUntilNow =   () => 
Math.round((new Date() - new Date(new Date().getFullYear(), 0, 1)) / 1000);

*/

const getSecondsOfThisYearUntilNow =   () => 
  Math.round((Date.now() - new Date(new Date().getFullYear(), 0, 1)) / 1000);


  
 

export default getSecondsOfThisYearUntilNow;

/*
1. Írj egy függvényt `getSecondsOfThisYearUntilNow` néven, 
aminek a visszatérési értéke az aktuális év 01.01. óta eltelt 
másodperceinek a száma!
   Csak a Date konstruktor függvényt 
   (akár példányosítva, akár anélkül), a now() és a getFullYear() 
   metódusokat használd!
*/
