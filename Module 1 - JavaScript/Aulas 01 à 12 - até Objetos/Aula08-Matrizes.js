let matriz = [];

for (let i = 0; i < 10; i++) {
    matriz[i] = []
    for (let j = 0; j < 10; j++) {
        matriz[i][j] = 1
    }
}

console.table(matriz);

// Soma Diagonal Principal

let somaDiagonalPrincipal = 0;

for (let i = 0; i < 10; i++) {
    somaDiagonalPrincipal += matriz[i][i];
}

console.log("Soma da diagonal principal:", somaDiagonalPrincipal);