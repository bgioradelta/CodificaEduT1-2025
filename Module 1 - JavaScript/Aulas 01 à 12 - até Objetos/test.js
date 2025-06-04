let matriz = [
    [1, 15, 8],
    [40, 2, 60],
    [5, 66, 3],
];

let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < matriz.length; i++) {
    somaPrincipal += matriz[i][i];
    somaSecundaria += matriz[i][matriz.length - 1 - i];
}

console.table(matriz);
console.log(`[0][0] + [1][1] + [2][2] = ${somaPrincipal}`);
console.log(`[0][2] + [1][1] + [2][0] = ${somaSecundaria}`);

console.log(matriz.length)