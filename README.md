> Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

---

1. Chiediamo all'utente il numero di km che deve percorrere e la sua età.
2. Calcolare il prezzo del biglietto ed aggiungiamo lo sconto dov'è necessario.

3. INPUT:
- [x] Chiediamo all'utente quanti km deve fare
- [x] Chiediamo all'utente la sua età


4. ESECUZIONE LOGICA:
- [x] Calcoliamo il prezzo del biglietto.
- Dichiariamo una variabile per il risultato:
- [x] - se minorenne (0.21 * km) - (0.21 * km * 0.2)= Prezzo finale
- [x] - se maggiorenne (0.21 * km )= Prezzo finale
- [x] - se over 65 (0.21 * km) - (0.21 * km * 0.4)= Prezzo finale

Bonus:
- [] Il risultato deve essere in decimali



5. OUTPUT
Stampiamo: risultato