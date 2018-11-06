/*1 Skriv ett program som frågar användaren efter ett lösenord.
Hitta på ett hemligt lösenord och spara det i en variabel.
När användaren har skrivit in ett ord ska programmet jämföra med det
sparade lösenordet och skriva ut om det var rätt eller inte.
Använd en if-sats.
*/

let password = prompt('skriv in');
if (password == 'kanel') {
  console.log(true);
} else {
  console.log(false);
}

/*
2 Skriv ett program som frågar användaren efter ett tal.
Det ska skriva ut om talet är mindre än 100, lika med 100 eller större.
*/

let tal = prompt('Skriv in tal här);

    if (tal < 100) {
      console.log('Ditt tal är mindre än 100')
    }
    if (tal == 100) {
      console.log('Ditt tal är lika med 100')
    }
    if (tal > 100) {
      console.log('ditt tal är större än 100')
    };

    /*
    3. Skriv ett program som frågar användaren efter ett tal mellan 1 och 100.
    Programmet ska ha ett hemligt tal lagrat i en variabel.
    Det ska fortsätta fråga användaren till dess att användaren gissar det hemliga talet.
    Om man gissade för högt eller för lågt så ska det skrivas ut, så att användaren har en rimlig chans att klara det.*/


    let usernumber = prompt('Skriv in ditt nummer här!);
        let secretnumber = 10;

        if (usernumber > secretnumber) {
          console.log('för högt');
        } else if (usernumber < secretnumber) {
          console.log('för lågt');
        } else if (usernumber == secretnumber) {
          console.log('bingo!');
        };

        /* 4. Skriv ett program som ber användaren skriva in en månad.
        Programmet ska göra om månaden till månadens siffervärde. T.ex. ska januari bli 1 och december 12.
        Använd switch. Jämför din lösning med en klasskamrat när du är klar.*/

        let input = 'mars'; input = input.toLowerCase();
        let monthNumber;

        switch (input) {
          case 'januari':
            monthNumber = 1;
            break;
          case 'februari':
            monthNumber = 2;
            break;
          case 'mars':
            monthNumber = 3
            break;
        }
        console.log(`Månadens nummer är ${monthNumber}!`);


        /*5. Skriv ett program som skriver ut talen 1 till 16 med hjälp av en loop.*/

        lista = [];
        for (z = 0; z < 16; z++) {
          console.log(lista.push(z));
        }
        console.log(lista);


        /*  6. Skriv ett program som har talet 65536 i en variabel.
        Så länge som variabeln är större än 2 ska programmet loopa,
        skriva ut talet och sedan dela variabeln med 2.*/

        let bigNumber = 65536;




        /*
         7. Skriv ett program som loopar och frågar användaren efter en sträng.
         Så länge som strängen inte är en tom sträng så ska programmet lägga ihop den med tidigare strängar,
         med ett mellanrum.
         Om användaren t.ex. har skrivit "ord1" tidigare och skriver "ord2" ska den nya strängen bli "ord1 ord2".
         Fortsätt loopa tills användaren skickar en tom sträng eller en punkt.
        */









        Console.log('slut på sidan');
