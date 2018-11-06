övning 1


/*-- Övning 1 */
typeof 1.01

typeof 'false'

typeof null

typeof pancake


typeof true + true + false

typeof 5 && 8

typeof 5 || 8

typeof !5

/*----*/


typeof 1 / 0

typeof 1 || 0

typeof '123' + 0


typeof '1000' / 10

typeof 123.4 - ''

typeof '5' + "0" / '5' + 0

  '1' + '5' - '4' * '2' - '3'


typeof 'kalle' - 5

typeof undefined || null || 0 || false || 'foo'

typeof !!5

typeof true && false || false && true *
  /

typeof(typeof true)

typeof 1 + 2 * 3 + 4 * 5 + 6

typeof 2 < 3

typeof 'två' < 'tre'

17 === 17.0

typeof 17 === '17'

typeof 17.000000000000000000001 == 17

/* Övning 2 var enkel */


/*
3. Skriv ett program som frågar vad användaren heter och skriver ut "Välkommen <NN>!"
där <NN> är användarens namn. Tips: använd console.log för att skriva ut och prompt för att hämta input från användaren.
Se till att spara namnet i en variabel. Exempel:
let x = prompt("Meddelande");
console.log(x);
*/

let namn = prompt('Vänligen skriv in ditt namn');

console.log(namn);

/*
4. Skriv ett program som frågar användaren efter två tal och sparar dem i variabler.
Sedan ska det skriva ut talens summa, differens och produkt.
*/

let x;
let z;

x = prompt('Skriv in ett tal');
z = prompt('skriv in ett tal');

console.log(x + z);
console.log(x - z)
console.log(x * z);
console.log(x / z);


/**/
/*
5. Skriv ett program som frågar användaren efter ett tal.
Programmet ska skriva ut talet avrundat till ett heltal.
Extra utmaning: skriv ut talet avrundat till en decimal i stället.
*/
let x = prompt('Skriv in något');
console.log(Math.round(x));
