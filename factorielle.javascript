function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Exemple d'utilisation :
console.log(factorial(5)); // Affichera 120
