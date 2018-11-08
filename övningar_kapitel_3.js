//2a. Skriv en funktion med namnet add som lägger ihop två tal och returnerar resultatet.

let add = (a, b) => a + b;

//add(4,5)

/*2b. Skriv en funktion med namnet multi som multiplicerar tre tal och returnerar resultatet.
Vad händer om man anropar funktionen med färre än tre parametrar? */

//Om vi anropar med färre parametrar visas 'NaN';

let multi = (a, b, c) => a * b * c;

multi(1, 2, 4)

/*
2c Skriv en funktion som tar fyra tal som parametrar.
Den ska multiplicera de tre första och lägga ihop resultatet med den fjärde.
Använd funktionerna add och multi.
*/


let tal = (a, b, c, d) => a * b * c == d;

tal(1, 2, 3, 4)
/*
3. Skriv en funktion som tar tre parametrar: name, city och favoriteColor.
Den ska skriva ut informationen till konsolen i en fullständig mening.
Exempel "Välkommen Namn från Göteborg med favvofärg blått".
*/


let favorite = (name, city, favoriteColor) => console.log(`Välkommen ${name} från ${city} med favvofärg ${favoriteColor}.`);

//favorite('Simon', 'Göteborg', 'blått');

/*
4. Skriv en funktion som tar en parameter som ska vara en sträng och returnerar ett tal.
Om det inte går att göra om parametern till ett tal ska funktionen returnera strängen oförändrad. Tips: minus noll.
*/
