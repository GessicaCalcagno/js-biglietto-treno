// TEST
//alert('ciao')

// BLOCCO RACCOLTA DEI DATI E DICHIARAZIONE DI INFO CONOSCIUTE
//Chiediamo all'utente quanti km deve fare

let kiloMetri = prompt("Ciao! Quanti km devi percorrere?"); //String | null
kiloMetri = parseInt(kiloMetri); //Number
console.log(kiloMetri, typeof kiloMetri)

//Chiediamo all'utente la sua età
let age = prompt("Quanti anni hai?"); //String | null
age = parseInt(age); //Number
console.log(age, typeof age)

//PARTE LOGICA
//Dichiaro la variabile (Se meti 'const' non la puoi cambiare e fare i calcoli e serve per forza 'let')
let ticket;

//Calcolo il prezzo del biglietto + aggiungo lo sconto in base all'età
if (age < 17) {
    ticket = (0.21 * kiloMetri) - (0.21 * kiloMetri * 0.2);
} else if (age >= 18 && age < 64) {
    ticket = (0.21 * kiloMetri);
} else if (age > 64) {
    ticket = (0.21 * kiloMetri) - (0.21 * kiloMetri * 0.4);
}

console.log(ticket)

// Limita il risultato a due cifre decimali
let ticket1 = ticket.toFixed(2);
console.log(ticket1)

// OUTPUT
// Preparo il messaggio
const resultMessage = `Il Biglietto costa: ${ticket1} €`;

// Stampo il risultato della somma in pagina
document.getElementById("result").innerHTML = resultMessage;