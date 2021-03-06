// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const km = prompt ("Quanti km devi percorrere?");

const età = prompt ("Quanti anni hai?");

const pkm = 0.21;

let prezzo = pkm * km;

console.log(prezzo)

if (età < 18 ) {
    prezzo = ((pkm * km) * 0.8);
} 

else if ( età >= 65 ) {
    prezzo = ((pkm * km) * 0.6);

}
window.alert((prezzo.toFixed(2)) + "€");