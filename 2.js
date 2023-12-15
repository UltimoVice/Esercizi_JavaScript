// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.
function filterOutOdds (...even) {
    return even.filter(number => (number % 2) === 0);
}

const evenNumber = filterOutOdds(2, 7, 34, 12, 35)

console.log(evenNumber);
