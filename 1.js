// Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
// Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.

function somma (...numbers) {
    return numbers.reduce ((a, number) => a + number, 0);
}

const mySum = somma (4, 5, 16, ' King', ' Bradley');

console.log(mySum);