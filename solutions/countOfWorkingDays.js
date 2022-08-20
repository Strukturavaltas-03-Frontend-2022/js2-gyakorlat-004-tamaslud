const countOfWorkingDays = (earlier = new Date(), later = new Date()) => {
  if (earlier > later) {
    throw new Error('The first parameter is earlier date, than second!')
  } else {
    let workingDays = 0;
    later.getDay() == 0 || later.getDay() == 6 ? {} : workingDays = 1;
    while (later > earlier) {
      earlier.getDay() == 0 || earlier.getDay() == 6 ? {} : workingDays ++;
      earlier.setDate(earlier.getDate() +1)
    }
    return workingDays
  }
}


export default countOfWorkingDays;

/*
const from = new Date(2022, 7, 19);
const to = new Date(2022, 7, 22);
console.log(countOfWorkingDays(from, to));

2. Írj egy függvényt `countOfWorkingDays` néven, ami két paramétert kap. 
Mind a két paraméter egy-egy dátum. Az első a  korábbi időpont, a második  
a későbbi időpont.  A visszatérési értéke a két dátum közötti munkanapok 
(hétfő-péntek) száma! A különböző ünnepekkel nem kell számolnod! Ha az első 
dátum korábbi, mint a második akkor dobj egy hibát az alábbi üzenettel: 
`The first parameter is earlier date, than second!`!
Hibát dobni a következő módon tudsz: 

```javascript
  throw new Error(message)
```
A aktuális napot is bele kell számolni a munkanapokba, ha az munkanap!
Sehol ne használj kerekítést!
*/
