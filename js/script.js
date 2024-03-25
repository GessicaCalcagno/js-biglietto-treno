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
//Dichiaro la variabile (Se metti 'const' non la puoi cambiare e fare i calcoli e serve per forza 'let')
let ticket;
let discount;

//Calcolo il prezzo del biglietto + aggiungo lo sconto in base all'età
if (age < 18) {
    ticket = (0.21 * kiloMetri) - (0.21 * kiloMetri * 0.2);
    discount = "sei minorenne";
} else if (age >= 18 && age < 65) {
    ticket = (0.21 * kiloMetri);
    discount = "non ti è stato applicato lo sconto"
} else if (age >= 65) {
    ticket = (0.21 * kiloMetri) - (0.21 * kiloMetri * 0.4);
    discount = " sei over 65";
}

console.log(ticket)

// Limita il risultato a due cifre decimali
let ticket1 = ticket.toFixed(2); //String
console.log(ticket1)

// OUTPUT
// Preparo il messaggio
const resultMessage = `Il Biglietto costa: ${ticket1} € perché ${discount}.`;

// Stampo il risultato della somma in pagina
document.getElementById("result").innerHTML = resultMessage;